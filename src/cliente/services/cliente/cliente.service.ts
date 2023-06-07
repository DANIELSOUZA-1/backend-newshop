import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClienteDto } from 'src/cliente/dto/cliente.dtos';
import { Cliente } from 'src/typeorm/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(@InjectRepository(Cliente) private readonly _clienteRepository: Repository<Cliente>) {}

  getClientes() {
    return this._clienteRepository.find()
  }

  createCliente(createClienteDto: CreateClienteDto) {
    const newCliente = this._clienteRepository.create(createClienteDto)
    return this._clienteRepository.save(newCliente)
  }

  findClienteById(id) {
    return this._clienteRepository.findOne(id)
  }

}
