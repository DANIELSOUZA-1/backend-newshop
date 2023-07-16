import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrinho } from 'src/typeorm/carrinho.entity';
import { ItemCarrinho } from 'src/typeorm/itemCarrinho.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarrinhoService {
  constructor(
    @InjectRepository(Carrinho) private readonly _carrinhoRepository: Repository<Carrinho>, 
    @InjectRepository(Carrinho) private readonly _itemCarrinhoRepository: Repository<ItemCarrinho>

    ) {
    this.initializeCarrinho()

  }

  getCarrinho() {
    return this._carrinhoRepository.findOne({ where: {id: 1}, relations: { itens: true } })
  }

  async initializeCarrinho() {
    let carrinho = await this._carrinhoRepository.create({
      id: 1
    })
    let alreadyExists = await this._carrinhoRepository.findOne({
      where: {id: 1}
    })
    if (alreadyExists) {
      return

    } else {
      this._carrinhoRepository.save(carrinho)
    }
  }
}

