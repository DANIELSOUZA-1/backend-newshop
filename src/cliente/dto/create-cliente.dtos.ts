import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateClienteDto {
  @IsNotEmpty()
  @MinLength(6)
  nome: string

  @IsNotEmpty()
  @MinLength(8)
  password: string

  @IsNotEmpty()
  @IsEmail()
  email: string;

}
