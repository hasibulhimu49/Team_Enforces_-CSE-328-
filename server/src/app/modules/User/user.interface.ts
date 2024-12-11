import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";



export interface TUser {
  id: string; // ObjectId
  password: string; // Hashed
  needPasswordChange: boolean;
  passwordChangeAt?: Date,
  isDeleted:boolean,
  status:'in-progress' | 'blocked';
  role: 'admin' | 'customer'; // Enum for roles
  createdAt: Date;
  updatedAt: Date;
}

export interface UserModel extends Model<TUser> {
  isUserExistsByEmail(email: string): Promise<TUser | null>; // Check if a user exists by email
  isUserDeleted(id: string): Promise<boolean>; // Check if the user is marked as deleted
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>; // Compare passwords
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamps: Date,
    jwtIssuedTimestamps: number
  ): Promise<boolean>; // JWT validation based on password change time
}

export type TUserRole = keyof typeof USER_ROLE;
