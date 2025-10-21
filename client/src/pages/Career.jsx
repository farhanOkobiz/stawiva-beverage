import { motion } from "framer-motion";
import Containar from "../components/containar/Containar";
import C1 from "../assets/career/C1.png";
import C2 from "../assets/career/C2.png";
import CareerForm from "../components/career/CareerForm";
import BannerImage from "../components/bannerimage/BannerImage";

const imageVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
};

const textVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
};

function Career() {
  return (
    <div className="overflow-hidden mt-[85px] md:mt-[92px] lg:mt-[110px]">
      {/* Banner Section */}
      <BannerImage image={C1} />
      {/* Message Section */}
      <Containar>
        <div className="flex flex-col lg:flex-row justify-between items-center my-16 h-full">
          {/* Left */}
          <div className="lg:w-1/2 w-full">
            <CareerForm />
          </div>
          {/* Right */}
          <motion.div
            className="lg:w-1/2 w-full h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <img
              src={C2}
              alt="Management Team"
              className="w-full h-full shadow-lg"
            />
          </motion.div>
        </div>
      </Containar>
    </div>
  );
}

export default Career;
