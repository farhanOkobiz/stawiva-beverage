import { motion } from "framer-motion";
import Containar from "../components/containar/Containar";
import managementImg from "../assets/management/management.jpg";

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
          style={{ backgroundImage: `url(${managementImg})` }}
          initial={{ z: -200, opacity: 0, scale: 1.2 }}
          animate={{
            z: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5 },
          }}
        />
        {/* Dark Overlay */}
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
            Careers – Stamina+ Beverage Limited
          </h2>
          <p className="max-w-7xl lg:font-medium text-lg md:text-xl lg:2xl xl:text-2xl leading-relaxed md:leading-loose xl:leading-loose">
            Career Please keep an eye on Bdjobs.com and LinkedIn sites for
            relevant opening. Due to a large number of applications, only short
            listed candidates with minimum criteria as mentioned will be called
            for Interview/Written exam. The company reserves the right to amend
            the decision regarding the recruitment or selection. For immediate
            Consideration Email your CV to : career@*******.com.bd
          </p>
        </motion.div>
      </div>

      {/* Message Section */}
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left Image */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <img
              src={managementImg}
              alt="Management Team"
              className="w-full h-auto shadow-lg"
            />
          </motion.div>
          {/* Right Text */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <img
              src={managementImg}
              alt="Management Team"
              className="w-full h-auto shadow-lg"
            />
          </motion.div>
        </div>
    </div>
  );
}

export default Career;
