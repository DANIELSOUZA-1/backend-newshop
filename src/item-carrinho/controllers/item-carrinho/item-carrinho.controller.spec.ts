import { Test, TestingModule } from '@nestjs/testing';
import { ItemCarrinhoController } from './item-carrinho.controller';

describe('ItemCarrinhoController', () => {
  let controller: ItemCarrinhoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemCarrinhoController],
    }).compile();

    controller = module.get<ItemCarrinhoController>(ItemCarrinhoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
