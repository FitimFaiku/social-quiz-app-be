import { Test, TestingModule } from '@nestjs/testing';
import { FactService } from './fact.service';


describe('FactService', () => {
  let provider: FactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactService],
    }).compile();

    provider = module.get<FactService>(FactService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
