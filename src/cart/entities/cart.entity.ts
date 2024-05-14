import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { CartItem } from './cartItem.entity';

export enum Status {
    OPEN = "OPEN",
    ORDERED = "ORDERED"
}

@Entity({name: 'carts'})
export class Cart {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @Column({ type: 'uuid', name: 'user_id' })
    userId: string;

    @Column({
        type: "enum",
        enum: Status,
        default: Status.OPEN
    })
    status: Status;

    @OneToMany(() => CartItem, (cartItem => cartItem.cart), {
        cascade: true, 
        onDelete:'CASCADE'
    })
    items: CartItem[];
}