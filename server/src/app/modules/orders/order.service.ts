import { Product } from '../Product/Product.model';
import { Order } from './order.interface';
import { OrderModel } from './order.model';

// create order

const createOrderIntoDB = async (order: Order) => {
  // find the product
  const product = await Product.findById(order.productId);

  // if product is not found, throw an error
  if (!product) {
    throw new Error('Product not found');
  }

  // check stock
  const isStock = product.status;

  // if product is not in stock, throw an error
  if (isStock == 'inactive' ) {
    throw new Error('Product is not in stock');
  }

  // check stock availability
  const isSufficientQuantity = product.quantity - order.quantity >= 0;

  // if stock is insufficient, throw an error
  if (!isSufficientQuantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  // create order
  const result = await OrderModel.create(order);

  // calculate new quantity
  const newQuantity = product.quantity - order.quantity;
  //console.log(newQuantity);

  // update stock and inStock status
  const updatedProduct = await Product.findByIdAndUpdate(
    product._id,
    {
      quantity: newQuantity, // Update the quantity
      isStock: newQuantity > 0 ? "active" : "inactive", // Update isStock based on quantity
    },
    { new: true }
   
  );

  // if the product update fails, throw an error
  if (!updatedProduct) {
    throw new Error('Failed to update product inventory');
  }

  return result;
};

//get all order from database

const getAllOrdersFromDB = async (email: string): Promise<Order[] | null> => {
  const $regex = new RegExp(email, 'i');

  const result = await OrderModel.find({
    $or: [{ email: { $regex } }],
  });
  return result;
};


//get single order from database
const getSingleOrderFromDB = async (_id: string) => {
  const result = await OrderModel.findOne({ _id });
  return result;
};



/////////////////////////////////////////////////////////////////////////////////////
const retrieveOrdersFromDb = async (email: string,): Promise<{ data: Order[] | null; message: string }> => {
  if (email) {
    const $regex = new RegExp(email, 'i');
    const orders = await OrderModel.find({ email: { $regex } });
    return {
      data: orders,
      message: 'Orders fetched successfully for user email!',
    };
  } else {
    const orders = await OrderModel.find();
    return { data: orders, message: 'Orders fetched successfully!' };
  }
};

///////////////////////////////////////////////////////////////////////////////////////



export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  retrieveOrdersFromDb,
  getSingleOrderFromDB,
};
