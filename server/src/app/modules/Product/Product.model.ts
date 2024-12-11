import  { Schema, model, } from "mongoose";
import { IProduct } from "./Product.interface";




// Schema for the Product model
const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true }, 
    description: { type: String, required: true },
    price: { type: Number, required: true }, 
    discountPrice: { type: Number }, 
    quantity: { type: Number, required: true }, 
    category: { type: String,  required: true }, 
    subcategory: { type: String,}, 
    productCode: { type: String, unique: true, required: true }, 
    status: {
      type: String,
      enum: ["active", "inactive"], 
      required: true,
      default: "active",
    },
    level: {
      type: String,
      enum: ["basic", "premium", "exclusive"], 
      required: true,
    },
    images: [{ type: String, required: true }], 
    isDeleted: { type: Boolean, required: true, default: false }, 
    createdAt: { type: Date, default: Date.now }, 
    updatedAt: { type: Date, default: Date.now }, 
  },
  {
    timestamps: true, 
  }
);

// Export the Product model
export const Product = model<IProduct>("Product", ProductSchema);


