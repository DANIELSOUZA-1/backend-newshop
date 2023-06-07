import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from './produto.entity';

@Entity()
export class Avaliacao {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'avaliacao_id',
  })
  id: number;

  @ManyToOne(() => Produto, produto => produto.avaliacoes)
  produto: Produto;

  @Column({
    nullable: false,
    default: 0,
  })
  classificacao: number;

  @Column({
    nullable: false,
    default: '',
  })
  comentario: string;
  
}