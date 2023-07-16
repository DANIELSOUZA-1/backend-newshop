import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
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

  @Column({
    nullable: false,
    default: '',
  })
  nome: string;

  @Column({
    nullable: false,
    default: '',
  })
  produtoId: string;
  
  @Column('integer',{
    default: 0,
    nullable: false,
  })
  quantidade: number;
  
  @Column('decimal',{
    default: 0,
    nullable: false,
    precision: 11, 
    scale: 2,
  })
  preco: number;

  @ManyToOne(() => Carrinho, carrinho => carrinho.itens)
  carrinho: Carrinho;

  

}
