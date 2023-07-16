import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { Carrinho } from "src/typeorm/carrinho.entity";
import { Produto } from "src/typeorm/produto.entity";
import { Decimal128 } from "typeorm";

export class CreateItemCarrinhoDto {
  @IsNotEmpty()
  carrinho: Carrinho
  
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(35)
  nome: string

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(999999999)
  quantidade: number

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(999999999)
  preco: number

  @IsNotEmpty()
  @MaxLength(35)
  produtoId: string

}
