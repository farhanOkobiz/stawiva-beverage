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
        <div className="flex flex-col-reverse lg:flex-row items-start gap-10">
          {/* Right Text */}
          <motion.div
            className="lg:w-1/2 w-full space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Name */}
            <motion.h3
              className="text-3xl lg:text-4xl font-bold text-[#c1af0f]"
              variants={textVariants}
              custom={0}
            >
              The Journey
            </motion.h3>
            {/* Position */}
            <motion.h4
              className="text-xl lg:text-2xl font-semibold"
              variants={textVariants}
              custom={1}
            >
              STAMINA+ BEVERAGE LIMITED’s Evolution
            </motion.h4>
            {/* Bio */}
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              {[
                "Since the First Footstep on 8th September 2025, STAMINA+ BEVERAGE LIMITED has transformed from a bold dream into a dynamic reality — a brand that embodies passion, innovation, and unwavering determination.",
                "Founded with the vision to redefine refreshment, STAMINA+ has grown from humble beginnings into a symbol of energy, taste, and trust across Bangladesh and beyond.",
                "Under the inspiring leadership of Managing Director Ahmed Jobaer Sizan, the company continues to evolve with a relentless commitment to quality, modern technology, and international standards.",
                "Every drop of STAMINA+ tells a story of excellence — crafted to energize, empower, and elevate every moment.",
                "The journey has only just begun, and the future holds limitless possibilities for STAMINA+ BEVERAGE LIMITED.",
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
