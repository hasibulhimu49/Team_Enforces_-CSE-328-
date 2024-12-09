import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Marquee from 'react-fast-marquee';

// Array of partner logos with direct URLs
const partnerLogos = [
  { id: 1, src: '/Assets/Company/alibaba.png', alt: 'Brand 1' },
  { id: 2, src: '/Assets/Company/argyle.png', alt: 'Brand 2' },
  { id: 3, src: '/Assets/Company/fireblocks.png', alt: 'Brand 4' },
  { id: 4, src: '/Assets/Company/flywire.png', alt: 'Brand 11' },
  { id: 5, src: '/Assets/Company/quovo.png', alt: 'Brand 12' },
  { id: 6, src: '/Assets/Company/recury.png', alt: 'Brand 1' },
  { id: 7, src: '/Assets/Company/snapdocs.png', alt: 'Brand 2' },
  { id: 8, src: '/Assets/Company/notabene.png', alt: 'Brand 4' },
  { id: 9, src: '/Assets/Company/toast.png', alt: 'Brand 11' },
  { id: 10, src: '/Assets/Company/vendr.png', alt: 'Brand 11' },
  { id: 11, src: '/Assets/Company/vestwell.png', alt: 'Brand 11' },

];

const PartnerSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} className="max-w-full mx-auto py-12 ">
      <motion.div
        className="text-center lg:mt-16 mt-4"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
       <h1 className='font-black text-3xl  '>OUR PARTNER</h1>
      </motion.div>

      {/* Partner Logos Marquee Slider */}
      <motion.div
        className="mt-8 md:mt-5 p-5 gap-5 "
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.9, delay: 1 }}
      >
        <Marquee pauseOnHover speed={50} gradient={false}>
          {partnerLogos.map((partner) => (
            <img
              key={partner.id}
              src={partner.src}
              alt={partner.alt}
              className="lg:mx-12 md:mx-8 mx-4  lg:w-32 md:w-24 w-16 "
            />
          ))}
        </Marquee>
      </motion.div>
    </div>
  );
};

export default PartnerSlider;
