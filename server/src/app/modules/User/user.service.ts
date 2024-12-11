import config from "../../config";
import { TUser } from "./user.interface";
import { User } from "./user.model";
// import { generateStudentId, generatedAdminId } from "./user.utils";
// import mongoose from "mongoose";
// import { StatusCodes } from "http-status-codes";
// import AppError from "../../errors/AppErrors";
// import { Admin } from "../Admin/admin.model";
// import { TAdmin } from "../Admin/admin.interface";
import { TCustomer } from "../Ucustomer/ucustomer.interface";
import { Customer } from "../Ucustomer/ucustomer.model";
import AppError from "../../errors/AppErrors";
import { StatusCodes } from "http-status-codes";
import { TAdmin } from "../Admin/Admin.interface";
import { generateCustomerId, generatedAdminId } from "./user.utils";
import { Admin } from "../Admin/Admin.model";

// Creating a student in the database
const createCustomerIntoDB = async (password: string, CustomerData: TCustomer) => {

  //create a user object
  const userData: Partial<TUser> = {};

  //if password is not given use default password
  userData.password = password || (config.default_pass as string);



  //set customer role 
  userData.role = "customer";

  //set manually  generate it
  //userData.id = '2037494034';
  userData.id = await generateCustomerId();


  // create a user
  const newUser = await User.create(userData);

  if (!newUser) {
    throw new AppError(StatusCodes.BAD_REQUEST, "Failed to Create new user");
  }

 // console.log("CustomerData:", CustomerData);


  //create a customer 
  if (Object.keys(newUser).length) {
    CustomerData.id = newUser.id
    CustomerData.user = newUser._id
    const newCustomer = await Customer.create(CustomerData);


  if (!newCustomer) {
    throw new AppError(StatusCodes.BAD_REQUEST, "Failed to create new customer");
  }
    return newCustomer;
  }
};

// Creating an admin in the database
const createAdminIntoDB = async (password: string, adminData:TAdmin) => {

  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_pass as string);
  userData.role = 'admin';

  userData.id = await generatedAdminId();
  console.log("User Data for Admin:", userData);


  // create a user
  const newUser = await User.create(userData);

  if (!newUser) {
    throw new AppError(StatusCodes.BAD_REQUEST, "Failed to Create new admin");
  }

  if (Object.keys(newUser).length) {
    adminData.id = newUser.id
    adminData.user = newUser._id
    const newAdmin = await Admin.create(adminData);
    console.log("New Admin Created:", newAdmin);


    if (!newAdmin) {
      throw new AppError(StatusCodes.BAD_REQUEST, "Failed to create new Admin");
    }
      return newAdmin;
  }
};
  //const session = await mongoose.startSession();

  // try {
  //     session.startTransaction();

  //     userData.id = await generatedAdminId();
  //     console.log("Generated Admin ID:", userData.id);

  //     const newUser = await User.create([userData], { session });
  //     console.log("New User created:", newUser);

  //     if (!newUser.length) {
  //         throw new AppError(StatusCodes.BAD_REQUEST, "Failed to create new user");
  //     }

  //     payload.id = newUser[0].id; // Safely assign ID to payload
  //     payload.user = newUser[0]._id;

  //     console.log("Payload for Admin creation:", payload);

  //     const newAdmin = await Admin.create([payload], { session });
  //     console.log("New Admin created:", newAdmin);

  //     if (!newAdmin.length) {
  //         throw new AppError(StatusCodes.BAD_REQUEST, "Failed to create admin");
  //     }

  //     await session.commitTransaction();
  //     await session.endSession();
  //     return newAdmin;

  // } catch (err) {
  //     console.error("Error during admin creation:", err);
  //     await session.abortTransaction();
  //     if (err instanceof AppError) throw err;
  //     throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to create admin");
  // } 



export const UserServices = {
  createCustomerIntoDB,
  createAdminIntoDB
};
