import { Module } from '@nestjs/common';
import { ItemCarrinhoController } from './controllers/item-carrinho/item-carrinho.controller';
import { ItemCarrinhoService } from './services/item-carrinho/item-carrinho.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemCarrinho } from 'src/typeorm/itemCarrinho.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemCarrinho])],
  controllers: [ItemCarrinhoController],
  providers: [ItemCarrinhoService]
})
export class ItemCarrinhoModule {}
