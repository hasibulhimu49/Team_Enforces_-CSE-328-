import { Types } from 'mongoose';

export interface IReview {
  user: Types.ObjectId; // Reference to User model
  product: Types.ObjectId; // Reference to Product model
  rating: number; // Rating value (e.g., 1-5)
  comment: string; // Review comment
  createdAt?: Date; // Timestamp for creation
  updatedAt?: Date; // Timestamp for updates
}
