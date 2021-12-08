import { IsDate, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProdutoDto {
  @ValidateNested({each: true})
  @Type(() => Produto)
  produtos: Produto[];
}

class Produto {
  @IsString()
  nome: string;
  @IsString()
  secao: string;
  @IsNumber()
  preco: number;
  @IsNumber()
  valor_min: number;
  @IsNumber()
  valor_med: number;
  @IsNumber()
  valor_max: number;
  @IsString()
  data_compra: string;
  @IsNumber()
  loja_id: number;
  @IsNumber()
  qtd_soma: number;
  @IsNumber()
  valor_soma: number;
}
