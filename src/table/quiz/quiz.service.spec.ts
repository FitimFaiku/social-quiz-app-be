import { Test, TestingModule } from '@nestjs/testing';
import { QuizService } from './quiz.service';


describe('QuizService', () => {
  let provider: QuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizService],
    }).compile();

    provider = module.get<QuizService>(QuizService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
