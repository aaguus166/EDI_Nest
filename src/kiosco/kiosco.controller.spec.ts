import { Test, TestingModule } from '@nestjs/testing';
import { KioscoController } from './kiosco.controller';

describe('KioscoController', () => {
  let controller: KioscoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KioscoController],
    }).compile();

    controller = module.get<KioscoController>(KioscoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
