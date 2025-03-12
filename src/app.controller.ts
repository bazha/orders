import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';

@Controller('orders')
export class AppController {
  @MessagePattern('get_orders')
  getOrders(data: string): string {
    return data;
  }

  @EventPattern('create_order')
  createOrder(data) {
    console.log('data received, saving in db', data);
  }
}
