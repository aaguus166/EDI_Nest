import { Test, TestingModule } from '@nestjs/testing';
import { KioscoService } from './kiosco.service';

describe('KioscoService', () => {
  let service: KioscoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KioscoService],
    }).compile();

    service = module.get<KioscoService>(KioscoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
