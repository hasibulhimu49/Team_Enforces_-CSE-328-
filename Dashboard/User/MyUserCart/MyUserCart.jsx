import React from 'react';
import CartSection from '../../../Components/MyCart/MyCart';
import ImageColumn from '../../../Components/Utilities/ImageColumn/ImageColumn';
import FirstImage from '../../../Components/Utilities/ImageColumn/FirstImage';
import { image1, image2, image3 } from '../../../Components/Utilities/ImageColumn/Image';
import { image04, image05, image06, image07, image08, image09, image10 } from '../../../Components/Utilities/ImageColumn/GalleryImage';

const MyUserCart = () => {
    return (
        <div className=' '>
            <h1 className='text-3xl font-black uppercase'>cart</h1>
            {/* <FirstImage
                imageUrl={image1}
                customClass="absolute  opacity-90  top-[360px]  left-0   
                lg:w-[350px] md:w-[250px] w-[200px] 
                lg:h-[600px] md:h-[400px] h-[400px]"
            /> */}
            <CartSection customClass=" rounded-lg max-w-full mx-auto " />
            {/* <FirstImage
                imageUrl={image10}
                customClass="absolute rotate-180   opacity-90 top-28  right-0   
                lg:w-[200px] md:w-[200px] w-[200px] 
                lg:h-[400px] md:h-[200px] h-[200px]"
            /> */}
        </div>
    );
};

export default MyUserCart;