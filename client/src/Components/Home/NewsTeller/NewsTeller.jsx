import React from 'react';
import image1 from "/Assets/newsteller/image1-removebg.png";
import image2 from "/Assets/newsteller/parrow-removebg-preview.png";
import FirstImage from '../../Utilities/ImageColumn/FirstImage';

const Newsletter = () => {
  return (
    <div className='bg-gradient-to-r from-white from-20% via-green-300 via-40% to-white to-80%

    max-w-7xl rounded-2xl lg:mt-24 mx-auto bg-white/30 backdrop-blur-sm border border-white/70 shadow-2xl  '>
      <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
        
        {/* First Column: Align Right */}
        <div className="flex justify-end items-center bg-cover bg-center rounded-b-lg  "
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '350px', 
            height: '350px'
          }}
        >
          {/* You can add additional content here if needed */}
        </div>

       


        {/* Second Column: Centered Content */}
    <div className="flex flex-col justify-end pb-16  items-center bg-cover bg-center lg:h-[400px]"
          
        >
           <FirstImage
           imageUrl={image2}
           customClass="lg:absolute md:absolute lg:blur-0

           lg:bottom-[180px]  lg:right-[480px] 
           md:bottom-[210px]  md:right-[260px] 
           bottom-[230px]  right-[360px]

           lg:w-[420px] lg:h-[260px] 
           md:w-[250px] md:h-[150px] 
           w-[200px]   h-[100px] "

          />
         
          <h2 className="text-sm   font-bold mb-4  text-gray-500 "><span className='text-black font-black  text-3xl pe-2'>Subscribe</span> to our Newsletter</h2>
          <form className="w-full flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-3/4 p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-3/4 bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Third Column: Align Left */}
     <div  className="lg:flex justify-start items-center bg-cover bg-center h-[400px]  md:hidden hidden"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '350px', 
            height: '350px'
          }}
        >
          {/* You can add additional content here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
