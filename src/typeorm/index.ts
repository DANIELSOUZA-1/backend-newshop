import { Avaliacao } from "./avaliacao.entity";
import { Carrinho } from "./carrinho.entity";
import { Cliente } from "./cliente.entity";
import { ItemCarrinho } from "./itemCarrinho.entity";
import { Pedido } from "./pedido.entity";
import { Produto } from "./produto.entity";
import { Produtor } from "./produtor.entity";

const entities = [
  Produtor,
  Produto,
  Avaliacao,
  Cliente,
  ItemCarrinho,
  Pedido,
  Carrinho
];

export {Produtor};
export default entities;
