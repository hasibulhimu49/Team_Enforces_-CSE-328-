import React, { useState } from 'react';
import ProductDescription from './ProductDescription';
import RelatedProducts from './RelatedProducts';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import img4 from '/Assets/icons/Gmail_Logo_512px.png'
import { image1, image2 } from '../Utilities/ImageColumn/Image';
import FirstImage from '../Utilities/ImageColumn/FirstImage';
import SideImage from '../Utilities/ImageColumn/SideImage';
import { Link } from 'react-router-dom';
import Vuzvuz from '../Vuzvuz';
import CustomerReviews from './CustomerReview';



const SingleProduct = () => {


    const [quantity, setQuantity] = useState(1);
   // const [selectedSize, setSelectedSize] = useState('Small'); 

    // Sample data for product details
    const product = {
        name: 'Japanese Maple Tree',
        sku: 'BS0521',
        price: 1432,
        originalPrice: 1798,
        brand: 'Natures best',
        stockStatus: 'In Stock',
        // sizes: ['Small', 'Medium', 'Large'],
        images: [
            '/Assets/grassTob2.jpg',
            '/Assets/download.jpeg',
            // '/Assets/first.png',
            // '/Assets/footer.png',
            // '/Assets/vaseGrass.jpg',
            // '/Assets/4grass.jpg',

        ],
    };

    // Function to increment/decrement quantity
    const handleQuantityChange = (type) => {
        setQuantity((prev) =>
            type === 'increment' ? prev + 1 : prev > 1 ? prev - 1 : prev
        );
    };

    return (
        <div className="relative ">
      {/* <ImageColumn customClass="z-0  absolute -top-12 left-0 w-full h-full" /> */}
      {/* <img
               
                className="absolute bottom-[860px] blur-sm opacity-70 -z-40 right-0 rotate-180  lg:w-[400px] md:w-[150px] w-[100px] lg:h-[800px] md:h-[150px] h-[100px] "
            /> */}
             <FirstImage
                imageUrl={image1}  
                customClass="absolute blur-sm opacity-70 -z-40 top-12  left-0   lg:w-[400px] md:w-[150px] w-[100px] lg:h-[800px] md:h-[150px] h-[100px]"
            />
             <FirstImage
                imageUrl={image2}  
                customClass="absolute blur-sm opacity-70 -z-40 -top-16  right-0  lg:w-[350px] md:w-[150px] w-[100px] lg:h-[350px] md:h-[150px] h-[100px]"
            />

            <div className="lg:p-0 md:p-8 p-4 rounded-lg relative z-0 max-w-7xl mx-auto py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mt-24">
                <div className="flex flex-col ">
                    <div className=" group w-full justify-center items-center flex bg-slate-100  overflow-hidden rounded-lg">
                        <img 
                            src={product.images[0]} // Main image
                            alt={product.name}
                            className="w-96 h-96 flex items-center justify-center  object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                        />

                    </div>
                    {/* <Link to={'/product/vuvuz'}>dffffffff</Link> */}

                    {/* Thumbnail carousel */}
                    <div className="flex space-x-4 mt-4 px-6">
                        {product.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-20 h-20 object-cover cursor-pointer border rounded-lg"
                            />
                        ))}
                    </div>
                </div>

                {/* Right Section: Product Details */}
                <div className="flex flex-col space-y-4">
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                        <div className='flex justify-between'>
                        <p className="text-gray-500">SKU: {product.sku}</p>

                        <div className='flex gap-4'>
                        <a href="" className='text-blue-700 text-2xl'><FaFacebook /></a>
                        <a href="" className=' text-2xl text-rose-500'><FaInstagram /></a>
                        <a href="" className='text-blue-700 text-2xl'><img className='w-6 h-5' src={img4} alt="" /></a>
                        <a href="" className=' text-blue-700 text-2xl'><FaLinkedin /></a>
                        

                        </div>

                        </div>
                    {/* Pricing */}
                    <div className="flex items-center space-x-4">
                        <span className="text-2xl font-bold text-green-600">৳ {product.price}</span>
                        <span className="line-through text-gray-500">৳ {product.originalPrice}</span>
                    </div>

                    {/* Brand and Status */}
                    <div className="space-y-2">
                        <p>
                            <span className="font-semibold">Brand: </span>
                            {product.brand}
                        </p>
                        <p>
                            <span className="font-semibold">Status: </span>
                            <span className="text-green-600 font-bold">{product.stockStatus}</span>
                        </p>
                    </div>

                    {/* Size Selection
                    <div className="space-y-2">
                        <span className="font-semibold">Tree Size: </span>
                        <div className="flex space-x-4">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 border rounded-md ${selectedSize === size
                                        ? 'bg-green-700 text-white font-bold'
                                        : 'bg-white text-gray-800'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div> */}

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-4">
                        <span className="font-semibold">Quantity: </span>
                        <div className="flex items-center border rounded-lg">
                            <button
                                onClick={() => handleQuantityChange('decrement')}
                                className="px-3 py-2"
                            >
                                -
                            </button>
                            <span className="px-4">{quantity}</span>
                            <button
                                onClick={() => handleQuantityChange('increment')}
                                className="px-3 py-2"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-6 mt-6">
                        <button className="flex-1 bg-green-700 font-bold text-white py-3 rounded-lg ">
                            Add to cart
                        </button>
                        <Link to="/order" className="btn flex-1  text-green-700 border-1 border font-bold border-green-700 py-3 rounded-lg hover:bg-green-700 hover:text-white">
                            Buy now
                        </Link>
                    </div>
                </div>




            </div>




            <ProductDescription />
            <RelatedProducts/>
            <CustomerReviews/>
            <SideImage/>
           
        </div>
    );
};

export default SingleProduct;
