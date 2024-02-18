import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Создаем экземпляр ValidationPipe с параметрами
  const validationOptions = {
    whitelist: true, // Исключает лишние поля из DTO
    forbidNonWhitelisted: true, // Бросает ошибку, если переданы лишние поля
    transform: true, // Преобразует входящие данные к типам из DTO
  };
  const validationPipe = new ValidationPipe(validationOptions);

  // Применяем глобальный ValidationPipe
  app.useGlobalPipes(validationPipe);

  app.enableCors({
    origin: 'http://localhost:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-request-id'],
  });

  await app.listen(3000);

  console.log(`Works on port ${3000}`);
}

bootstrap();
