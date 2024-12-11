import { Types } from "mongoose";

export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
  }


export interface TCustomer {
  id:string;
    name: string;
    user: Types.ObjectId,
    phone: number;
    address: Address;
    email: string; // Unique
    image?: string; // URL for profile picture
    isDeleted: boolean;
  

}