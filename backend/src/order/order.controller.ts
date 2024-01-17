import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }

  @Get('find')
  findAllOrder() {
    return this.orderService.findAllOrder();
  }

  @Get('find/:id')
  findOneOrder(@Param('id') id: string) {
    return this.orderService.findOneOrder(+id);
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    return this.orderService.removeProduct(+id);
  }
}
