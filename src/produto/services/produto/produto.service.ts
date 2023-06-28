import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClienteDto } from 'src/cliente/dto/create-cliente.dtos';
import { CreateProdutoDto } from 'src/produto/dto/create-produto.dtos';
import { Produto } from 'src/typeorm/produto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoService {
  constructor(@InjectRepository(Produto) private readonly _produtoRepository: Repository<Produto>) {}

  getProdutos() {
    return this._produtoRepository.find()
  }

  getProduto(id) {
    return this._produtoRepository.findOne({
      where: {id: id}
    })
  }

  createProduto(createProdutoDto: CreateProdutoDto) {
    const newProduto = this._produtoRepository.create(createProdutoDto)
    return this._produtoRepository.save(newProduto)
  }

  updateProduto(id, body) {
    return this._produtoRepository.update(id, body)
  }

  deleteProduto(id) {
    return this._produtoRepository.delete(id)
  }
}
