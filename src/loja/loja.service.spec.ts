import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { LojaService } from './loja.service';

describe('LojaService', () => {
  let service: LojaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LojaService, PrismaService],
      imports: [PrismaModule]
    }).compile();

    service = module.get<LojaService>(LojaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
