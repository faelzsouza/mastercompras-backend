import { Test, TestingModule } from '@nestjs/testing';
import { LojaService } from 'src/loja/loja.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdutoService } from './produto.service';

describe('ProdutoService', () => {
  let service: ProdutoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutoService, PrismaService, LojaService],
    }).compile();

    service = module.get<ProdutoService>(ProdutoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
