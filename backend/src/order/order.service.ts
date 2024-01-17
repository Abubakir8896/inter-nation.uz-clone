import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpStatus, Injectable } from '@nestjs/common';

import { Order }  from './entities';
import { CreateOrderDto, UpdateOrderDto } from './dto';


@Injectable()
export class OrderService {
  constructor( 
    @InjectRepository(Order)private orderRepository: Repository<Order>,
    ){}

  async createOrder(createOrderDto: CreateOrderDto): Promise<Object> {    
    const newOrder = await this.orderRepository.save(createOrderDto);

    return {
            message: 'Create successfully',
            product: newOrder,
            status: HttpStatus.OK
           };
  }

  async findAllOrder(): Promise<Object> {
    const order = await this.orderRepository.find();

    if(order.length === 0) return {
                                      message: 'Orders Not Found',
                                      status: HttpStatus.NOT_FOUND
                                    };
    return {
            order,
            status: HttpStatus.OK
           };
  }

  async findOneOrder(id: number): Promise<Object> {
    const [ order ] = await this.orderRepository.find({where:{order_id:id}});
    if (!order) return {
                          message: 'Order Not Found',
                          status: HttpStatus.NOT_FOUND
                        };
    return {
            order,
            status: HttpStatus.OK
           };
  }

  async removeProduct(id: number): Promise<HttpStatus | Object> {
    const [ order ] = await this.orderRepository.findBy({ order_id: id });
    if (!order) return {
                          message: 'Order Not Found',
                          status: HttpStatus.NOT_FOUND
                        };

    await this.orderRepository.delete({ order_id: id });

    return HttpStatus.OK;
  }
}