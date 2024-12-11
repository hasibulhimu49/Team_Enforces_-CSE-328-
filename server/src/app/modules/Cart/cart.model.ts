import { Schema, model } from "mongoose";
import { IMyCart } from "./cart.interface";

const CartProductSchema = new Schema({
  productId: { 
    type: Schema.Types.ObjectId,
     ref: "Product", 
     required: true },
  quantity: {
     type: Number,
      required: true, 
      min: 1 },
});

const MyCartSchema = new Schema<IMyCart>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },

    products: { type: [CartProductSchema], required: true },
    
    totalPrice: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

export const MyCart = model<IMyCart>("MyCart", MyCartSchema);
