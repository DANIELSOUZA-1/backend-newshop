import { 
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreateClienteDto } from 'src/cliente/dto/cliente.dtos';
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
  createCliente(@Body() createClienteDto: CreateClienteDto) {
    return this._clienteService.createCliente(createClienteDto)
  }

}
