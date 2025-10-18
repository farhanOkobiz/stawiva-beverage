/* eslint-disable no-unused-vars */

import ContractForm from "../components/Contract/ContractForm";
import ContractInfo from "../components/Contract/ContractInfo";
import OfficeLocation from "../components/Contract/OfficeLocation";
import { motion } from "framer-motion";
import C1 from "../assets/contact/C1.png";

const imageVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
};

const textVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
};

const Contact = () => {
  return (
    <div className="mx-auto font-robo lg:px-0">
      {/* Banner Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center text-white perspective-1000">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-black/40"
          style={{ backgroundImage: `url(${C1})` }}
          initial={{ z: -200, opacity: 0, scale: 1.2 }}
          animate={{
            z: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5 },
          }}
        />
        <motion.div
          className="relative z-10 text-center px-4 p-6 rounded"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeOut" },
          }}
        >
        </motion.div>
      </div>
      <div className="h-[68px] sm:h-[83.4px] bg-[#f5f5f5] "></div>
      <ContractForm />
      <ContractInfo />
      <OfficeLocation />
    </div>
  );
};

export default Contact;
