import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('orders')
export class AppController {
  @MessagePattern('helloWorldMethod')
  sayHello(data: string): string {
    return data;
  }
}
