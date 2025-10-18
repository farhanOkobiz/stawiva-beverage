import { motion } from "framer-motion";
import Containar from "../components/containar/Containar";
import M1 from "../assets/management/m1.png";
import DarulIslamOmar from "../assets/management/DarulIslamOmar(CFO).jpg";
import GolamKibriyaRony from "../assets/management/GolamKibriyaRony(CEO).jpg";
import DidarulIslam from "../assets/management/DidarulIslam(COO).jpg";
import JunaedAhmedTawsi from "../assets/management/JunaedAhmedTawsi(CLPO).jpg";
import AhmedJobaerSizan from "../assets/management/AhmedJobaerSizan(MD).png";
import SoniaAkhter from "../assets/management/SoniaAkhter(CIO).png";
import DeloaraSalim from "../assets/management/DeloaraSalim.jpg";
import BG from "../assets/management/bg.jpg";

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

function Management() {
  return (
    <div className="overflow-hidden">
      {/* Banner Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center text-white perspective-1000">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${M1})` }}
          initial={{ z: -200, opacity: 0, scale: 1.2 }}
          animate={{
            z: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5 },
          }}
        />
        {/* Dark Overlay */}
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
            Management
          </h2>
          <p className="mt-2 xl:mt-8 font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-5xl mx-auto lg:leading-relaxed xl:leading-relaxed">
            Our management team drives growth with vision, integrity, and
            innovation, ensuring excellence in every decision.
          </p>
        </motion.div>
      </div>
      <div style={{ backgroundImage: `url(${BG})` }}>
        {/* Chairman  */}
        <Containar>
          <div className="flex flex-col lg:flex-row items-start gap-10 py-20">
            {/* Left Image */}
            <motion.div
              className="lg:w-1/3 w-full flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <img
                src={DeloaraSalim}
                alt="Darul Islam Omar"
                className="w-full h-auto rounded-xl shadow-xl object-cover"
              />
            </motion.div>
            {/* Right Text */}
            <motion.div
              className="lg:w-2/3 w-full space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Name */}
              <motion.h3
                className="text-3xl lg:text-4xl font-bold text-[#1b2a36]"
                variants={textVariants}
                custom={0}
              >
                Deloara Salim
              </motion.h3>

              {/* Position */}
              <motion.h4
                className="text-xl lg:text-2xl font-semibold text-[#00754a]"
                variants={textVariants}
                custom={1}
              >
                Chairman, Stamina+ Beverage Limited
              </motion.h4>

              {/* Bio */}
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                {[
                  "Deloara Salim is a highly educated and remarkable woman whose life has been devoted to her family and the pursuit of excellence. As the mother of Ahmed Jobaer Sizan, she has played an instrumental role in shaping the values and vision that define Stamina+ Beverage Limited.",
                  "Throughout her life, she has dedicated herself to ensuring the well-being and success of her loved ones, guiding each of her children toward quality education and moral strength. Her wisdom, patience, and leadership have created a strong foundation for both her family and the company.",
                  "Despite being a devoted homemaker, Deloara Salim possesses exceptional insight, organizational skills, and a natural ability to lead with empathy and precision. Her approach to management reflects balance, compassion, and strategic foresight.",
                  "As one of the guiding figures behind Stamina+ Beverage Limited, she continues to inspire through her unwavering values, dedication, and vision — seamlessly blending family principles with professional excellence to drive the company’s sustainable growth and human-centered leadership.",
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
          </div>
        </Containar>
        {/* MD */}
        <Containar>
          <div className="flex flex-col-reverse lg:flex-row items-start gap-10 py-20">
            {/* Right Text */}
            <motion.div
              className="lg:w-2/3 w-full space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Name */}
              <motion.h3
                className="text-3xl lg:text-4xl font-bold text-[#1b2a36]"
                variants={textVariants}
                custom={0}
              >
                Ahmed Jobaer Sizan
              </motion.h3>
              {/* Position */}
              <motion.h4
                className="text-xl lg:text-2xl font-semibold text-[#00754a]"
                variants={textVariants}
                custom={1}
              >
                MANAGING DIRECTOR & OWNER, STAMINA+ BEVERAGE LIMITED
              </motion.h4>
              {/* Bio */}
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                {[
                  "Ahmed Jobaer Sizan is a passionate young entrepreneur and visionary business leader who founded Stamina+ Beverage Limited with the mission to bring innovation and quality to Bangladesh’s beverage industry. He strongly believes that a healthy, energetic generation begins with safe, refreshing, and high-quality drinks.",
                  "From his early student life, he nurtured the dream of building his own venture that would contribute to the country’s economic growth. That dream turned into reality through the establishment of Stamina+ Beverage Limited. As an entrepreneur, he values integrity, innovation, and customer satisfaction as the core principles of his business journey.",
                  "Under his leadership, Stamina+ Beverage Limited is not just a company, but a commitment — to deliver freshness, taste, and trust to its consumers. With a global vision, he is determined to take Bangladeshi beverages beyond borders and export Stamina+ products to international markets, proudly representing Bangladesh on the world stage.",
                  "In addition to his achievements as the Managing Director of Stamina+ Beverage Limited, Ahmed Jobaer Sizan has also gained remarkable professional experiences at a very young age. He worked at Intellier Limited, a reputed software company, where he developed strong skills in technology-driven business operations. Furthermore, he served as the Chief Operating Officer of Dreamland Technologies, a growing mobile accessories company. Holding such a significant leadership position at a young age demonstrates his extraordinary capability, dedication, and strategic mindset.",
                  "His journey reflects not only entrepreneurial excellence but also his versatility and adaptability across multiple industries. These diverse experiences have enriched his vision and leadership style, making him one of the most promising young business leaders of Bangladesh.",
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
              className="lg:w-1/3 w-full flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <img
                src={AhmedJobaerSizan}
                alt="Darul Islam Omar"
                className="w-full h-auto rounded-xl shadow-xl object-cover"
              />
            </motion.div>
          </div>
        </Containar>
        {/* CEO*/}
        <Containar>
          <div className="flex flex-col lg:flex-row items-start gap-10 my-20">
            {/* Left Image */}
            <motion.div
              className="lg:w-1/3 w-full flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <img
                src={GolamKibriyaRony}
                alt="Darul Islam Omar"
                className="w-full h-auto rounded-xl shadow-xl object-cover"
              />
            </motion.div>
            {/* Right Text */}
            <motion.div
              className="lg:w-2/3 w-full space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Name */}
              <motion.h3
                className="text-3xl lg:text-4xl font-bold text-[#1b2a36]"
                variants={textVariants}
                custom={0}
              >
                Golam Kibria Rony
              </motion.h3>

              {/* Position */}
              <motion.h4
                className="text-xl lg:text-2xl font-semibold text-[#00754a]"
                variants={textVariants}
                custom={1}
              >
                Chief Executive Officer, Stamina+ Beverage Limited
              </motion.h4>

              {/* Bio */}
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                {[
                  "Golam Kibria Rony is an accomplished business professional with a strong academic and leadership background. He completed his BBA in Finance from International Islamic University, Chattogram, followed by an MBA from Daffodil International University, Dhaka. To further enhance his expertise, he pursued a second MBA with a prestigious scholarship at The University of Sydney, Australia.",
                  "Before joining Stamina+ Beverage Limited, he gained valuable professional experience in Bangladesh by holding senior positions in several international companies, including Assistant Manager at Kotiti and Senior Assistant Manager at TUV-SUD Bangladesh Private Limited.",
                  "Currently, he is enrolled in a PhD program, focusing on advanced research in business and management, reflecting his continuous passion for knowledge and professional excellence.",
                  "As the Chief Executive Officer of Stamina+ Beverage Limited, Kibria Rony combines his global education, financial expertise, and visionary leadership to guide the company toward sustainable growth, innovation, and international recognition. His dedication and strategic mindset make him an integral force in shaping the company’s future.",
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
          </div>
        </Containar>
        {/* COO */}
        <Containar>
          <div className="flex flex-col-reverse lg:flex-row items-start gap-10 my-20">
            {/* Right Text */}
            <motion.div
              className="lg:w-2/3 w-full space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Name */}
              <motion.h3
                className="text-3xl lg:text-4xl font-bold text-[#1b2a36]"
                variants={textVariants}
                custom={0}
              >
                Didarul Islam
              </motion.h3>
              {/* Position */}
              <motion.h4
                className="text-xl lg:text-2xl font-semibold text-[#00754a]"
                variants={textVariants}
                custom={1}
              >
                Chief Operating Officer, Stamina+ Beverage Limited
              </motion.h4>

              {/* Bio */}
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                {[
                  "Darul Islam Omar is a dynamic and hardworking professional who currently serves as the Chief Financial Officer of Stamina+ Beverage Limited. He is not only highly skilled in finance but also admired for his honesty, integrity, and kind-hearted nature.",
                  "He has successfully completed both his BBA and MBA with a major in Finance, equipping him with strong analytical and strategic thinking abilities. Known for his sharp intellect and innovative mindset, Omar brings fresh perspectives and practical solutions to every challenge he faces.",
                  "Before joining Stamina+ Beverage Limited, he built a strong foundation in the corporate and financial sectors. He served as a Senior Officer at Al-Arafah Islami Bank, where he gained deep expertise in financial operations and compliance. Later, he worked as an Assistant Manager (Accounts) at Sadiq Agrochemicals Limited, where he honed his skills in financial management, reporting, and organizational development.",
                  "With his diverse professional background, Omar is a visionary leader who believes in combining financial discipline with innovative strategies to drive sustainable growth. His dedication, leadership, and collaborative approach make him an invaluable asset to the company.",
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
              className="lg:w-1/3 w-full flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <img
                src={DidarulIslam}
                alt="Darul Islam Omar"
                className="w-full h-auto rounded-xl shadow-xl object-cover"
              />
            </motion.div>
          </div>
        </Containar>
        {/* CFO */}
        <Containar>
          <div className="flex flex-col lg:flex-row items-start gap-10 my-20">
            {/* Left Image */}
            <motion.div
              className="lg:w-1/3 w-full flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <img
                src={DarulIslamOmar}
                alt="Darul Islam Omar"
                className="w-full h-auto rounded-xl shadow-xl object-cover"
              />
            </motion.div>
            {/* Right Text */}
            <motion.div
              className="lg:w-2/3 w-full space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Name */}
              <motion.h3
                className="text-3xl lg:text-4xl font-bold text-[#1b2a36]"
                variants={textVariants}
                custom={0}
              >
                Darul Islam Omar
              </motion.h3>

              {/* Position */}
              <motion.h4
                className="text-xl lg:text-2xl font-semibold text-[#00754a]"
                variants={textVariants}
                custom={1}
              >
                Chief Financial Officer, Stamina+ Beverage Limited
              </motion.h4>

              {/* Bio */}
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                {[
                  "Darul Islam Omar is a dynamic and hardworking professional currently serving as the Chief Financial Officer of Stamina+ Beverage Limited. He is highly skilled in finance and admired for his honesty, integrity, and kind-hearted nature.",
                  "He has completed both his BBA and MBA with a major in Finance, equipping him with strong analytical and strategic thinking abilities. Known for his sharp intellect and innovative mindset, Omar brings fresh perspectives and practical solutions to every challenge.",
                  "Before joining Stamina+ Beverage Limited, he built a strong foundation in the corporate and financial sectors. He served as a Senior Officer at Al-Arafah Islami Bank, gaining deep expertise in financial operations and compliance. Later, he worked as an Assistant Manager (Accounts) at Sadiq Agrochemicals Limited, honing his skills in financial management, reporting, and organizational development.",
                  "With his diverse professional background, Omar is a visionary leader who combines financial discipline with innovative strategies to drive sustainable growth. His dedication, leadership, and collaborative approach make him an invaluable asset to the company.",
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
          </div>
        </Containar>
        {/* CIO  */}
        <Containar>
          <div className="flex flex-col-reverse lg:flex-row items-start gap-10 my-20">
            {/* Right Text */}
            <motion.div
              className=" w-full space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Name */}
              <motion.h3
                className="text-3xl lg:text-4xl font-bold text-[#1b2a36]"
                variants={textVariants}
                custom={0}
              >
                Sonia Akhter
              </motion.h3>
              {/* Position */}
              <motion.h4
                className="text-xl lg:text-2xl font-semibold text-[#00754a]"
                variants={textVariants}
                custom={1}
              >
                Chief Information Officer (CIO), Stamina+ Beverage Limited
              </motion.h4>

              {/* Bio */}
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                {[
                  "Sonia Akhter is the Chief Information Officer (CIO) of Stamina+ Beverage Limited, a highly intelligent, dedicated, and visionary professional who brings remarkable expertise in technology and innovation to the company. From an early age, she has demonstrated exceptional brilliance and analytical ability, earning outstanding academic achievements throughout her educational journey.",
                  "She completed her Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering from Khulna University of Engineering and Technology (KUET), one of Bangladesh’s most prestigious engineering institutions. Currently, she is pursuing her Master of Science (M.Sc.) degree at Macquarie University, Australia, further enhancing her global knowledge and leadership in the field of information technology.",
                  "With her strong technical background, leadership skills, and strategic thinking, Sonia Akhter is perfectly suited for her role as CIO, driving the company’s digital transformation, IT infrastructure, and innovation roadmap.",
                  "Beyond her professional excellence, Sonia is known for her humility, integrity, and commitment to personal growth. In her personal life, she is happily married and the proud mother of one child.",
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
              src={SoniaAkhter}
              alt="Darul Islam Omar"
              className="w-full h-auto rounded-xl shadow-xl object-cover"
            />
          </motion.div>
          </div>
        </Containar>
        {/* CLPO */}
        <Containar>
          <div className="flex flex-col lg:flex-row items-start gap-10 py-20">
            {/* Right Text */}
            <motion.div
              className="lg:w-2/3 w-full space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Name */}
              <motion.h3
                className="text-3xl lg:text-4xl font-bold text-[#1b2a36]"
                variants={textVariants}
                custom={0}
              >
                Junaed Ahmed Tawsi
              </motion.h3>

              {/* Position */}
              <motion.h4
                className="text-xl lg:text-2xl font-semibold text-[#00754a]"
                variants={textVariants}
                custom={1}
              >
                Chief Loss Prevention Officer (LPSD), Stamina+ Beverage Limited
              </motion.h4>

              {/* Bio */}
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                {[
                  "Junaed Ahmed Tawsi completed his SSC and HSC from Alia Madrasah and is currently pursuing further studies both at a Maulana institute and a university simultaneously. From a young age, he has demonstrated exceptional analytical and strategic thinking skills. He possesses a deep understanding of how to enhance company performance while ensuring operations remain secure and efficient.",
                  "In his role as Chief Loss Prevention Officer, Junaed excels at designing and implementing effective strategies to reduce losses to absolute zero. He has a remarkable ability to understand, monitor, and control personnel activities, ensuring compliance and integrity across all levels of the organization.",
                  "Known for his honesty, innovative mindset, and keen problem-solving abilities, Junaed was chosen for this role because he is perfectly suited to the responsibilities it demands. His foresight, discipline, and dedication make him an invaluable asset to Stamina+ Beverage Limited, where he plays a crucial role in safeguarding the company’s resources and optimizing operational excellence.",
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
              className="lg:w-1/3 w-full flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <img
                src={JunaedAhmedTawsi}
                alt="Darul Islam Omar"
                className="w-full h-auto rounded-xl shadow-xl object-cover"
              />
            </motion.div>
          </div>
        </Containar>
      </div>
    </div>
  );
}

export default Management;
