import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  create(createProdutoDto: CreateProdutoDto) {
    const data: Prisma.ProdutoCreateManyInput[] = [
      ...createProdutoDto.produtos.map(produto => ({
        ...produto,
        data_compra: new Date(produto.data_compra)
      }))
    ]
    //console.log(data)
    return this.prisma.produto.createMany({ data });
  }

  findAll() {
    return `This action returns all produto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
