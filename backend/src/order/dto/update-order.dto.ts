import { IsNotEmpty, IsString } from "class-validator";

export class UpdateOrderDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    phone:string
}