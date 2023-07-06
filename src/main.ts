import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AzureADGuard } from './azureADGuard.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // This protects ALL routes
  app.useGlobalGuards(new AzureADGuard());
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
