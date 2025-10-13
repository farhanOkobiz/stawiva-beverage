import { motion } from "framer-motion";
import managementImg from "../assets/management/management.jpg";
import Containar from "../components/containar/Containar";

const textVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
};

function AboutUs() {
  return (
    <div className="overflow-hidden">
      {/* Banner Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center text-white perspective-1000">
        {/* Background Image: top/front to back */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${managementImg})` }}
          initial={{ z: 200, y: -100, scale: 1.3, opacity: 0 }} // top/front position
          animate={{
            z: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            transition: { duration: 2, ease: "easeOut" },
          }}
        />

        {/* Overlay Text: bottom to top */}
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="relative z-10 text-center px-4 p-6 rounded"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeOut", delay: 0.3 },
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us – Stamina+ Beverage Limited
          </h1>
          <p className="mt-2 xl:mt-8 font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-5xl mx-auto lg:leading-relaxed xl:leading-relaxed">
            We are a rapidly growing conglomerate, working in industries
            including RMG, Pharmaceuticals, Retail, IT & Real Estate.
          </p>
        </motion.div>
      </div>

      {/* Message Section */}
      <motion.div
        className="bg-[#19232f] text-white py-16 px-4"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg md:text-5xl leading-[3.5rem] md:leading-[4.5rem] font-semibold">
            Our reputation for reliability can be credited to our highly skilled
            workforce of 20,000 employees.
          </p>
        </div>
      </motion.div>

      {/* Additional Content Section */}
      {/* Additional Content Section */}
      <Containar>
        <motion.div
          className="my-20 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1b2a36] mb-4">
            About Us – Stamina+ Beverage Limited
          </h2>

          {/* Paragraphs */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Stamina+ Beverage Limited is a visionary beverage company committed
            to redefining the art of refreshment. Built on innovation,
            integrity, and excellence, we deliver premium-quality flavored
            carbonated drinks designed to energize, inspire, and elevate every
            moment.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At Stamina+, we don’t just produce beverages — we craft experiences.
            Every bottle reflects our relentless pursuit of perfection, blending
            advanced manufacturing technology, strict quality assurance, and the
            finest ingredients sourced with care. Our mission is simple yet
            powerful: to bring refreshment that fuels both body and confidence.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            With a modern production facility, a passionate team, and a
            forward-thinking management approach, Stamina+ stands at the
            intersection of creativity and reliability. Our Research and
            Development Department continuously explores new flavors, ensuring
            that every product we create matches the evolving lifestyle of the
            new generation.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We believe that true strength lies in confidence — and confidence
            begins with Stamina+. As we expand across Bangladesh and beyond, our
            promise remains unchanged: uncompromising quality, unbeatable taste,
            and unstoppable energy.
          </p>

          {/* Closing Tagline */}
          <p className="text-2xl lg:text-3xl font-semibold text-[#00754a] mt-6">
            Stamina+ Beverage Limited — Taste the Power. Refresh the World.
          </p>

          {/* Export Vision */}
          <div className="space-y-2 mt-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#1b2a36]">
              Export Vision
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Stamina+ Beverage Limited is committed to expanding beyond the
              borders of Bangladesh. With world-class quality and uncompromising
              standards, the company aims to export its refreshing flavored
              beverages to international markets, proudly representing
              Bangladesh on the global stage.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-4 mt-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#1b2a36]">
              Mission & Vision
            </h3>

            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-[#1b2a36]">Mission</h4>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our mission at Stamina+ Beverage Limited is to deliver safe,
                refreshing, and high-quality flavored beverages that inspire
                energy, confidence, and a healthy lifestyle. We are committed to
                ensuring customer satisfaction through innovation, integrity,
                and uncompromising quality standards.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-[#1b2a36]">Vision</h4>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our vision is to establish Stamina+ Beverage Limited as a
                trusted global brand. With world-class quality and modern
                technology, we aim to expand beyond the borders of Bangladesh
                and proudly export our beverages to international markets,
                representing the strength and potential of our nation on the
                global stage.
              </p>
            </div>
          </div>
        </motion.div>
      </Containar>
    </div>
  );
}

export default AboutUs;
