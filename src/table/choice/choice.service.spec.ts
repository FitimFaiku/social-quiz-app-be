import { Test, TestingModule } from '@nestjs/testing';
import { ChoiceService } from './choice.service';


describe('ChoiceService', () => {
  let provider: ChoiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChoiceService],
    }).compile();

    provider = module.get<ChoiceService>(ChoiceService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
