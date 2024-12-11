import { Schema, model } from "mongoose";
import { TAdmin } from "./Admin.interface";

// Address Schema
const addressSchema = new Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
});

// Admin Schema
const AdminSchema = new Schema<TAdmin>(
  {
    id: {
        type: String,
        required: [true, 'ID is required'],
        unique: true,
      },
      user: {
        type: Schema.Types.ObjectId,
        required: [true, 'User id is required'],
        unique: true,
        ref: 'User',
      },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: addressSchema, // Embed Address schema
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email is unique
    },
    image: {
      type: String,
      required: false, // Optional profile image URL
    },
    isDeleted:{
      type:Boolean,
      default:false 
  }
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt`
  }
);

// Export the Customer model
export const Admin = model<TAdmin>("Admin", AdminSchema);
