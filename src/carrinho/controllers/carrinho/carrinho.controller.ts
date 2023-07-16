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
import { CarrinhoService } from 'src/carrinho/services/carrinho/carrinho.service';

// to do: DTO

@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly _carrinhoService: CarrinhoService) {}

  @Get()
  getCarrinho() {
    return this._carrinhoService.getCarrinho()
  }


}
