import { Cart } from "../entities/cart.entity";
import { CartItem } from "../entities/cartItem.entity";
/**
 * @param {Cart} cart
 * @returns {number}
 */

//cart item do not have product or price
export function calculateCartTotal(cart: Cart): number {
  return cart && cart.items ? cart.items.reduce((acc: number, { count }: CartItem) => {
    //default price as 5
    return acc += 5 * count;
  }, 0) : 0;
} 