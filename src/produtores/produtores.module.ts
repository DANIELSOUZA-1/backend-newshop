import { Module } from '@nestjs/common';
import { ProdutoresController } from './controllers/produtores/produtores.controller';
import { ProdutoresService } from './services/produtores/produtores.service';

@Module({
  controllers: [ProdutoresController],
  providers: [ProdutoresService]
})
export class ProdutoresModule {}
