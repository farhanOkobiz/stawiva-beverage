import { motion } from "framer-motion";
import Containar from "../components/containar/Containar";
import managementImg from "../assets/industries/i1.png";
import BannerImage from "../components/bannerimage/BannerImage";

const textVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
};

function FoodBeverage() {
  return (
    <div className="overflow-hidden mt-[85px] md:mt-[92px] lg:mt-[110px]">
      {/* Banner Section */}
      <BannerImage image={managementImg} />
      {/* Message Section */}
      <Containar>
        <motion.div
          className="my-20 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          {/* Main Heading */}
          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-[#1b2a36]">
            About Us – Stamina+ Beverage Limited
          </h3>

          {/* Introduction */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Stamina+ Beverage Limited is committed to revolutionizing the
            beverage industry by providing high-quality, flavorful, and
            refreshing drinks. Our focus is on producing carbonated and flavored
            beverages that cater to modern consumers’ tastes while maintaining
            strict quality standards.
          </p>

          {/* Our Products */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#1b2a36]">
              Our Products:
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Flavored Carbonated Drinks:</strong> Available in 250ml
                and 500ml bottles, crafted with unique flavors to appeal to all
                age groups.
              </li>
              <li>
                <strong>Health-Oriented Beverages:</strong> Drinks that provide
                hydration and energy with natural ingredients.
              </li>
            </ul>
            <p className="text-gray-700">
              Each product is manufactured under stringent hygiene and safety
              measures to ensure consistency and customer satisfaction.
            </p>
          </div>

          {/* Research & Development */}
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-[#1b2a36]">
              Research & Development:
            </h4>
            <p className="text-gray-700">
              Our R&D team works tirelessly to innovate new flavors and enhance
              beverage quality. Every product undergoes thorough testing in our
              in-house laboratory to meet both taste and safety standards.
            </p>
          </div>

          {/* Sustainability and Quality */}
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-[#1b2a36]">
              Sustainability and Quality:
            </h4>
            <p className="text-gray-700">
              Stamina+ Beverage Limited is dedicated to sustainability. We
              employ eco-friendly packaging and efficient production methods to
              minimize environmental impact. Our quality control ensures that
              every bottle meets international standards.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-[#1b2a36]">Vision:</h4>
            <p className="text-gray-700">
              To become a leading name in the beverage industry by consistently
              delivering delightful and safe drinks that cater to diverse
              consumer preferences.
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-[#1b2a36]">Mission:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                Produce premium-quality beverages with innovative flavors.
              </li>
              <li>Maintain stringent safety and hygiene standards.</li>
              <li>Promote sustainability in production and packaging.</li>
            </ul>
          </div>
        </motion.div>
      </Containar>
    </div>
  );
}

export default FoodBeverage;
