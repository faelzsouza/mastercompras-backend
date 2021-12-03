import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';

@Injectable()
export class LojaService {
  constructor(private prisma: PrismaService) {}

  async create(createLojaDto: CreateLojaDto) {
    return await this.prisma.loja.create({ data: createLojaDto });
  }

  async findAll() {
    return await this.prisma.loja.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.loja.findUnique({ where: { id } });
  }

  async update(id: number, updateLojaDto: UpdateLojaDto) {
    return await this.prisma.loja.update({
      where: { id },
      data: updateLojaDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.loja.delete({ where: { id } });
  }
}
