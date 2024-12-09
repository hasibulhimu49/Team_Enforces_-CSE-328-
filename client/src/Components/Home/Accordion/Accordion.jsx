import React from 'react';
import { image3 } from '../../Utilities/ImageColumn/Image';


const Accordion = () => {
  return (
    <div className="max-w-7xl mx-auto p-8   lg:mt-96">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:space-x-4 space-y-8 md:space-y-0 lg:space-y-0">

        {/* Left Column - Image Gallery */}
        <div className="flex w-full h-[428px] justify-end items-end p-8 
                
                bg-white/30 backdrop-blur-sm border border-white/70 drop-shadow-xl shadow-2xl rounded-lg lg:w-[440px]"
          style={{
            backgroundImage: `url(${image3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            // width: '300px', 
            // height:'300px'
          }}>
          <div className='gap-2  flex flex-col font-black '>


            <h1 className='text-5xl text text-right pb-16
                        bg-gradient-to-r from-emerald-700 via-yellow-500 to-green-600 bg-clip-text text-transparent
                        '>

              NatureNest |</h1>


            <h1>Plant a tree today, <br /> and nurture a greener tomorrow. <br />
              Each sapling holds the promise of fresh air and vibrant life. <br />
            </h1>

          </div>

        </div>

        {/* Right Column - DaisyUI Accordion */}
        <div className="w-full">
          <div className="space-y-4 ">
            {/* First accordion (open by default) */}
            <div className="collapse bg-green-200 collapse-arrow ">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium ">Tree Types</div>
              <div className="collapse-content">
                <p>We offer a variety of trees such as oak, pine, and maple. Choose the right one for your garden!</p>
              </div>
            </div>

            {/* Second accordion */}
            <div className="collapse collapse-arrow bg-green-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Shipping Information</div>
              <div className="collapse-content">
                <p>We ship trees nationwide with free delivery for orders over $100. Express delivery available.</p>
              </div>
            </div>

            {/* Third accordion */}
            <div className="collapse bg-green-200 collapse-arrow ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Care Instructions</div>
              <div className="collapse-content">
                <p>Each tree comes with a detailed care guide, including watering schedules and sunlight requirements.</p>
              </div>
            </div>

            {/* Fourth accordion */}
            <div className="collapse collapse-arrow bg-green-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Customer Reviews</div>
              <div className="collapse-content">
                <p>Read reviews from satisfied customers who have added our trees to their homes and gardens.</p>
              </div>
            </div>

            {/* Fifth accordion */}
            <div className="collapse collapse-arrow bg-green-200 ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">FAQs</div>
              <div className="collapse-content">
                <p>Frequently asked questions about buying trees online, shipping, and post-purchase care.</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Accordion;
