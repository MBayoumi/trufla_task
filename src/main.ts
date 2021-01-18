import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Article Manager APIs')
    .setDescription('Article Manager APIs')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs/v1', app, document);
  await app.listen(process.env.PORT);
}

bootstrap();
