import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn('increment')
  order_id: number;

  @Column({type: 'text'})
  name: string;

  @Column({type:'text'})
  phone:string
}