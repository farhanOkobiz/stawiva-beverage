import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedText = () => {
  const texts = ["Free Sample", "Low MOQ", "Free Brochure"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-lg md:text-xl lg:text-2xl font-semibold flex items-center gap-2 ">
      <AnimatePresence mode="wait">
        <motion.span
          className="text-red-500"
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
      <span className="text-4xl font-normal"> | </span>
      <span>Contact Us</span>
    </div>
  );
};

export default AnimatedText;
