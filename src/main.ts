import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://myuser:mypassword@rabbitmq:5672'],
        queue: 'orders_queue',
        queueOptions: {
          durable: true,
        },
      },
    },
  );

  await app.listen();
  logger.log('App has started');
}
bootstrap();
