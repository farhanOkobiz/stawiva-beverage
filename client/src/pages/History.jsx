import { motion } from "framer-motion";
import H1 from "../assets/history/H1.png";
import H2 from "../assets/history/H2.png";
import Containar from "../components/containar/Containar";
import BannerImage from "../components/bannerimage/BannerImage";

const imageVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
};

const textVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
};

function History() {
  return (
   <div className="overflow-hidden mt-[85px] md:mt-[92px] lg:mt-[110px] 2xl:mt-[90px]">
      {/* Banner Section */}
      <BannerImage image={H2} />

      {/* Message Section */}
      <Containar>
        <div className="flex flex-col lg:flex-row items-start gap-10 py-10 lg:my-10">
          {/* Left Image */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <img
              src={H1}
              alt="Management Team"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            className="lg:w-1/2 w-full space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1b2a36] mb-4">
              Our History
            </h2>
            <p>
              The story of Stamina+ Beverage Limited began with a simple yet
              powerful vision — to create a beverage brand that inspires energy,
              confidence, and pride in every sip. Founded by a group of young,
              forward-thinking innovators led by Ahmed Jobaer Sizan, the company
              started its journey with a dream to redefine refreshment in
              Bangladesh and set new benchmarks in beverage excellence. In its
              early days, Stamina+ emerged from humble beginnings — a passionate
              idea nurtured with dedication, research, and relentless effort.
              From developing unique flavor formulas to building a
              state-of-the-art production facility, every step of our growth has
              been guided by one core belief: true strength comes from quality
              and innovation. Over time, Stamina+ evolved from a startup concept
              into a full-scale beverage company equipped with advanced
              machinery, a skilled workforce, and a strong commitment to
              sustainability. Through continuous experimentation and market
              understanding, we have built a brand that connects emotionally
              with consumers and energizes the nation. As our brand continues to
              grow, Stamina+ Beverage Limited is proudly expanding its reach
              beyond Bangladesh — preparing to export its products to
              international markets and share the refreshing taste of Stamina+
              with the world. This marks the beginning of our global journey,
              driven by quality, trust, and ambition. Today, Stamina+ stands as
              a symbol of modern entrepreneurship, youthful ambition, and
              uncompromising excellence. What started as a vision has become a
              movement — to refresh the world with taste, purity, and power.
              Stamina+ Beverage Limited — Taste the Power. Refresh the World.
            </p>
            <p className="font-bold mt-4 text-[#00754a]">
              Stamina+ Beverage Limited — Taste the Power. Refresh the World.
            </p>
          </motion.div>
        </div>
      </Containar>
    </div>
  );
}

export default History;
