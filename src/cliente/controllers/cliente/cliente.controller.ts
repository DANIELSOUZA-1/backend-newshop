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

  @Get('/:id')
  getCliente(@Param('id') id: number) {
    return this._clienteService.getCliente(id)
  }
  
  @Put('/:id')
  updateCliente(@Param('id') id: number, @Body() body: UpdateClienteDto) {
    return this._clienteService.updateCliente(id, body)
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCliente(@Body() body: CreateClienteDto) {
    return this._clienteService.createCliente(body)
  }

  @Delete('/:id')
  removeCliente(@Param('id') id: number) {
    return this._clienteService.deleteCliente(id)
  }

}
