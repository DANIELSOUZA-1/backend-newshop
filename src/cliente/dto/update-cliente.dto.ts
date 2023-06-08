import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UpdateClienteDto {
  @IsString()
  nome: string;

  @IsString()
  telefone: string;

  @IsString()
  password: string; // não sei se é seguro permitir mudança de senha (duvida)

  @IsString()
  endereco: string;
}
