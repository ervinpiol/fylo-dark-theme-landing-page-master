import React from "react";
import { Feature } from "../constants/Feature";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="w-2/3 mx-auto grid grid-rows-2 grid-cols-2 gap-20 items-center xl:gap-36 lg:flex lg:flex-col sm:w-5/6">
      {Feature.map((item, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center justify-between"
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.1 * (i + 1), duration: 0.8 }}
          viewport={{ once: true, amount: 1 }}
          whileInView="visible"
        >
          <img src={item.image} alt={item.altName} />
          <h3 className="font-bold pt-7 pb-3 lg:text-xl">{item.service}</h3>
          <p className="text-center text-sm w-[370px] opacity-90 lg:text-lg lg:w-full md:text-base">
            {item.detail}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Features;
