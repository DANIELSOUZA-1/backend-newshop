import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePedidoDto } from 'src/pedido/dto/create-pedido.dtos';
import { Pedido } from 'src/typeorm/pedido.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PedidoService {
  constructor(@InjectRepository(Pedido) private readonly _pedidoRepository: Repository<Pedido>) {}

  getPedidos() {
    return this._pedidoRepository.find()
  }

  getPedido(id) {
    return this._pedidoRepository.findOne({
      where: {id: id}
    })
  }

  createPedido(createPedidoDto: CreatePedidoDto) {
    const newProduto = this._pedidoRepository.create(createPedidoDto)
    return this._pedidoRepository.save(newProduto)
  }

  updatePedido(id, body) {
    return this._pedidoRepository.update(id, body)
  }

}
