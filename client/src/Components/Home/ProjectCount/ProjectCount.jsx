import { motion } from "framer-motion";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const ProjectCount = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <motion.section className="bg-green-900 text-white"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1  justify-between lg:h-[300px] md:h-[500px] h-[700px] items-center px-4 py-8">
        {/* Placeholder for alignment */}
        {/* <div></div> */}

        {/* Trees Sold */}
        <div className="text-center">
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            {counterOn && (
              <CountUp className="text-6xl font-black bg-gradient-to-r from-emerald-500 via-yellow-400 to-green-300 bg-clip-text text-transparent" start={0} end={10000} duration={3} delay={0} /> 
            )}
          </ScrollTrigger>
          <p className="text-2xl font-black pt-4 text-white ">Trees Sold</p>
        </div>

        {/* <div className="lg:hidden md:hidden"></div> */}

        {/* Satisfied Customers */}
        <div className="text-center">
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            {counterOn && (
              <CountUp className="text-6xl font-black bg-gradient-to-r from-emerald-500 via-yellow-400 to-green-300 bg-clip-text text-transparent" start={0} end={5000} duration={3} delay={0} />
            )}
          </ScrollTrigger>
          <p className="text-2xl pt-4 font-black text-white">Happy Customers</p>
        </div>

        {/* <div className="lg:hidden md:hidden"></div> */}

        {/* Countries Served */}
        <div className="text-center">
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            {counterOn && (
              <CountUp className="text-6xl font-black bg-gradient-to-r from-emerald-500 via-yellow-400 to-green-300 bg-clip-text text-transparent" start={0} end={30} duration={2} delay={0} />
            )}
          </ScrollTrigger>
          <p className="text-2xl font-black pt-4 text-white">Countries Served</p>
        </div>

        {/* <div className="lg:hidden md:hidden"></div> */}

        {/* Trees Planted */}
        <div className="text-center">
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            {counterOn && (
              <CountUp className="text-6xl font-black bg-gradient-to-r from-emerald-500 via-yellow-400 to-green-300 bg-clip-text text-transparent" start={0} end={500000} duration={3} delay={0} />
            )}
          </ScrollTrigger>
          <p className="text-2xl font-black pt-4 text-white">Trees Planted</p>
        </div>

        {/* <div></div>  */}
      </div>
    </motion.section>
  );
};

export default ProjectCount;
