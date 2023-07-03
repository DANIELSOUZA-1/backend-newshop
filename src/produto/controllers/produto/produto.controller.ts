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

import { CreateProdutoDto } from 'src/produto/dto/create-produto.dtos';
import { UpdateProdutoDto } from 'src/produto/dto/update-produto.dto';
import { ProdutoService } from 'src/produto/services/produto/produto.service';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly _produtoService: ProdutoService) {}

  @Get()
  getProdutos() { 
    return this._produtoService.getProdutos()
  }

  @Get('/:id')
  getProduto(@Param('id') id: number) {
    return this._produtoService.getProduto(id)
  }
  
  @Patch('/:id')
  updateProduto(@Param('id') id: number, @Body() body: UpdateProdutoDto) {
    return this._produtoService.updateProduto(id, body)
  }

  @Post()
  @UsePipes(ValidationPipe)
  createProduto(@Body() body: CreateProdutoDto) {
    return this._produtoService.createProduto(body)
  }

  @Delete('/:id')
  removeProduto(@Param('id') id: number) {
    return this._produtoService.deleteProduto(id)
  }

}
