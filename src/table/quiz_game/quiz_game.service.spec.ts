import { Test, TestingModule } from '@nestjs/testing';
import { QuizGameService } from './quiz_game.service';


describe('QuizGameService', () => {
  let provider: QuizGameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizGameService],
    }).compile();

    provider = module.get<QuizGameService>(QuizGameService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
