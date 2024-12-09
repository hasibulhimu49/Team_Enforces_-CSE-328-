import React from "react";
import { motion } from "framer-motion";

const TreeCaretaker = () => {
  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-8 ">
        
        {/* Left: Text Content */}
        <motion.div
          className="text-black border-r-4 p-5"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Tree Caretakers: Nurturing Nature, One Tree at a Time
          </h2>
          <p className="text-lg mb-4">
            Our tree caretakers play a vital role in ensuring the health and
            longevity of trees. They not only plant and nurture them but also
            provide regular care, ensuring that trees thrive in their
            environment.
          </p>
          <p className="text-lg mb-4">
            From pruning to watering and monitoring soil conditions, our
            caretakers are dedicated to maintaining the natural beauty and
            ecological balance that trees bring to our world.
          </p>
          <p className="text-lg font-semibold text-green-600">
            Join us in celebrating the tireless work of tree caretakers and
            support a greener, healthier planet.
          </p>
        </motion.div>

        {/* Right: Number Grid */}
        {/* <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-rows-4 grid-flow-col gap-4">
            <div className="bg-black px-12 py-4 text-white font-black text-2xl">
              01
            </div>
            <div className="bg-black px-12 py-4 text-white font-black text-2xl">
              02
            </div>
            <div className="bg-black px-12 py-4 text-white font-black text-2xl">
              03
            </div>
            <div className="bg-black px-12 py-4 text-white font-black text-2xl">
              04
            </div>

            <div className="bg-black px-12 py-4 text-white font-black text-2xl">
              05
            </div>
            <div className="row-span-3 bg-black px-12 py-4 text-white font-black text-2xl">
              06
            </div>

            <div className="grid grid-rows-subgrid gap-4 row-span-3">
              <div className="row-start-1 bg-black px-12 py-4 text-white font-black text-2xl">
                07
              </div>
            </div>

            <div className="bg-black px-12 py-4 text-white font-black text-2xl">
              08
            </div>
            <div className="bg-black px-12 py-4 text-white font-black text-2xl">
              09
            </div>
            <div className="bg-black px-12 py-4 text-white font-black text-2xl">
              10
            </div>
            <div className="bg-black px-12 py-4 text-white font-black text-2xl">
              11
            </div>
            <div className="bg-black px-12 py-4 text-white font-black text-2xl">
              12
            </div>
          </div>
        </motion.div> */}
         <motion.div
  className="text-black"
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  <h2 className="text-xl font-bold mb-6">
    Guardians of Green: Caring for Trees with Passion
  </h2>
  <p className="text-lg mb-4">
    Our tree caretakers are the backbone of a thriving ecosystem. They don't just plant trees—they nurture and protect them, ensuring every sapling grows into a symbol of strength and vitality.
  </p>
  <p className="text-lg mb-4">
    With expertise in pruning, watering, and monitoring, they guarantee that each tree receives the care it deserves, thriving in its environment.
  </p>
  {/* <p className="text-lg font-semibold text-green-600">
    Let’s acknowledge the dedication of tree caretakers and contribute to a greener, more sustainable future.
  </p> */}
</motion.div>

      </div>
    </section>
  );
};

export default TreeCaretaker;
