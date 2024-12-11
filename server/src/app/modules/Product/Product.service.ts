/* eslint-disable @typescript-eslint/no-explicit-any */

import { IProduct } from './Product.interface';
import { Product } from './Product.model';

//create data with product
const createProductIntoDB = async (product: IProduct) => {

    const existingProduct = await Product.findOne({ productCode: product.productCode });

    // Validate productCode
    // if (!existingProduct) {
    //     throw new Error("Product code is required!");
    // }

    // Check for duplicate productCode
    if (existingProduct) {
        throw new Error("Product with this code already exists!");
    }

    // Create product
    try {
        const result = await Product.create(product);
        return result;
    } catch (error:any) {
        // Handle any other database errors
        throw new Error(`Failed to create product: ${error.message}`);
    }
};




//gate all product
const getAllProductsFromDB = async (searchTerm: object,): Promise<IProduct[] | null> => {
    const result = await Product.find(searchTerm);
    return result;
};
// gate single product
const getSingleProductFromDB = async (_id: string) => {
    const result = await Product.findOne({ _id });
    return result;
};
//delete product from database
const deleteProductFromDB = async (_id: string) => {
    const result = await Product.findOneAndDelete({ _id });
    return result;
};
//update a single product
const updateProductFromDB = async (
    _id: string,
    updateData: Partial<IProduct>,
) => {
    try {
        const result = await Product.findByIdAndUpdate(_id, updateData, {
            new: true,
            runValidators: true,
        }).exec();
        return result;
    } catch (error) {
        console.error(`Failed to update product with id ${_id}:`, error);
        throw error;
    }
};

export const ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    deleteProductFromDB,
    updateProductFromDB,
};
