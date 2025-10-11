import { motion } from "framer-motion";
import managementImg from "../assets/management/management.jpg";

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
        <motion.div
          className="relative z-10 text-center px-4 bg-black/40 p-6 rounded"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeOut", delay: 0.3 },
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We are a rapidly growing conglomerate, working in industries
            including RMG, Pharmaceuticals, Retail, IT & Real Estate.
          </p>
        </motion.div>
      </div>
      {/* Message Section */}
      <div className="bg-white py-16">
        Our reputation for reliability can be credited to our highly skilled
        workforce of 20,000 employees.
      </div>
    </div>
  );
}

export default AboutUs;
