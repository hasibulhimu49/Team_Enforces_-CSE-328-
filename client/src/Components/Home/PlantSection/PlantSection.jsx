import React from "react";
import { image01, image02, image06, image07, image08, image09, image10, image11, image12, image13 } from "../../Utilities/ImageColumn/GalleryImage";
import { Link } from "react-router-dom";

const PlantSection = () => {
  return (
    <section className="bg-white py-16  px-8 ">
      <div className="max-w-7xl mx-auto gap-8  grid lg:grid-cols-2
      md:grid-cols-2 grid-cols-1
      items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-full ">
          <h3 className="text-black text-xl font-semibold mb-2">Plant shop.</h3>
          <h2 className="text-4xl font-bold mb-4">Why People Like Us Most</h2>
          <p className="text-gray-600 mb-6">
            The purpose of lorem ipsum is to create a natural looking block of text that doesn’t distract from the layout.
          </p>

          {/* Stats Section */}
          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4 mb-6 z-50 relative">
            <div className="bg-red-200 p-6 rounded-lg text-center ">
              <h4 className="text-3xl  font-black ext-green-600">10,000+</h4>
              <p className="text-gray-600 ">Seeds Distributed</p>
            </div>
            <div className="bg-yellow-200 p-6 rounded-lg text-center">
              <h4 className="text-3xl font-bold text-black">500+</h4>
              <p className="text-gray-600 ">Species Cultivated</p>
            </div>
            <div className="bg-lime-200 p-6 rounded-lg text-center">
              <h4 className="text-3xl font-bold text-black">300+</h4>
              <p className="text-gray-600 ">Workshops Hosted</p>
            </div>
            <div className="bg-green-200 p-6 rounded-lg text-center">
              <h4 className="text-3xl font-bold text-black">80+</h4>
              <p className="text-gray-600 ">Partnerships with Nurseries</p>
            </div>
          </div>


          {/* Button */}
          <Link to={"/location"}>
          <button  className="bg-green-600  text-white px-6 py-3 rounded-lg font-black">
            Learn more →
          </button>
          </Link>
         
        </div>

        {/* Right: Plant Images */}
        <div className="lg:w-full grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1  gap-4 "
        >

          <div className="flex lg:flex-col md:flex-col space-y-2 space-x-4 justify-between">

           <div className="block md:hidden lg:block ">
           <img
              src={image13}
              alt="Plant 2"
              className="rounded-lg  "
            />
           </div>

            <div className="bg-cyan-200 p-6 rounded-lg text-center ">
              <h4 className="text-3xl font-bold text-black ">80+</h4>
              <p className="text-gray-600 ">Partnerships with Nurseries</p>
            </div>
          </div>
          <div className="bg-gradient-to-t from-gray-200 from-10% via-gray-100 via-30% to-white to-90% rounded-lg text-center flex justify-center">
          <img
            src={image11}
            alt="Plant 3"
            className="  rounded-lg lg:w-[720px] lg:h-[320px] 
            md:w-[320px] md:h-[220px] 
              "
          />
            </div>
          

        </div>
      </div>
    </section>
  );
};

export default PlantSection;
