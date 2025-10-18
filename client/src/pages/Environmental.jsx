import { motion } from "framer-motion";
import Containar from "../components/containar/Containar";
import S1 from "../assets/sustainability/s1.png";

const textVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
};

function Environmental() {
  return (
    <div className="overflow-hidden">
      {/* Banner Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center text-white perspective-1000">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${S1})` }}
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
          <h2 className=" max-w-7xl text-4xl md:text-5xl xl:text-7xl font-bold mb-4">
            Environmental Sustainability
          </h2>
          <p className="mt-2 xl:mt-8 font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-5xl mx-auto lg:leading-relaxed xl:leading-relaxed">
            Sustainability is a core value of what Stamina+ Beverage Limited
            represents. Taking care of the environment is a vital step towards
            progress.
          </p>
        </motion.div>
      </div>

      {/* Message Section */}
      <Containar>
        <div className="my-20 flex flex-col lg:flex-row items-start gap-10">
          {/* Left Text */}
          <motion.div
            className="w-full space-y-8 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-[#1b2a36]">
              Environmental Sustainability
            </h3>

            <p className="text-lg text-gray-700">
              At{" "}
              <span className="font-semibold text-[#1a73e8]">
                Stamina+ Beverage Limited
              </span>
              , we recognize that protecting the environment is fundamental to
              our mission. Our commitment to environmental sustainability shapes
              every decision we make, from sourcing ingredients to delivering
              products to our consumers.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-[#1b2a36] mb-2">
                  Green Operations:
                </h4>
                <p className="text-gray-700">
                  We implement energy-efficient production processes, minimize
                  water usage, and actively reduce our carbon footprint. Our
                  facilities are designed to optimize energy consumption while
                  maintaining world-class quality standards.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#1b2a36] mb-2">
                  Eco-Friendly Sourcing:
                </h4>
                <p className="text-gray-700">
                  We carefully select raw materials and ingredients from
                  sustainable sources, ensuring that every step of our supply
                  chain supports environmental preservation.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#1b2a36] mb-2">
                  Sustainable Packaging:
                </h4>
                <p className="text-gray-700">
                  Our packaging solutions are designed with recyclability and
                  waste reduction in mind. We continuously explore innovative
                  materials that minimize environmental impact while ensuring
                  product safety and freshness.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#1b2a36] mb-2">
                  Commitment to the Future:
                </h4>
                <p className="text-gray-700">
                  Stamina+ is dedicated to fostering a culture of
                  sustainability. We regularly assess our environmental
                  practices, invest in eco-initiatives, and aim to set new
                  benchmarks for responsible beverage production in Bangladesh
                  and beyond.
                </p>
              </div>
            </div>

            <p className="text-gray-800 text-lg font-medium mt-6 leading-[2.5rem]">
              Through these initiatives, Stamina+ Beverage Limited is not just
              creating exceptional beverages — we are contributing to a
              healthier planet, ensuring that the power of refreshment comes
              with care for the environment.
            </p>

            <p className="text-2xl font-semibold text-[#00754a] mt-8">
              Stamina+ — Taste the Power. Refresh the World. Sustain the Planet.
            </p>
          </motion.div>
        </div>
      </Containar>
    </div>
  );
}

export default Environmental;
