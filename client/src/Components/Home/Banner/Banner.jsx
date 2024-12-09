import React from 'react';
import banner from "/pump.jpg";

const Banner = () => {
    return (
        <div>
            <div
                className="z-10 relative  hero lg:mt-8 h-96 w-full lg:h-[480px] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${banner})`,
                }}
            >
                <div className="hero-overlay bg-opacity-20 backdrop-contrast-150 backdrop-blur-sm"></div>
                <div className="hero-content text-white  text-center">
                    <div className="lg:max-w-xl max-w-md">
                        <div className='bg-gradient-to-r from-green700 from-20% via-yellow-500 via -40% to-green-600 to-90% rounded-lg'>
                            <h1 className="mb-5 lg:text-8xl md:text-7xl text-7xl font-bold py-2  mt-12  
                       bg-gradient-to-r from-emerald-700 from-20% via-yellow-500 via -40% to-green-600 to-90% bg-clip-text text-transparent
                       "> NatureNest</h1>
                        </div>
                        <p className="mb-5 lg:text-lg md:text-lg text-sm">
                            "Discover our exquisite collection of trees, each selected for their beauty and resilience. Find the perfect addition to your garden, enhancing your outdoor space while contributing to the environment. Shop with us for quality plants that thrive in every season."
                        </p>

                        {/*  <br className='hidden lg:block md:block'/>repudiandae et a id nisi.
                         */}
                        {/* <button className="btn border-none text-white font-black text-md bg-green-600">Get Started</button>
                        
                        bg-gradient-to-r from-emerald-700 via-yellow-500 to-green-600 bg-clip-text text-transparent
                        
                        */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
