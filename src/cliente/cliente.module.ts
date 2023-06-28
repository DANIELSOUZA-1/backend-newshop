import { Module } from '@nestjs/common';
import { ClienteController } from './controllers/cliente/cliente.controller';
import { ClienteService } from './services/cliente/cliente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from 'src/typeorm/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  controllers: [ClienteController],
  providers: [ClienteService]
})

export class ClienteModule {}
