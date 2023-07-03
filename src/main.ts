import "reflect-metadata";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // nao permitir inserir colunas nao existentes
      whitelist: true,
      forbidNonWhitelisted: true,
      skipMissingProperties: true,

      // Permitir parametro diferente como string para number e vice versa
      transform: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    }),
  );
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
