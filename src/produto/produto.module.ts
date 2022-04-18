import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { LojaService } from 'src/loja/loja.service';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService, PrismaService, LojaService],
})
export class ProdutoModule {}
