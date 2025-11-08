/* eslint-disable no-unused-vars */

import ContractForm from "../components/Contract/ContractForm";
import ContractInfo from "../components/Contract/ContractInfo";
import OfficeLocation from "../components/Contract/OfficeLocation";
import { motion } from "framer-motion";
import C1 from "../assets/contact/C1.png";
import BannerImage from "../components/bannerimage/BannerImage";

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
    <div className="overflow-hidden mt-[85px] md:mt-[120px] lg:mt-[110px] 2xl:mt-[90px]">
      {/* Banner Section */}
      <BannerImage image={C1} />
      <div className="h-[68px] sm:h-[83.4px] bg-[#f5f5f5] "></div>
      <ContractForm />
      <ContractInfo />
      <OfficeLocation />
    </div>
  );
};

export default Contact;
