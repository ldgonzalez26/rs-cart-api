import { Module } from '@nestjs/common';

import { OrderModule } from '../order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CartController } from './cart.controller';
import { CartService } from './services';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cartItem.entity';


@Module({
  imports: [ OrderModule, TypeOrmModule.forFeature([Cart, CartItem])],
  providers: [ CartService ],
  controllers: [ CartController ]
})
export class CartModule {}
