import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UpdateClienteDto {
  nome: string;
  telefone: string;
  password: string; // não sei se é seguro permitir mudança de senha (duvida)
  endereco: string;
}
