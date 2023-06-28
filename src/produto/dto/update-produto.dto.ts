import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { CreateProdutoDto } from "./create-produto.dtos";
import { PartialType } from "@nestjs/mapped-types";


export class UpdateProdutoDto extends PartialType(CreateProdutoDto)  {
}
