import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { Decimal128 } from "typeorm";

export class CreateProdutoDto {
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(35)
  nome: string

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(999999999)
  estoque: number

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(999999999)
  preco: number

  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(100)
  categoria: string;

  @MaxLength(150)
  descricao: string;

  @MinLength(8)
  @MaxLength(150)
  imagens: string;

}
