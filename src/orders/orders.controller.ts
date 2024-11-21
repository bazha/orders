import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  private logger = new Logger('TasksController');

  @GrpcMethod('ProductService', 'FindOne')
  findOne(data): any {
    const items = [
      { id: 1, name: 'Oil' },
      { id: 2, name: 'Sugar' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
