import { Test, TestingModule } from '@nestjs/testing';
import { FriendshipService } from './friendship.service';

describe('PlayerService', () => {
  let provider: FriendshipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FriendshipService],
    }).compile();

    provider = module.get<FriendshipService>(FriendshipService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
