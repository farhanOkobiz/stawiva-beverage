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

function NewsEvents() {
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
            News & Events – Stamina+ Beverage Limited
          </h2>
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
            className="lg:w-1/2 w-full space-y-8 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h3 className="text-3xl font-bold mb-4 ">News & Events </h3>

            {/* Stay Updated Section */}
            <section className="space-y-4">
              <p>
                Stay updated with the latest developments and upcoming
                initiatives at <strong>Stamina+ Beverage Limited</strong>. Even
                as we prepare to launch our operations, we are committed to
                sharing our journey, innovations, and milestones with our
                stakeholders.
              </p>

              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Upcoming Initiatives:
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Launch of our flavored carbonated beverages, crafted with
                    quality and innovation.
                  </li>
                  <li>
                    Expansion plans and infrastructure developments to support
                    production and distribution.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Community & Social Engagement:
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Participation in community programs and awareness
                    initiatives.
                  </li>
                  <li>
                    Preparing CSR activities to contribute positively to society
                    and the environment.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Company Announcements:
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Updates on investment, partnerships, and strategic
                    collaborations.
                  </li>
                  <li>
                    Important notifications regarding our growth and upcoming
                    events.
                  </li>
                </ul>
              </div>

              <p>
                Stay connected for all announcements and developments as we move
                closer to refreshing the world with <strong>Stamina+</strong> —{" "}
                <span className="italic">Taste the Power.</span>
              </p>
            </section>
          </motion.div>
        </div>
      </Containar>
    </div>
  );
}

export default NewsEvents;
