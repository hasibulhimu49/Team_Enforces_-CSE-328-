import { Types } from "mongoose";

import { Product } from "../Product/Product.model"; // Assuming you have a Product model
import { MyCart } from "./cart.model";
import { IMyCart } from "./cart.interface";

export const CartService = {
  async addToCart(userId: string, productId: string, quantity: number): Promise<IMyCart> {
    const cart = await MyCart.findOne({ user: userId });

    if (cart) {
      // Update existing cart
      const productIndex = cart.products.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (productIndex > -1) {
        // Product exists in cart, update quantity
        cart.products[productIndex].quantity += quantity;
      } else {
        // Product does not exist, add to cart
        cart.products.push({ productId: new Types.ObjectId(productId), quantity });
      }
    } else {
      // Create new cart
      const newCart = new MyCart({
        user: new Types.ObjectId(userId),
        products: [{ productId: new Types.ObjectId(productId), quantity }],
        totalPrice: 0, // Total price will be calculated later
      });
      return await newCart.save();
    }

    // Calculate total price
    cart.totalPrice = await CartService.calculateTotalPrice(cart.products);

    return await cart.save();
  },

  async calculateTotalPrice(products: { productId: Types.ObjectId; quantity: number }[]): Promise<number> {
    let total = 0;

    for (const item of products) {
      const product = await Product.findById(item.productId);
      if (product) {
        total += product.price * item.quantity;
      }
    }

    return total;
  },

  async getCartByUser(userId: string): Promise<IMyCart | null> {
    const cart = await MyCart.findOne({ user: new Types.ObjectId(userId) })
      .populate("products.productId") // Populate product details if needed
      .exec();
    return cart;
  },

  async clearCart(userId: string): Promise<void> {
    await MyCart.findOneAndUpdate(
      { user: new Types.ObjectId(userId) },
      { products: [], totalPrice: 0 },
      { new: true }
    );
  },
};
