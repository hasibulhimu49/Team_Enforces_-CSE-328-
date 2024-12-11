import mongoose from "mongoose"
import AppError from "../../errors/AppErrors"
import { StatusCodes } from "http-status-codes"
import { User } from "../User/user.model"
import { Admin } from "./Admin.model"
import { TAdmin } from "./Admin.interface"




const getAllAdminFromDB = async () => {
    // const adminQuery = new QueryBuilder(Admin.find(), Query)
    // .search(AdminSearchableFields)
    //     .filter()
    //     .sort()
    //     .paginate()
    //     .fields()

    const result = await Admin.find();
    return result;

}


const getSingleAdminFromDB = async (id: string) => {
    const result = await Admin.findById(id)
    return result;
}

const updateAdminDB = async (id: string, payload: Partial<TAdmin>) => {
    const { name, ...remainingAdminData } = payload;
    const modificationData: Record<string, unknown> = {
        ...remainingAdminData,
    };
    if (name && Object.keys(name).length) {
        for (const [key, value] of Object.entries(name)) {
            modificationData[`name.${key}`] = value;
        }
      }


      console.log("Updating Admin with ID:", id); // Log the ID
  console.log("Modification Data:", modificationData);

      const result = await Admin.findByIdAndUpdate(
        id,
        modificationData,
        {new:true, 
            runValidators:true});

      return result;
}


const deleteAdminFromDB = async(id:string)=>{
    const session = await mongoose.startSession();
    try{
        session.startTransaction();

        const deleteAdmin = await Admin.findByIdAndUpdate(
            id,
            {isDeleted:true},
            {new:true, session},
        );

        if(!deleteAdmin){
            throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to delete Admin')
        }

        const userId= deleteAdmin.user;

        const deleteUser = await User.findByIdAndUpdate(
            userId,
            {isDeleted:true},
            {new:true, session}
        )

        if(!deleteUser){
            throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to delete User')
        }

        await session.commitTransaction();
        await session.endSession();

        return deleteUser;
    }catch(err:unknown){
        // Handle the error safely
        if (err instanceof AppError) {
            throw err; // Re-throw custom application error
        } else if (err instanceof Error) {
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, err.message);
        } else {
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Unknown error occurred');
        }
    } finally {
        await session.endSession();
    }
}

export const AdminService = {
    getAllAdminFromDB,
    getSingleAdminFromDB,
    updateAdminDB,
    deleteAdminFromDB
}