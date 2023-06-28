import { Module } from '@nestjs/common';
import { ProdutoController } from './controllers/produto/produto.controller';
import { ProdutoService } from './services/produto/produto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from 'src/typeorm/produto.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  controllers: [ProdutoController],
  providers: [ProdutoService]
})
export class ProdutoModule {}
