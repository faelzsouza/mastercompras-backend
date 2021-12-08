import { Module } from '@nestjs/common';
import { LojaService } from './loja.service';
import { LojaController } from './loja.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LojaController],
  providers: [LojaService, PrismaService],
})
export class LojaModule {}
