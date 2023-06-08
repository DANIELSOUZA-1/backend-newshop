import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClienteDto } from 'src/cliente/dto/create-cliente.dtos';
import { Cliente } from 'src/typeorm/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(@InjectRepository(Cliente) private readonly _clienteRepository: Repository<Cliente>) {}

  getClientes() {
    return this._clienteRepository.find()
  }

  getCliente(id) {
    return this._clienteRepository.findOne({
      where: {id: id}
    })
  }

  createCliente(createClienteDto: CreateClienteDto) {
    const newCliente = this._clienteRepository.create(createClienteDto)
    return this._clienteRepository.save(newCliente)
  }

  updateCliente(id, body) {
    return this._clienteRepository.update(id, body)
  }

  deleteCliente(id) {
    return this._clienteRepository.delete(id)
  }

}
