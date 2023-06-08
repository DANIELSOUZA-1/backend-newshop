import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { CreateClienteDto } from "./create-cliente.dtos";
import { PartialType } from "@nestjs/mapped-types";


export class UpdateClienteDto extends PartialType(CreateClienteDto)  {
}
