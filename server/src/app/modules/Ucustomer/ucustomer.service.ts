//import { Customer } from './ucustomer.model';
import mongoose from 'mongoose';
import AppError from '../../errors/AppErrors';
import { StatusCodes } from 'http-status-codes';
import { Customer } from './ucustomer.model';
import { User } from '../User/user.model';






const getAllCustomerFromDB = async () => {

  
  //search field

  //   const queryObj={...query};//copy

  //   const studentSearchableFields=['email','name.firstName','presentAddress']


  // let searchTerm = '';
  // if(query?.searchTerm){
  //   searchTerm= query?.searchTerm as string ;
  // }

  // const searchQuery =StudentModel.find({
  //   $or:studentSearchableFields.map(field=>({
  //     [field]:{$regex:searchTerm, $options:"i"}
  //   }))
  // })

  // const excludeFields =['searchTerm','sort','limit', 'page','fields']
  // excludeFields.forEach(el=>delete queryObj[el] )




  //   const filterQuery = searchQuery
  //   .find(queryObj)
  //     .populate('admissionSemester')
  //     .populate({
  //       path: 'academicDepartment',
  //       populate: {
  //         path: 'academicFaculty'
  //       }
  //     });

  // let sort ='-createdAt'

  // if(query.sort){
  //   sort = query.sort as string;
  // }

  // const sortQuery =  filterQuery.sort(sort );

  // let page=1
  // let limit=1;
  // let skip=0;


  // if(query.limit){
  //   limit = Number(query.limit);
  // }


  // if(query.page){
  //   page = Number(query.page);
  //   skip= (page-1)*limit;
  // }


  // const paginateQuery = sortQuery.skip(skip)



  // const limitQuery =  paginateQuery.limit(limit );



  // //fields limiting

  // let fields ='-__v'

  // if(query.fields){
  //   fields= (query.fields as string).split(',').join(' ')
  //   console.log({fields});
  // }


  // const fieldQuery = await limitQuery.select(fields)

  //return fieldQuery;

//   const studentQuery = new
//     QueryBuilder(Customer.find()
//     .populate('user')
//     .populate('admissionSemester')
//       .populate({
//         path: 'academicDepartment',
//         populate: {
//           path: 'academicFaculty',
//         },
//       }), query)
//     .search(studentSearchableFields)
//     .filter()
//     .sort()
//     .paginate()
//     .fields()
  const result = await Customer.find() 
  return result;
};

const getSingleCustomerFromDB = async (id: string) => {
  const result = await Customer.findById(id )
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty'
      }
    });
  return result;
};

const deleteCustomerFromDB = async (id: string) => {

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deletedStudent = await
      Customer.findByIdAndUpdate(
        id ,
        { isDeleted: true },
        { new: true, session }
      );


    if (!deletedStudent) {
      throw new AppError(StatusCodes.BAD_REQUEST, "Failed to delete student")
    }

//get user _id from deleted student
  const userId = deletedStudent.user

    const deletedUser = await
      User.findByIdAndUpdate(
        userId ,
        { isDeleted: true },
        { new: true, session }
      );

    if (!deletedUser) {
      throw new AppError(StatusCodes.BAD_REQUEST, "Failed to delete user")
    }


    await session.commitTransaction();
    await session.endSession()



    return deletedStudent;


  } catch (err) {

    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to delete student');

  }

};

// const updateCustomerIntoDB = async (id: string, payload: Partial<TCustomer>) => {


//    const { name, guardian, localGuardian, ...remainingStudent } = payload;

//   const modifiedUpdatedData: Record<string, unknown> = { ...remainingStudent }

//   /*
//      guardian: {
//        fatherOccupation:"Teacher"
//      }
 
//      guardian.fatherOccupation = Teacher
 
//      name.firstName = 'lo'
//      name.lastName = 'ko'
//    */

//   // if (name && Object.keys(name).length) {
//   //   for (const [key, value] of Object.entries(name)) {
//   //     modifiedUpdatedData[`name.${key}`] = value;
//   //   }
//   // }

//   // if (guardian && Object.keys(guardian).length) {
//   //   for (const [key, value] of Object.entries(guardian)) {
//   //     modifiedUpdatedData[`guardian.${key}`] = value;
//   //   }
//   // }

//   // if (localGuardian && Object.keys(localGuardian).length) {
//   //   for (const [key, value] of Object.entries(localGuardian)) {
//   //     modifiedUpdatedData[`localGuardian.${key}`] = value;
//   //   }
//   // }



//   const result = await Customer.findByIdAndUpdate(
//     id,
//     modifiedUpdatedData,
//     { new: true, runValidators: true })

//   return result;
// };

export const CustomerServices = {
    getAllCustomerFromDB,
    deleteCustomerFromDB,
    getSingleCustomerFromDB
  
};
