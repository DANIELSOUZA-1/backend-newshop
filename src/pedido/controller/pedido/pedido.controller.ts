import { 
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePedidoDto } from 'src/pedido/dto/create-pedido.dtos';
import { UpdatePedidoDto } from 'src/pedido/dto/update-pedido.dto';
import { PedidoService } from 'src/pedido/services/pedido/pedido.service';

@Controller('pedido')
export class PedidoController {
  constructor(private readonly _pedidoService: PedidoService) {}

  @Get()
  getPedidos() { 
    return this._pedidoService.getPedidos()
  }

  @Get('/:id')
  getPedido(@Param('id') id: number) {
    return this._pedidoService.getPedido(id)
  }
  
  @Patch('/:id')
  updatePedido(@Param('id') id: number, @Body() body: UpdatePedidoDto) {
    return this._pedidoService.updatePedido(id, body)
  }

  @Post()
  @UsePipes(ValidationPipe)
  createPedido(@Body() body: CreatePedidoDto) {
    return this._pedidoService.createPedido(body)
  }

}
