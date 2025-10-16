import Containar from "../containar/Containar";
import { motion } from "framer-motion";
import AhmedJobaerSizan from "../../assets/management/AhmedJobaerSizan(MD)2.png";
import BG from "../../assets/management/bg.jpg";

const imageVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
};

const textVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom * 0.2 },
  }),
};

function MDQuote() {
  return (
    <div
      className="py-8 md:py-12 lg:py-16"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <Containar>
        <div className="flex flex-col-reverse lg:flex-row items-start md:items-center gap-10">
          {/* Right Text */}
          <motion.div
            className="lg:w-1/2 w-full space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Name */}
            <motion.h3
              className="text-3xl lg:text-4xl font-bold text-[#1b2a36]"
              variants={textVariants}
              custom={0}
            >
              Ahmed Jobaer Sizan
            </motion.h3>
            {/* Position */}
            <motion.h4
              className="text-xl lg:text-2xl font-semibold text-[#00754a]"
              variants={textVariants}
              custom={1}
            >
              MANAGING DIRECTOR & OWNER, STAMINA+ BEVERAGE LIMITED
            </motion.h4>
            {/* Bio */}
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              {[
                "At Stamina+, we believe real energy comes from nature — every drop is crafted to refresh, recharge, and inspire a healthier tomorrow.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  variants={textVariants}
                  custom={i + 2} // stagger starts after Name and Position
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </motion.div>
          {/* Left Image */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <img
              src={AhmedJobaerSizan}
              alt="Darul Islam Omar"
              className="w-full h-1/2 rounded-xl shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </Containar>
    </div>
  );
}

export default MDQuote;
