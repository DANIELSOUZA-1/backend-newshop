import { 
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateItemCarrinhoDto } from 'src/item-carrinho/dto/create-item-carrinho.dtos';
import { UpdateItemCarrinhoDto } from 'src/item-carrinho/dto/update-item-carrinho.dto';

import { ItemCarrinhoService } from 'src/item-carrinho/services/item-carrinho/item-carrinho.service';


@Controller('item-carrinho')
export class ItemCarrinhoController {
  constructor(private readonly _carrinhoService: ItemCarrinhoService) {}
 
  @Get()
  getCarrinho() {
    return this._carrinhoService.getItensCarrinho()
  }

  @Post()
  @UsePipes(ValidationPipe)
  createItemCarrinho(@Body() body: CreateItemCarrinhoDto) {
    return this._carrinhoService.createItemCarrinho(body)
  }

  @Patch('/:id')
  updateItemCarrinho(@Param('id') id: number, @Body() body: UpdateItemCarrinhoDto) {
    return this._carrinhoService.updateItemCarrinho(id, body)
  }

  @Delete('/:id')
  removeItemCarrinho(@Param('id') id: number) {
    return this._carrinhoService.deleteItemCarrinho(id)
  }

  
}
