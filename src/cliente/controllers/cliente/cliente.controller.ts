import { 
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreateClienteDto } from 'src/cliente/dto/create-cliente.dtos';
import { UpdateClienteDto } from 'src/cliente/dto/update-cliente.dto';
import { ClienteService } from 'src/cliente/services/cliente/cliente.service';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly _clienteService: ClienteService) {}

  @Get()
  getClientes() { 
    return this._clienteService.getClientes()
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCliente(@Body() body: CreateClienteDto) {
    return this._clienteService.createCliente(body)
  }

  @Patch('/:id')
  updateCliente(@Param('id') id: number, @Body() body: UpdateClienteDto) {
    return this._clienteService.updateClient(id, body)
  }

}
