import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Cart } from './cart.entity';

@Entity({name: 'cart_items'})
export class CartItem {
    @PrimaryGeneratedColumn('uuid', { name: 'cart_id' } )
    id: string;

    @Column('uuid', { name: 'product_id' })
    productId: string;

    @Column('int')
    count: number;

    @ManyToOne(() => Cart, cart => cart.items)
    @JoinColumn({ name: 'cart_id' })
    cart: Cart;
}