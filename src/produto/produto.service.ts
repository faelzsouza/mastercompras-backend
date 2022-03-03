import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { LojaService } from 'src/loja/loja.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(
    private prisma: PrismaService,
    private readonly lojaService: LojaService,
  ) {}

  async create(createProdutoDto: CreateProdutoDto) {
    // Adiciona a loja no db ou adiciona mais um na quantidade de nf
    let loja_db = await this.prisma.loja.findUnique({
      where: { nome: createProdutoDto.produtos[0].loja },
    });
    if (!loja_db) {
      loja_db = await this.lojaService.create({
        nome: createProdutoDto.produtos[0].loja,
        qtd_nf: 1,
      });
    } else {
      await this.lojaService.update(loja_db.id, {
        qtd_nf: loja_db.qtd_nf + 1,
      });
    }

    const data = await Promise.all(createProdutoDto.produtos.map(async (p) => {
      const produto_db = await this.prisma.produto.findUnique({
        where: { nome: p.nome },
      });
      if (!produto_db) {
        const novoProduto: Prisma.ProdutoCreateManyInput = {
          nome: p.nome,
          data_compra: new Date(p.data),
          loja_id: loja_db.id,
          qtd_soma: 1,
          preco: p.valor,
          valor_max: p.valor,
          valor_med: p.valor,
          valor_min: p.valor,
          valor_soma: p.valor,
        };
        return novoProduto;
      } else {
        const produto: Prisma.ProdutoUncheckedUpdateInput = {
          ...produto_db,
          data_compra: new Date(p.data),
          loja_id: loja_db.id,
          qtd_soma: produto_db.qtd_soma + 1,
          preco: p.valor,
          valor_max:
            p.valor > produto_db.valor_max ? p.valor : produto_db.valor_max,
          valor_min:
            p.valor < produto_db.valor_min ? p.valor : produto_db.valor_min,
          valor_soma: produto_db.valor_soma + p.valor,
          valor_med: (produto_db.valor_soma + p.valor) / (produto_db.qtd_soma + 1),
        };
        this.update(produto_db.id, produto);
      }
    }, this));
    return await this.prisma.produto.createMany({data})
  }

  findAll() {
    return `This action returns all produto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  async update(
    id: number,
    updateProdutoDto: Prisma.ProdutoUncheckedUpdateInput,
  ) {
    return await this.prisma.produto.update({where:{id}, data: updateProdutoDto});
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
