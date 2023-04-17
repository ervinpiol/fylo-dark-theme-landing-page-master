import React, { useEffect, useState } from "react";
import HeroImage from "../assets/illustration-intro.png";
import { motion } from "framer-motion";
import BGCurvyDesktop from "../assets/bg-curvy-desktop.svg";
import BGCurvyMobile from "../assets/bg-curvy-mobile.svg";

const Hero = () => {
  const [bgImage, setBgImage] = useState(BGCurvyDesktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setBgImage(BGCurvyMobile);
      } else {
        setBgImage(BGCurvyDesktop);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [BGCurvyDesktop, BGCurvyMobile]);
  return (
    <div className="flex flex-col items-center mt-10 pb-52 md:pb-44 md:w-full md:px-10 bg-DarkBlueIntro relative bg_hero-color">
      <img
        src={bgImage}
        alt="BGCurvyDesktop"
        className="absolute w-full bottom-[-2px] z-[999] md:top-1/2 sm:top-[30%]"
      />
      <div className="flex flex-col items-center z-[999]">
        <motion.img
          src={HeroImage}
          alt="HeroImage"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.h1
          className="text-4xl font-bold font-RaleWay w-[730px] text-center leading-[3.25rem] py-8 md:text-3xl md:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          All your files in one secure location, accessible anywhere.
        </motion.h1>
        <motion.p
          className="w-[500px] text-center tracking-wide pb-8 opacity-90 md:w-11/12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 1 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </motion.p>
        <motion.button
          className="bg-gradient-to-r from-Cyan to-Blue w-[250px] py-4 rounded-full font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
