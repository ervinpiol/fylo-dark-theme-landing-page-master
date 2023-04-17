import React from "react";
import Logo from "../assets/logo.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="w-[1440px] mx-auto flex justify-between items-center p-12 sm:px-8 sm:py-10 xl:w-auto">
      <motion.img
        src={Logo}
        alt="Logo"
        className="md:w-28 sm:w-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      />
      <ul className="flex gap-10 sm:text-sm sm:gap-7">
        {["Features", "Team", "Sign In"].map((item, i) => (
          <motion.li
            key={i}
            className="opacity-80 hover:opacity-100 hover:underline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1 * (i + 1), duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
