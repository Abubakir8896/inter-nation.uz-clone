import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Order } from './entities';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';



@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        Order
      ]
    ),
    JwtModule.register(
      {}
    )
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}