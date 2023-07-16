import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from './produto.entity';
import { Cliente } from './cliente.entity';
import { ItemCarrinho } from './itemCarrinho.entity';
import { Carrinho } from './carrinho.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'pedido_id',
  })
  id: number;

  // Referenciar itemCarrinho[]  N
  @ManyToOne(() => Cliente, cliente => cliente.pedidos)
  cliente: Cliente;

  @Column({
    type: 'timestamptz'
  })
  dataHora: Date;

  @OneToOne(() => Carrinho)
  carrinho: Carrinho;

  @Column({
    nullable: false,
    default: '',
  })
  status: string;

  @Column({
    nullable: false,
    default: 0,
  })
  total: number;

  @Column({
    nullable: false,
    default: '',
  })
  enderecoEntrega: string;
  
}