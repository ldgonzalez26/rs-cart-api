import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import fs from 'fs';
import path from 'path';

import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

//not worked as expected
import {Cart} from './cart/entities/cart.entity'
import {CartItem} from './cart/entities/cartItem.entity'


const certificatePath = path.resolve(__dirname, "./certificate/us-east-1-bundle.pem");
const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [path.join(__dirname, '**', '*.entity.{ts,js}')],
  ssl: {
    ca: fs.readFileSync(certificatePath).toString(),
    rejectUnauthorized: true
  },
};
console.log('config',ormConfig)
@Module({
  imports: [
    AuthModule,
    CartModule,
    OrderModule,
    TypeOrmModule.forRoot(ormConfig)
  ],
  controllers: [
    AppController,
  ],
  providers: [],
})
export class AppModule {}
