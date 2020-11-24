import { Injectable } from '@nestjs/common';
import { createCipheriv, createDecipheriv, pbkdf2, randomBytes } from 'crypto';
import { promisify } from 'util';
const pdkdf2Promise = promisify(pbkdf2);

const bytes = 32;

@Injectable()
export class CryptoService {
  private config = {
    hashBytes  : 64,          // size of the generated hash (to be chosen accordint the the chosen algo)
    saltBytes  : 16,          // sise of the salt : larger salt means hashed passwords are more resistant to rainbow table
    iterations : 500000,      // tune so that hashing the password takes about 1 second
    algo       :'sha512',
    encoding   : 'base64'     // hex is readable but base64 is shorter
  };

  /**
   * creates 32byte salt
   * @returns 32byte salt in Base64 format
   */
  createSalt(): string {
    return Buffer.from(randomBytes(bytes)).toString('base64');
  }

  /**
   * creates 16byte IV
   * @returns 16byte IV in Base64 format
   */
  createIV(): string {
    return Buffer.from(randomBytes(16)).toString('base64');
  }

  createCipheriv(key: Buffer, iv: Buffer) {
    return createCipheriv('aes-256-cbc', key, iv);
  }

  /**
   * generates a key via pdkdf2 from a given password and salt
   * @param password
   * @param salt
   * @returns derived Key in Base64 format
   */
  getKeyFromPW(password: string, salt: string): Promise<string> {
    return pdkdf2Promise(
      password,
      salt,
      100000,
      bytes,
      'sha512',
    ).then(derivedKey => derivedKey.toString('base64'));
  }

  encrypt(message, key, iv) {
    try {
      const cipher = createCipheriv('aes-256-cbc', key, iv);
      let encrypted = Buffer.from(
        cipher.update(message, 'utf8', 'binary'),
        'binary',
      );
      const encFinal = Buffer.from(cipher.final('binary'), 'binary');
      encrypted = Buffer.concat([encrypted, encFinal]);
      return encrypted.toString('base64');
    } catch (err) {
      // console.log(err);
      return message;
    }
  }

  decrypt(message, key, iv) {
    try {
      const decipher = createDecipheriv('aes-256-cbc', key, iv);
      let dec = decipher.update(message, 'base64');
      const decFinal = decipher.final();
      dec = Buffer.concat([dec, decFinal]);
      const decrypted = dec.toString('utf8');
      return decrypted;
    } catch (err) {
      // console.log(err);

      return message;
    }
  }

  decryptFields(item, fields, tempTokenKey, key, iv) {
    // var doc = documentToDecrypt;
    // const key = decryptKeyWithToken(tempTokenKey, token);
    fields.forEach(field => {
      try {
        if (item[field]) {
          item[field] = this.decrypt(item[field], key, iv);
        }
      } catch (err) {
        console.log(err);
      }
    });

    return item;
  }

  encryptFields(item, fields, tempTokenKey, key, iv) {
    // var doc = documentToDecrypt;
    // const key = decryptKeyWithToken(tempTokenKey, token);
    fields.forEach(field => {
      try {
        if (item[field]) {
          item[field] = this.encrypt(item[field], key, iv);
        }
      } catch (err) {
        console.log(err);
      }
    });

    return item;
  }
}
