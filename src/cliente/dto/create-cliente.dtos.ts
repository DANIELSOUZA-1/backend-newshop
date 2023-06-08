import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateClienteDto {
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(35)
  nome: string

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(30)
  password: string

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(30)
  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(15)
  telefone: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(50)
  endereco: string;

}
