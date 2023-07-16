import { Module } from '@nestjs/common';
import { CarrinhoController } from './controllers/carrinho/carrinho.controller';
import { CarrinhoService } from './services/carrinho/carrinho.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrinho } from 'src/typeorm/carrinho.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Carrinho])],
  controllers: [CarrinhoController],
  providers: [CarrinhoService]
})
export class CarrinhoModule {}
