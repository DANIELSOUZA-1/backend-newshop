import { Module } from '@nestjs/common';
import { AvaliacaoController } from './controllers/avaliacao/avaliacao.controller';
import { AvaliacaoService } from './services/avaliacao/avaliacao.service';

@Module({
  controllers: [AvaliacaoController],
  providers: [AvaliacaoService]
})
export class AvaliacaoModule {}
