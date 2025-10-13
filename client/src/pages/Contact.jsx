/* eslint-disable no-unused-vars */
import Containar from "../components/containar/Containar";
import ContractForm from "../components/Contract/ContractForm";
import ContractInfo from "../components/Contract/ContractInfo";
import OfficeLocation from "../components/Contract/OfficeLocation";
import SocialMediaLinks from "../components/Contract/SocialMediaLinks";
import Partner from "../components/home/Partner";
import { motion } from "framer-motion";
import managementImg from "../assets/management/management.jpg";

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
          style={{ backgroundImage: `url(${managementImg})` }}
          initial={{ z: -200, opacity: 0, scale: 1.2 }}
          animate={{
            z: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5 },
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="relative z-10 text-center px-4 p-6 rounded"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeOut" },
          }}
        >
          <h2 className="text-4xl md:text-5xl xl:text-7xl font-bold mb-4">
            Contact{" "}
          </h2>
          <p className="text-lg md:text-xl xl:text-3xl max-w-2xl mx-auto">
            We would like to hear from you
          </p>
        </motion.div>
      </div>
      <div className="h-[68px] sm:h-[83.4px] bg-[#f5f5f5] "></div>
      <ContractForm />
      <ContractInfo />
      <OfficeLocation />
      {/* <SocialMediaLinks /> */}
      {/* <Gallery /> */}
      {/* <Partner /> */}
    </div>
  );
};

export default Contact;
