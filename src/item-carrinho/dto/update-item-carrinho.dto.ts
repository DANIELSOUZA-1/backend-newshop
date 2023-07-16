import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateItemCarrinhoDto } from "./create-item-carrinho.dtos";


export class UpdateItemCarrinhoDto extends PartialType(CreateItemCarrinhoDto)  {
}
