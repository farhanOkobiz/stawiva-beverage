import { motion } from "framer-motion";

function BannerImage({image}) {
  return (
    <motion.div
      initial={{ z: 200, y: -100, scale: 1.3, opacity: 0 }}
      animate={{
        z: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        transition: { duration: 2, ease: "easeOut" },
      }}
    >
      <img src={image} alt="History Banner" className="w-full h-[300px] md:h-auto xl:max-h-[calc(100vh-100px)]" />
    </motion.div>
  );
}

export default BannerImage;
