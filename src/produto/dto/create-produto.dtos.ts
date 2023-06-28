import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateProdutoDto {
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(35)
  nome: string

  @IsNotEmpty()
  @MaxLength(30)
  estoque: number

  @IsNotEmpty()
  @MaxLength(6)
  preco: number

  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(15)
  categoria: string;

  @MinLength(8)
  @MaxLength(150)
  descricao: string;

  @MinLength(8)
  @MaxLength(150)
  imagens: string;

}
