import React from 'react';
import sideImage from "/Assets/first.png"


const SideImage = () => {
    return (
        <div className='relative'>
             <img
                src={sideImage} // Replace with your image URL
                alt="Top Right Styling Image"
                className="absolute bottom-[160px] blur-sm opacity-70 -z-40 right-0 rotate-180  lg:w-[400px] md:w-[150px] w-[100px] lg:h-[800px] md:h-[150px] h-[100px] "
            />
        </div>
    );
};

export default SideImage;