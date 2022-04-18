import { IsDate, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProdutoDto {
  @ValidateNested({each: true})
  @Type(() => Produto)
  produtos: Produto[];
}

export class Produto {
  @IsString()
  nome: string; //
  @IsNumber()
  valor: number; //
  @IsString()
  data: string;
  @IsString()
  loja: string;
}
