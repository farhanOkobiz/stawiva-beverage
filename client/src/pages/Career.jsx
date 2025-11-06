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
    <div className="overflow-hidden mt-[85px] md:mt-[92px] lg:mt-[110px] 2xl:mt-[90px]">
      {/* Banner Section */}
      {/* Banner Section */}
      <motion.div
        initial={{ z: 200, y: -100, scale: 1.3, opacity: 0 }}
        animate={{
          z: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          transition: { duration: 2, ease: "easeOut" },
        }}
        className="relative w-full h-[calc(50vh-100px)] md:h-[calc(60vh-100px)] lg:h-[calc(100vh-100px)] flex items-center justify-center text-white"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${C1})` }}
        />

        {/* Overlay (for dark shade over image) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Career</h1>
          <p className="text-sm md:text-xl lg:text-3xl leading-relaxed">
            Please keep an eye on{" "}
            <span className="font-semibold">Bdjobs.com</span> and{" "}
            <span className="font-semibold">LinkedIn</span> sites for relevant
            opening. Due to a large number of applications, only short listed
            candidates with minimum criteria as mentioned will be called for
            Interview/Written exam. The company reserves the right to amend the
            decision regarding the recruitment or selection.
            <br />
            <br />
            For immediate consideration, email your CV to:{" "}
            <a
              href="mailto:career@team.com.bd"
              className="text-yellow-400 underline"
            >
              staminaplus2025@gmail.com
            </a>
          </p>
        </div>
      </motion.div>

      {/* Message Section */}
      <Containar>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 my-16 h-full">
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
