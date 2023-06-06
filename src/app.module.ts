import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutorModule } from './produtor/produtor.module';
import { ProdutoModule } from './produto/produto.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { ClienteModule } from './cliente/cliente.module';
import { PedidoModule } from './pedido/pedido.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { ItemCarrinhoModule } from './item-carrinho/item-carrinho.module';
import { ItemCarrinhoService } from './item-carinho/services/item-carrinho/item-carrinho.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [],
        synchronize: true
      }),
      inject: [ConfigService]
    }),
    ProdutorModule,
    ProdutoModule,
    AvaliacaoModule,
    ClienteModule,
    PedidoModule,
    CarrinhoModule,
    ItemCarrinhoModule,
    
  ],
  controllers: [AppController],
  providers: [AppService, ItemCarrinhoService],
})
export class AppModule {}
