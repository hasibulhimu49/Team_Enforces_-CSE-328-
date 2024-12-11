/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductServices } from './Product.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const createProduct = catchAsync(async (req, res) => {


    console.log("Incoming Request Body:", req.body);
        const productData = req.body;
        ///const parsedProductData = productValidationSchema.parse(productData);

        // for send this data we can call service function
        const result = await ProductServices.createProductIntoDB(productData);

        // for send response
        sendResponse(res, {
            statusCode: StatusCodes.OK,
            success: true,
            message: 'Product created successfully!',
            data: result,
        });

    }
);

const getAllProducts = catchAsync(async (req, res) => {

    const searchTerm = req.query.searchTerm;
    const query: any = {};

    // If the search term is provided, create a query to search for products
    // based on their name, category, and description
    if (searchTerm) {
        query.$or = [
            { name: { $regex: searchTerm, $options: 'i' } },
            { description: { $regex: searchTerm, $options: 'i' } },
            { category: { $regex: searchTerm, $options: 'i' } },
            { 'variants.type': { $regex: searchTerm, $options: 'i' } },
            { 'variants.value': { $regex: searchTerm, $options: 'i' } },
        ];
    }

    // Fetch all products from the database
    const result = await ProductServices.getAllProductsFromDB(query);

    // If no products are found, return a 404 status code
    if (!result || result.length === 0) {
        return sendResponse(res, {
            statusCode: StatusCodes.NOT_FOUND,
            success: false,
            message: 'Product not found',
            data:null
        });
    }

    // If no search term is provided, return all products
    if (!searchTerm) {
        res.status(200).json({
            statusCode: StatusCodes.OK,
            success: true,
            message: 'Products fetched successfully!',
            data: result,
        });
    } else {
        // Otherwise, return the products matching the search term
        sendResponse(res, {
            statusCode: StatusCodes.OK,
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: result,
        });
    }

});

const getSingleProduct = catchAsync(async (req, res) => {

    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);

    if (!result) {
        // If the product is not found, return a 404 status code
        return res
            .status(404)
            .json({ success: false, message: 'Product not found' });
    }

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Product fetched successfully!',
        data: result,
    });

});

const deleteProduct = catchAsync(async (req, res) => {
   
        const { productId } = req.params;

        // find the product based on id
        const isExist = await ProductServices.getSingleProductFromDB(productId);

        // if product is not found, throw an error
        if (!isExist) {
            throw new Error('Product is not found!');
        }

        await ProductServices.deleteProductFromDB(productId);

        sendResponse(res, {
            statusCode: StatusCodes.OK,
            success: true,
            message: 'Product deleted successfully!',
            data: null,
        });
   
});

const updateProduct = catchAsync(async (req, res) => {
   
        const { productId } = req.params;
        const updateData = req.body;

        // validate product data
        //const parsedProductData = partialProductValidationSchema.parse();

        const result = await ProductServices.updateProductFromDB(
            productId,
            updateData,
        );

        if (result) {
            sendResponse(res, {
                statusCode: StatusCodes.OK,
                 success: true,
                  message: 'Product updated successfully!',
                   data: result });
        } else {
            sendResponse(res, {
                statusCode: StatusCodes.OK,
                success: true,
                  message: 'Product Not found!',
                   data: result });
                
        }
    
});

export const ProductControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    deleteProduct,
    updateProduct,
};
