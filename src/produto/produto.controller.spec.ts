import { Test, TestingModule } from '@nestjs/testing';
import { LojaService } from 'src/loja/loja.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';

describe('ProdutoController', () => {
  let controller: ProdutoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutoController],
      providers: [ProdutoService, PrismaService, LojaService],
    }).compile();

    controller = module.get<ProdutoController>(ProdutoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
