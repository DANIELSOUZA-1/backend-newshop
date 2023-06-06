import { Module } from '@nestjs/common';
import { ProdutorController } from './controllers/produtor/produtor.controller';
import { ProdutorService } from './services/produtor/produtor.service';

@Module({
  controllers: [ProdutorController],
  providers: [ProdutorService]
})
export class ProdutorModule {}
