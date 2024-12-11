import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import config from "../../config";

// User Schema
const userSchema = new Schema<TUser, UserModel>(
  {
    id: {
      type: String, 
      required: true,
      unique: true,
    },
   
    password: {
      type: String,
      required: true,
      select: false, // Exclude password by default in queries
    },
    needPasswordChange: {
      type: Boolean,
      default: true
    },
    passwordChangeAt: {
      type: Date,
    },
    role: {
      type: String,
      enum: ["admin", "customer"], // Role types
      required: true,
      default: "customer",
    },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
      default: "in-progress"

    },

    isDeleted: {
      type: Boolean,
      default:false
    },
    
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },

  },
  {
    timestamps: true, // Automatically handle createdAt and updatedAt
  }
);

//Pre-save middleware for hashing passwords
userSchema.pre("save", async function (next) {
  //eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(
      user.password, 
      Number(config.bcrypt_salt_round));
  }
  next();
});

// Post-save middleware to clear password from the response
userSchema.post("save", function (doc, next) {
  doc.password = ''; // Remove password from the saved object
  next();
});




// Static method: Check if a user exists by email
userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await this.findOne({ email }).select("+password");
};

// Static method: Check if the user is marked as deleted
userSchema.statics.isUserDeleted = async function (id: string) {
  return await this.findOne({ _id: id, isDeleted: true });
};

// Static method: Check if the user is blocked
userSchema.statics.isBlocked = async function (id: string) {
  const user = await this.findOne({ _id: id, status: "blocked" });
  return !!user; // Returns true if blocked, false otherwise
};

// Static method: Validate password
userSchema.statics.isPasswordMatched = async function (plainTextPassword, hashedPassword) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

// Static method: Check if JWT was issued before the password was changed
userSchema.statics.isJWTIssuedBeforePasswordChanged = function (
  passwordChangedTimestamps: Date,
  jwtIssuedTimestamps: number
) {
  const passwordChangeTime = new Date(passwordChangedTimestamps).getTime() / 1000;
  return passwordChangeTime > jwtIssuedTimestamps;
};

export const User = model<TUser, UserModel>("User", userSchema);
