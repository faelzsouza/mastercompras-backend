import { PartialType } from '@nestjs/mapped-types';
import { Produto } from './create-produto.dto';

export class UpdateProdutoDto extends PartialType(Produto) {}
