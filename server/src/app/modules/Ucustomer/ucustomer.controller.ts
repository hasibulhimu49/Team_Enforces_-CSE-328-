import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { StatusCodes } from 'http-status-codes';
import { CustomerServices } from './ucustomer.service';



const getAllCustomer = catchAsync(async (req, res ) => {
    
    const result = await CustomerServices.getAllCustomerFromDB();

    sendResponse(res, {
      statusCode:StatusCodes.OK,
      success:true,
      message :'Customer are retrieved successfully',
      data:result

    });
 
});

const getSingleCustomer = catchAsync(async (req, res ) => {
  
  const { id } = req.params;

  const result = await CustomerServices.getSingleCustomerFromDB(id);

  sendResponse(res, {
    statusCode:StatusCodes.OK,
    success:true,
    message :'Customer is retrieved with id successfully',
    data:result

  });

});


// const updateCustomer = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const { student } = req.body;
//   const result = await CustomerServices.updateCustomerIntoDB(id, student);

//   sendResponse(res, {
//     statusCode: StatusCodes.OK,
//     success: true,
//     message: 'Customer is updated successfully',
//     data: result,
//   });
// });


const deleteCustomer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerServices.deleteCustomerFromDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Customer is deleted successfully',
    data: result,
  });
});


export const CustomerControllers = {
  getAllCustomer,
  getSingleCustomer,
  deleteCustomer,
};
