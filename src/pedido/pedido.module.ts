import { Module } from '@nestjs/common';
import { PedidoController } from './controller/pedido/pedido.controller';
import { PedidoService } from './services/pedido/pedido.service';

@Module({
  controllers: [PedidoController],
  providers: [PedidoService]
})
export class PedidoModule {}
