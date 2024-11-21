// import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
// import { ClientGrpc } from '@nestjs/microservices';

// @Injectable()
// export class OrdersService implements OnModuleInit {

// constructor(@Inject('ORDERS_PACKAGE') private readonly client: ClientGrpc) {}

// onModuleInit() {
//   this.ordersServiceGrpc =
//     this.client.getService<OrdersServiceGrpc>('OrdersService');
// }

// createOrder(data: CreateOrderRequest): Observable<CreateOrderResponse> {
//   return this.ordersServiceGrpc.createOrder(data);
// }
// getProduct(): Observable<string> {
//   return this.ordersServiceGrpc.findOne({ id: 1 });
// }
// }
