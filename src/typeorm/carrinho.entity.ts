import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from './produto.entity';
import { Cliente } from './cliente.entity';
import { ItemCarrinho } from './itemCarrinho.entity';

@Entity()
export class Carrinho {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'carrinho_id',
  })
  id: number;

  // Referenciar itemCarrinho[]
  @OneToMany(() => ItemCarrinho, itemCarrinho => itemCarrinho.carrinho)
  itens: ItemCarrinho[];
  
}