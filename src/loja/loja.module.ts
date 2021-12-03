import { Module } from '@nestjs/common';
import { LojaService } from './loja.service';
import { LojaController } from './loja.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [LojaController],
  providers: [LojaService],
  imports: [PrismaModule]
})
export class LojaModule {}
