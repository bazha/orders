import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('orders')
export class AppController {
  @MessagePattern('getOrders')
  getOrders(data: string): string {
    return data;
  }
}
