import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import {PORT} from './config'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(process.env.PORT || PORT);
//  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
