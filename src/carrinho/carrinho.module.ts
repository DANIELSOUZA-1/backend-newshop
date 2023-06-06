import { Module } from '@nestjs/common';
import { CarrinhoController } from './controllers/carrinho/carrinho.controller';
import { CarrinhoService } from './services/carrinho/carrinho.service';

@Module({
  controllers: [CarrinhoController],
  providers: [CarrinhoService]
})
export class CarrinhoModule {}
