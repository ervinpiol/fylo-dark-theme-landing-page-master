import React, { useState, useEffect } from "react";
import IllustrationStayProductive from "../assets/illustration-stay-productive.png";
import IconArrow from "../assets/icon-arrow.svg";
import IconArrowHover from "../assets/icon-arrow-hover.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Productive = () => {
  const [imgSrc, setImgSrc] = useState(IconArrow);
  const { ref, inView } = useInView({ threshold: 0.5 });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);
  return (
    <div className="flex justify-center mt-40 ">
      <div className="flex items-center w-11/12 gap-20 xl:flex-col">
        <motion.img
          ref={ref}
          src={IllustrationStayProductive}
          alt="IllustrationStayProductive"
          className="md:w-11/12"
          initial={{ scale: 0 }}
          animate={{ scale: animate ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.div
          className="flex flex-col gap-5 xl:items-start lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className="text-4xl font-bold font-RaleWay w-80 leading-[2.75rem] xl:w-auto md:text-2xl">
            Stay productive, wherever you are
          </h1>
          <p className="opacity-90">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="opacity-90">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <p
            className="flex items-center text-Cyan gap-1.5 cursor-pointer relative after:absolute after:w-[165px] after:h-[1px] after:bg-Cyan after:top-7 hover:text-White hover:after:bg-White"
            onMouseOver={() => setImgSrc(IconArrowHover)}
            onMouseOut={() => setImgSrc(IconArrow)}
          >
            See how Fylo works
            <img src={imgSrc} alt="IconArrow" />
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Productive;
