import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { UserServices } from "./user.service";


const createCustomer  = catchAsync(async (req, res) => {
  
    const {password, customer: customerData } = req.body;
    const result = await UserServices.createCustomerIntoDB(password, customerData);

    sendResponse(res, {
      statusCode:StatusCodes.OK,
      success:true,
      message :'User is created successfully',
      data:result
    });  
});


const CreateAdmin = catchAsync(async(req, res)=>{
    const {password, admin:adminData}= req.body;

    const result = await UserServices.createAdminIntoDB(password,adminData);
    //console.log(result);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Admin is created successfully',
      data: result,
    });

  })

  export const userControllers ={
    createCustomer,
    CreateAdmin
  }
  