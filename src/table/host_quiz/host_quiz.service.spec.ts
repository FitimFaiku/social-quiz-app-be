import { Test, TestingModule } from '@nestjs/testing';
import { HostQuizService } from './host_quiz.service';

describe('HostQuizService', () => {
  let provider: HostQuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HostQuizService],
    }).compile();

    provider = module.get<HostQuizService>(HostQuizService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
