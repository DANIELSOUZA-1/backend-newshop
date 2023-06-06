import { Module } from '@nestjs/common';
import { ItemCarrinhoController } from './controllers/item-carrinho/item-carrinho.controller';

@Module({
  controllers: [ItemCarrinhoController]
})
export class ItemCarrinhoModule {}
