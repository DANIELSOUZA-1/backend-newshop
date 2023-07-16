import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { CreatePedidoDto } from "./create-pedido.dtos";
import { PartialType } from "@nestjs/mapped-types";


export class UpdatePedidoDto extends PartialType(CreatePedidoDto)  {
}
