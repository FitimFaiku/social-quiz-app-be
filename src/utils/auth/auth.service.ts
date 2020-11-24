import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Player } from 'src/table/player/player.entity';
import { PlayerService } from 'src/table/player/player.service';
import { CryptoService } from '../crypto/crypto.service';
import * as moment from 'moment-timezone';
import { RegisterDTO } from 'src/auth/dto/register.dto';
import { IPlayerDTO } from 'src/auth/dto/player.dto';

@Injectable()
export class AuthService {
  constructor(
    private playerService: PlayerService,
    private cryptoService: CryptoService,
    private jwtService: JwtService,
  ) {}

  async validateplayer(playername: string, password: string): Promise<any> {
    const playerRes = await this.verifyplayername(playername);
    await this.verifyPassword(playerRes, password);
    return playerRes;
  }

  async verifyplayername(player_name: string): Promise<Player> {
    const playerResult = await this.playerService.findByPlayerName(player_name);
    if (!playerResult) {
      throw new HttpException(
        'Invalid playername or Password',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const minutesToWait = moment(playerResult.last_login_attempt_date).diff(
      moment(),
    );
    // console.log(minutesToWait);
    if (playerResult.failed_password_attempts < 3) {
      return playerResult;
    }

    // const minutesToWait =
    //   parseInt(playerResult.FailedPasswordAttemptCount / 3) * 5;
    // const lastLogin = playerResult.LastLoginAttemptDate;
    // const timeToStart = lastLogin
    //   ? new Date(lastLogin.getTime() + minutesToWait * 60000)
    //   : currentDate;
    // const diff = timeToStart - currentDate;
    // diff = Math.ceil(diff / 60000);

    return playerResult;
  }

  async verifyPassword(playerResult: Player, password: string, update = false) {
    const incomingKey = await this.cryptoService.getKeyFromPW(
      password,
      playerResult.password,
    );
    // console.log({ incomingKey, pw: playerResult.PW });
    if (incomingKey !== playerResult.password) {
      throw !update
        ? new HttpException(
            'Invalid playername or Password',
            HttpStatus.UNAUTHORIZED,
          )
        : new HttpException('Invalid Password', HttpStatus.CONFLICT);
    }
  }

  async createTempTokenKey(playerResult: Player, token: string) {
    if (!playerResult.portal_key) {
      return;
    }

    const testMessage = 'test';

    const result = await this.cryptoService.encrypt(
      testMessage,
      playerResult.portal_key,
      this.cryptoService.createIV(),
    );
    // console.log('Testmessage enc: ', result);

    // console.log('Portal Key: ', playerResult.portal_key);
    const encIV = this.cryptoService.createIV();
    playerResult.temp_token_key = await this.cryptoService.encrypt(
      playerResult.portal_key,
      Buffer.from(token, 'base64'),
      Buffer.from(encIV, 'base64'),
    );
    // console.log('TempTokenKey: ', playerResult.TempTokenKey);
    playerResult.password_salt = encIV;
    console.log(playerResult)
    await this.playerService.savePlayer(playerResult);
  }

  async login(player: Player) {
    const payload = { playerId: player.player_id, portalID: player.portal_id };
    const token = await this.jwtService.sign(payload);
    await this.createTempTokenKey(player, token);
    return {
      token,
    };
  }

  async register(registerDTO: RegisterDTO){
    const encIV = this.cryptoService.createIV();
    console.log("registerDTO:", registerDTO);

    const passwordKey = await this.cryptoService.getKeyFromPW(
      registerDTO.password,
      encIV,
    );

    const portalKey = await this.cryptoService.encrypt(
      process.env.SECRETKEY,
      Buffer.from(process.env.SECRETKEY, 'base64'),
      Buffer.from(encIV, 'base64'),
    );

    var dateOfBirth = new Date(registerDTO.dateOfBirth);

    const player = new Player();
    player.player_name = registerDTO.username;
    player.e_mail_adress = registerDTO.email;
    player.date_of_birth = dateOfBirth;
    player.password_salt = encIV;
    player.password = passwordKey;
    player.portal_key = portalKey;
    
    await this.playerService.savePlayer(player);
    return this.toPlayerDTO(player);

  }

  toPlayerDTO(player:Player):IPlayerDTO{
    return {
      name:player.player_name, 
      email:player.e_mail_adress, 
      dateOfBirth: player.date_of_birth,
    };
  }

  validateBxHeader(header: string) {
    return header === process.env.BX_SHARED_SECRET;
  }
}
