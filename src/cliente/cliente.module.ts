import { Module } from '@nestjs/common';
import { ClienteController } from './controllers/cliente/cliente.controller';
import { ClienteService } from './services/cliente/cliente.service';

@Module({
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
