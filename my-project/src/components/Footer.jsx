import React from "react";
import Logo from "../assets/logo.svg";
import IconLocation from "../assets/icon-location.svg";
import IconPhone from "../assets/icon-phone.svg";
import IconEmail from "../assets/icon-email.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-DarkBlueFooter pt-48 pb-24 px-64 xl:px-20 sm:px-10 sm:pb-16 sm:pt-80">
      <div className="flex flex-col items-start gap-8">
        <motion.img
          src={Logo}
          alt="Logo"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -150 },
            visible: { opacity: 1, y: 0 },
          }}
        />
        <div className="flex w-full justify-between xl:flex xl:gap-20 md:flex-col">
          <div className="flex gap-28 xl:flex-col xl:gap-5">
            <motion.p
              className="flex items-start w-[360px] gap-7 sm:w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -150 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img src={IconLocation} alt="IconLocation" />
              <span className="opacity-90 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </span>
            </motion.p>
            <motion.div
              className="flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              variants={{
                hidden: { opacity: 0, y: -150 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="flex items-center gap-8">
                <img src={IconPhone} alt="IconPhone" />
                <span className="opacity-80">+1-543-123-4567</span>
              </p>
              <p className="flex items-center gap-8">
                <img src={IconEmail} alt="IconEmail" />
                <span className="opacity-80">example@fylo.com</span>
              </p>
            </motion.div>
          </div>
          <div className="flex justify-between gap-32 xl:flex-col xl:gap-16">
            <div className="flex gap-28 md:flex-col md:gap-12">
              <motion.ul
                className="flex flex-col gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: -150 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {["About Us", "Jobs", "Press", "Blog"].map((list, i) => (
                  <li key={i} className="opacity-80 hover:opacity-100">
                    {list}
                  </li>
                ))}
              </motion.ul>
              <motion.ul
                className="flex flex-col gap-4 opacity-90"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                variants={{
                  hidden: { opacity: 0, y: -150 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {["Contact Us", "Terms", "Privacy"].map((list, i) => (
                  <li key={i} className="opacity-80 hover:opacity-100">
                    {list}
                  </li>
                ))}
              </motion.ul>
            </div>
            <motion.div
              className="flex gap-4 md:mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              variants={{
                hidden: { opacity: 0, y: -150 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {[faFacebookF, faTwitter, faInstagram].map((icon, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={icon}
                  className={`border rounded-full cursor-pointer hover:border-Cyan hover:text-Cyan ${
                    i === 0 ? "py-[9px] px-3" : "p-2"
                  }`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
