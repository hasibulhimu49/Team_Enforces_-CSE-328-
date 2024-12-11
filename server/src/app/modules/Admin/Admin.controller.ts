import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AdminService } from "./Admin.server";

const getSingleAdmin = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await AdminService.getSingleAdminFromDB(id);
  
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Admin is retrieved successfully',
      data: result,
    });
  });
  
  const getAllAdmins = catchAsync(async (req, res) => {
    const result = await AdminService.getAllAdminFromDB();
  
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Admins are retrieved successfully',
      data: result,
    });
  });
  
  const updateAdmin = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { admin } = req.body;
    const result = await AdminService.updateAdminDB(id, admin);
  
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Admin is updated successfully',
      data: result,
    });
  });
  
  const deleteAdmin = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await AdminService.deleteAdminFromDB(id);
  
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Admin is deleted successfully',
      data: result,
    });
  });
  
  export const AdminControllers = {
    getAllAdmins,
    getSingleAdmin,
    deleteAdmin,
    updateAdmin,
  };