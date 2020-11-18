import { Test, TestingModule } from '@nestjs/testing';
import { PlayerService } from './player.service';

describe('PlayerService', () => {
  let provider: PlayerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerService],
    }).compile();

    provider = module.get<PlayerService>(PlayerService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
