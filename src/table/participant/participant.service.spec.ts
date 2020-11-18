import { Test, TestingModule } from '@nestjs/testing';
import { ParticipantService } from './participant.service';

describe('ParticipantService', () => {
  let provider: ParticipantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParticipantService],
    }).compile();

    provider = module.get<ParticipantService>(ParticipantService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
