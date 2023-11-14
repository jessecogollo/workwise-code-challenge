import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { applyFormats } from 'nestjs-typebox';

applyFormats();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
