import { Module } from '@nestjs/common';
import { ItemCarrinhoController } from './controllers/item-carrinho/item-carrinho.controller';
import { ItemCarrinhoService } from './services/item-carrinho/item-carrinho.service';

@Module({
  controllers: [ItemCarrinhoController],
  providers: [ItemCarrinhoService]
})
export class ItemCarrinhoModule {}
