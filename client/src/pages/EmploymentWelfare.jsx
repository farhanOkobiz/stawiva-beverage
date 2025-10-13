import { motion } from "framer-motion";
import Containar from "../components/containar/Containar";
import managementImg from "../assets/management/management.jpg";

const textVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
};

function EmploymentWelfare() {
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
          <h2 className=" max-w-7xl text-4xl md:text-5xl xl:text-7xl font-bold mb-4">
            Employment & Welfare
          </h2>
          <p className="mt-2 xl:mt-8 font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-5xl mx-auto lg:leading-relaxed xl:leading-relaxed">
            At Stamina+ Beverage Limited, our employees are the heart of our
            success. We are committed to creating a work environment that
            fosters growth, well-being, and professional excellence.
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
              Employment & Welfare
            </h3>

            <p className="text-lg text-gray-700">
              At <strong>Stamina+ Beverage Limited</strong>, our employees are
              the heart of our success. We are committed to creating a work
              environment that fosters growth, well-being, and professional
              excellence.
            </p>

            {/* Employee Well-being */}
            <div>
              <h4 className="text-xl font-semibold mb-2 text-[#1b2a36]">
                Employee Well-being:
              </h4>
              <p className="text-gray-700">
                We prioritize the health, safety, and overall welfare of every
                team member. Our facilities are designed to ensure a safe
                working environment, and we provide regular health check-ups,
                wellness programs, and recreational activities to maintain a
                balanced work-life culture.
              </p>
            </div>

            {/* Training & Development */}
            <div>
              <h4 className="text-xl font-semibold mb-2 text-[#1b2a36]">
                Training & Development:
              </h4>
              <p className="text-gray-700">
                Continuous learning is a core value at Stamina+. We invest in
                skill development programs, workshops, and mentoring to empower
                our employees, helping them grow both personally and
                professionally.
              </p>
            </div>

            {/* Fair and Inclusive Workplace */}
            <div>
              <h4 className="text-xl font-semibold mb-2 text-[#1b2a36]">
                Fair and Inclusive Workplace:
              </h4>
              <p className="text-gray-700">
                We uphold diversity, equity, and inclusion in every aspect of
                employment. Equal opportunity, respect for individual
                differences, and fair treatment are fundamental to our
                organizational culture.
              </p>
            </div>

            {/* Employee Engagement & Recognition */}
            <div>
              <h4 className="text-xl font-semibold mb-2 text-[#1b2a36]">
                Employee Engagement & Recognition:
              </h4>
              <p className="text-gray-700">
                Our employees’ dedication and contributions are celebrated
                through recognition programs, performance incentives, and
                team-building initiatives. At Stamina+, every individual’s
                effort is valued and rewarded.
              </p>
            </div>

            {/* Career Growth */}
            <div>
              <h4 className="text-xl font-semibold mb-2 text-[#1b2a36]">
                Career Growth:
              </h4>
              <p className="text-gray-700">
                Stamina+ provides clear career progression paths and
                opportunities for advancement, encouraging employees to achieve
                their full potential within the organization.
              </p>
            </div>

            <p className="text-lg text-gray-800 font-medium mt-6 leading-[2.5rem]">
              At Stamina+ Beverage Limited, we believe that happy and motivated
              employees are the driving force behind innovation, quality, and
              sustainable growth. By nurturing talent and prioritizing welfare,
              we ensure that our workforce remains energized, inspired, and
              aligned with our mission.
            </p>

            <p className="text-2xl font-semibold text-[#00754a] mt-8">
              Stamina+ — Empowering People. Driving Excellence.
            </p>
          </motion.div>
        </div>
      </Containar>
    </div>
  );
}

export default EmploymentWelfare;
