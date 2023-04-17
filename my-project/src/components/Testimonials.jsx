import React from "react";
import { Testimonial } from "../constants/Testimonial";
import BGQuotes from "../assets/bg-quotes.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="flex mx-auto gap-12 pt-52 w-11/12 relative lg:flex-col lg:items-center">
      {Testimonial.map((item, i) => (
        <motion.div
          key={i}
          className="bg-DarkBlueTestimonial p-8 pt-10 z-[999] rounded-sm white_shadow lg:w-3/4 sm:w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2 * (i + 1), duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="opacity-90 md:text-sm">{item.testimonial}</p>
          <div className="flex items-center gap-4 pt-6">
            <img
              src={item.image}
              alt={item.name}
              className="rounded-full w-8"
            />
            <div className="">
              <p className="text-sm font-bold">{item.name}</p>
              <p className="text-xs opacity-90">{item.position}</p>
            </div>
          </div>
        </motion.div>
      ))}
      <motion.img
        src={BGQuotes}
        alt="BGQuotes"
        className="absolute top-[172px] left-[-10px] z-[100] lg:left-24 sm:left-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      />
    </div>
  );
};

export default Testimonials;
