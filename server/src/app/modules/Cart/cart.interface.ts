import { Types } from "mongoose";

export interface ICartProduct {
  productId: Types.ObjectId; // Reference to the Product model
  quantity: number;          // Quantity of this product in the cart
}

export interface IMyCart {
  _id: Types.ObjectId;
  user: Types.ObjectId;          // Reference to the User model
  products: ICartProduct[];      // Array of products in the cart
  totalPrice: number;            // Total price of the cart
  createdAt?: Date;              // Creation timestamp
  updatedAt?: Date;              // Update timestamp
}
