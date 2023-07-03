import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produtor } from './produtor.entity';
import { Avaliacao } from './avaliacao.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'produto_id',
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
  descricao: string;

  @Column({
    nullable: false,
    default: '',
  })
  categoria: string;

  @Column('decimal',{
    default: 0,
    nullable: false,
    precision: 11, 
    scale: 2,
  })
  preco: number;

  @Column('decimal',{
    default: 0,
    nullable: false,
    precision: 9, 
    scale: 2,
  })
  estoque: number;

  @Column({
    nullable: false,
    default: '',
  })
  imagens: string;

  @OneToMany(() => Avaliacao, avaliacao => avaliacao.produto)
  avaliacoes: Avaliacao[];

  @ManyToOne(() => Produtor, produtor => produtor.produtos)
  produtor: Produtor;
}
