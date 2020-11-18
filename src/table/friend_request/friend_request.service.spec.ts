import { Test, TestingModule } from '@nestjs/testing';
import { FriendRequestService } from './friend_request.service';


describe('FriendRequestService', () => {
  let provider: FriendRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FriendRequestService],
    }).compile();

    provider = module.get<FriendRequestService>(FriendRequestService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
