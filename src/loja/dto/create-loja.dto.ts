import { IsInt, IsNumber, IsString } from "class-validator"

export class CreateLojaDto {
    @IsString()
    nome: string

    @IsInt()
    qtd_nf: number
}
