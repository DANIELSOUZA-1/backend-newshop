import { Type } from "class-transformer";
import { IsDateString, IsEmail, IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { Carrinho } from "src/typeorm/carrinho.entity";
import { Decimal128 } from "typeorm";

export class CreatePedidoDto {

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  status: string
  
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(60)
  enderecoEntrega: string
  
  @IsNotEmpty()
  @IsDateString()
  dataHora: string

  @IsNotEmpty()
  carrinho: Carrinho

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(999999999)
  total: number

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(999999999)
  codigoRastreio: number

}
