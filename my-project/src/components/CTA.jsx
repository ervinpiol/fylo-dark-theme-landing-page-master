import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <motion.div
      className="bg-DarkBlueIntro w-2/3 mx-auto flex flex-col items-center gap-6 py-10 px-20 rounded-lg absolute bottom-[-120px] left-1/2 -translate-x-1/2 black_shadow xl:px-10 lg:w-5/6 md:w-[90%] sm:bottom-[-210px] md:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: 200, x: "-50%" },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h3 className="text-3xl font-bold sm:text-2xl">Get early access today</h3>
      <p className="text-center w-11/12 opacity-90 md:text-base sm:w-full">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="flex w-full gap-7 pt-4 md:flex-col">
        <input
          type="email"
          placeholder="email.example.com"
          className="rounded-full py-4 w-full px-10 outline-none text-black md:px-8 sm:px-6"
        />
        <button className="bg-gradient-to-r from-Cyan to-Blue font-bold rounded-full py-4  px-4 w-[320px] hover:bg-CyanHover xl:w-[400px] md:w-full">
          Get Started For Free
        </button>
      </div>
    </motion.div>
  );
};

export default CTA;
