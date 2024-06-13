import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // Load environment variables
  const supabaseKey = process.env.SUPABASE_SECRET_KEY

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();