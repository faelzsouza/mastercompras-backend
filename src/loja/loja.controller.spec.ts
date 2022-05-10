import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { LojaController } from './loja.controller';
import { LojaService } from './loja.service';

describe('LojaController', () => {
  let controller: LojaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LojaController],
      providers: [LojaService, PrismaService],
    }).compile();

    controller = module.get<LojaController>(LojaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
