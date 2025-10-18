import { motion } from "framer-motion";
import Containar from "../components/containar/Containar";
import C1 from "../assets/career/C1.png";
import C2 from "../assets/career/C2.png";
import CareerForm from "../components/career/CareerForm";

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
    <div className="overflow-hidden">
      {/* Banner Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center text-white perspective-1000">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${C1})` }}
          initial={{ z: -200, opacity: 0, scale: 1.2 }}
          animate={{
            z: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5 },
          }}
        />
        {/* Dark Overlay */}
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

      {/* Message Section */}
      <Containar>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 my-16">
          {/* Left */}
          <div className="lg:w-1/2 w-full">
            <CareerForm />
          </div>
          {/* Right */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <img
              src={C2}
              alt="Management Team"
              className="w-full h-auto shadow-lg"
            />
          </motion.div>
        </div>
      </Containar>
    </div>
  );
}

export default Career;
