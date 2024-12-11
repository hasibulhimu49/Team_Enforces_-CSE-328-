import { Types } from "mongoose";

export interface IProduct {
  _id: Types.ObjectId; 
  name: string; 
  description: string; 
  price: number; 
  discountPrice?: number; 
  quantity: number; 
  category: string; 
  subcategory?: string;
  productCode: string; 
  status: "active" | "inactive"; 
  level: "basic" | "premium" | "exclusive"; 
  images: string[]; 
  isDeleted: boolean 
  createdAt: Date; 
  updatedAt: Date; 
}

