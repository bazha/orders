import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL],
          queue: 'orders_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
      {
        name: 'PRODUCT_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          url: 'products:3002',
          package: 'products',
          protoPath: join(process.cwd(), './src/products/proto/products.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
