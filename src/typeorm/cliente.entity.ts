import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from './produto.entity';
import { Carrinho } from './carrinho.entity';
import { Avaliacao } from './avaliacao.entity';
import { Pedido } from './pedido.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'cliente_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  nome: string;

  @Column({
    nullable: false,
    default: '',
  })
  telefone: string;

  @Column({
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  endereco: string;

  // Referenciar Pedidos[]
  @OneToMany(() => Pedido, pedido => pedido.cliente)
  pedidos: Pedido[];

  @OneToOne(() => Carrinho)
  @JoinColumn()
  carrinho: Carrinho;

  // Referenciar cliente
  @ManyToMany(() => Avaliacao)
  @JoinTable()
  avaliacoes: Avaliacao[];
  
}