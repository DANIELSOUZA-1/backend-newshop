import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from './produto.entity';
import { Cliente } from './cliente.entity';
import { Carrinho } from './carrinho.entity';

@Entity()
export class ItemCarrinho {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'item_carrinho_id',
  })
  id: number;

  // Referenciar Produto OneToOne
  @OneToOne(() => Produto)
  produto: Produto;
  
  @Column({
    nullable: false,
    default: 0,
  })
  quantidade: number;
  
  @Column({
    nullable: false,
    default: 0,
  })
  precoUnitario: number;

  @ManyToOne(() => Carrinho, carrinho => carrinho.itens)
  carrinho: Carrinho;

}
