import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LojaModule } from './loja/loja.module';
import { PrismaService } from './prisma/prisma.service';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [LojaModule, ProdutoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
