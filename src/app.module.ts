import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LojaModule } from './loja/loja.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [LojaModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
