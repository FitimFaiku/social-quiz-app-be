import { Test, TestingModule } from '@nestjs/testing';
import { FactController } from './facts.controller';


describe('PortalsController Controller', () => {
  let controller: FactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactController],
    }).compile();

    controller = module.get<FactController>(FactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
