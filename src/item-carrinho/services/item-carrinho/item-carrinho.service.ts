import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateItemCarrinhoDto } from 'src/item-carrinho/dto/create-item-carrinho.dtos';
import { ItemCarrinho } from 'src/typeorm/itemCarrinho.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemCarrinhoService {
  constructor(@InjectRepository(ItemCarrinho) private readonly _itemCarrinhoRepository: Repository<ItemCarrinho>) {}

  getItensCarrinho() {
    return this._itemCarrinhoRepository.find({
      relations: {
        carrinho: true
      }
    })
  }

  createItemCarrinho(createItemCarrinhoDto: CreateItemCarrinhoDto) {
    const newItem = this._itemCarrinhoRepository.create(createItemCarrinhoDto)
    return this._itemCarrinhoRepository.save(newItem)
  }

  updateItemCarrinho(id, body) {
    return this._itemCarrinhoRepository.update(id, body)
  }

  async deleteItemCarrinho(id) {
    let itemDeleted = await this._itemCarrinhoRepository.delete(id)

    if (itemDeleted.affected != 0) {
      return 1
    } else {
      return 0
    }
    
  }

  
}
