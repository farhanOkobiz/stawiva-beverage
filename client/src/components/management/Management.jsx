import { motion } from "framer-motion";
import Containar from "../containar/Containar";
import managementImg from "../../assets/management/management.jpg";

const imageVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
};

const textVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
};

function Management() {
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
        {/* Overlay Text */}
        <motion.div
          className="relative z-10 text-center px-4 bg-black/40 p-6 rounded"
          initial={{ y: 50, opacity: 0 }} 
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeOut" },
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Management</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Our diverse management team of experts oversee the vast operations
            of Team Group and its factories.
          </p>
        </motion.div>
      </div>

      {/* Message Section */}
      <Containar>
        <div className="flex flex-col lg:flex-row items-start gap-10 my-20">
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
            <h2 className="text-3xl md:text-4xl font-bold">
              Managing Director's Message
            </h2>
            <h3 className="text-xl font-semibold">Our Exceptional Growth</h3>
            <p>
              Since it's beginning in 2009, TEAM Group has been a company built
              on a spirit of challenge and excitement. We believe strongly in
              reliability, integrity, professionalism, total quality management,
              teamwork, and showing respect to our customers and associates. Our
              adherence to the real values of life has been the driving force
              for TEAM Group’s recognition, not only in the garment industry but
              also in our society.
            </p>
            <p>
              Our exceptional growth – to a group of 12 companies and 14,000
              employees – is something about which we are proud but not
              complacent. We continue to focus on improving the health and
              safety of our working environments and reducing our impact on the
              environment. We always seek to employ and develop enthusiastic
              individuals who share and appreciate our values, and we retain our
              talented employees for long periods. As a result of this approach,
              we are proud to be one of the few entities that seek, achieve and
              maintain strategic and individual collaborations with World-Class
              customers, as well as other reliable partners and suppliers on a
              long-term basis. Through upholding the TEAM philosophy, captured
              in the company’s ‘Vision, Mission, and Values’, we strive to
              continue contributing positively to our society. Group’s vision is
              to become a Genuine Global Specialty Company growing sustainably.
            </p>
            <p>
              On the way to this goal, the Group is pursuing its Medium-Term
              Management Plan centered on the evolution of our goal, with a
              target of becoming a Global Company. Progress is being made on
              schedule both in strengthening the business foundation and in
              achieving non-financial targets associated with core businesses.
            </p>
            <p className="font-bold mt-4">Abdullah Hil Rakib</p>
            <p>Managing Director, Team Group</p>
          </motion.div>
        </div>
      </Containar>
    </div>
  );
}

export default Management;
