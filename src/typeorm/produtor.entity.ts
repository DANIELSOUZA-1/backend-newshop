import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from './produto.entity';

@Entity()
export class Produtor {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'produtor_id',
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
  localizacao: string;

  @Column({
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  telefone: string;

  @Column({
    nullable: false,
    default: '',
  })
  historicoVendas: string;

  @Column({
    nullable: false,
    default: 0,
  })
  avaliacao: number;

  @OneToMany(() => Produto, produto => produto.produtor)
  produtos: Produto[];
  
}