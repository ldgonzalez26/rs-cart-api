import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { v4 } from 'uuid';

import { Cart, Status } from '../entities/cart.entity';
import { CartItem } from '../entities/cartItem.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private cartItemRepository: Repository<CartItem>
  ) {}

  private userCarts: Record<string, Cart> = {};

  async findByUserId(userId: string): Promise<Cart> {
    console.log('findUserId', userId)
    return this.cartRepository.findOne({
      where: { userId: userId },
      relations: ['items'] 
    });
  }

  async createByUserId(userId: string): Promise<Cart> {
    const newCart = this.cartRepository.create({
      userId: userId,
      items: [],  // no items on initialization 
      status: Status.OPEN  // default status as open
    });

    await this.cartRepository.save(newCart);

    return newCart;
  }

  async findOrCreateByUserId(userId: string): Promise<Cart> {
    const userCart = await this.cartRepository.findOne({
      where: { userId: userId },
      relations: ['items'] 
    });
    console.log('userCart',userCart)
    if (userCart) {
      return userCart;
    }

    return this.createByUserId(userId);
  }

  async updateByUserId(userId: string, items: CartItem[]): Promise<Cart> {
    const cart = await this.findOrCreateByUserId(userId);

    cart.items = items;

    console.log('cartItems',cart.items);
    
    await this.cartRepository.save(cart);

    return cart;
  }

async removeByUserId(userId: string): Promise<void> {
    const cart = await this.cartRepository.findOne({
      where: { userId: userId }
    });
    if (cart) {
      await this.cartItemRepository.delete({ cart: { id: cart.id } });

      console.log(`Deleted items for cart ${cart.id}`);

      await this.cartRepository.remove(cart);

      console.log(`Cart removed`);
    }
  }
}
