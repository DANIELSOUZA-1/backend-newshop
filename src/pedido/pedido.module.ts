import { Module } from '@nestjs/common';
import { PedidoController } from './controller/pedido/pedido.controller';
import { PedidoService } from './services/pedido/pedido.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from 'src/typeorm/pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido])],
  controllers: [PedidoController],
  providers: [PedidoService]
})
export class PedidoModule {}
