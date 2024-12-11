/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrderServices } from './order.service';
import orderValidationSchema from './order.validation';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

// create order

const createOrder = catchAsync(async (req, res) => {
 
    const orderData = req.body;
    const parsedOrderData = orderValidationSchema.parse(orderData);
    const result = await OrderServices.createOrderIntoDB(parsedOrderData);

    sendResponse(res,{
      statusCode:StatusCodes.OK,
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  
});

// get all order

const getAllOrders = catchAsync( async (req, res) => {
  try {
    const { email } = req.query as { email: string };

    const result = await OrderServices.getAllOrdersFromDB(email);

    if(email){
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    }else{
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error,
    });
  }
});

//get single order

const getSingleOrder =catchAsync( async (req, res) => {
  try {
    const { orderId } = req.params;
    const result = await OrderServices.getSingleOrderFromDB(orderId);

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: 'Order not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Order not found',
    });
  }
});

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getSingleOrder,
};
