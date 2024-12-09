import React from 'react';


const FirstImage = ({ imageUrl, customClass = '' }) => {
    return (
        <div
            className={`${customClass}`}
            style={{
                backgroundImage: `url(${imageUrl})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
             {/* <img
               
                className="absolute bottom-[860px] blur-sm opacity-70 -z-40 right-0 rotate-180  lg:w-[400px] md:w-[150px] w-[100px] lg:h-[800px] md:h-[150px] h-[100px] "
            /> */}
        </div>
    );
};

export default FirstImage;