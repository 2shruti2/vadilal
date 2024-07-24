import { useState } from "react";
import Model from "../components/Model";
import { motion } from "framer-motion";

const Hero = () => {
  const heading = "Moments of Delight for Everyone";

  const letters = heading.split("");

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const text = "Tasteful experiences that make you go Waah!";
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      id="hero"
      className="w-full h-screen gradient-sm sm:gradient max-sm:wave-sm sm:wave relative"
    >
      <div className="z-30 absolute w-full h-full text-center flex-col flex gap-16 sm:gap-2 justify-center items-center text-white">
        
        <div className="max-sm:hidden font-banger tracking-wider uppercase text-7xl flex">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`letter ${hoveredIndex === index ? "hovered" : ""}`}
              style={{
                position: "relative",
                display: "inline-block",
                margin: "0 2px",
                zIndex: hoveredIndex === index ? 1 : 0, // Ensure the hovered letter is on top
              }}
            >
              <motion.span
                className="inner-letter"
                animate={{
                  scale:
                    hoveredIndex !== null && Math.abs(hoveredIndex - index) <= 1
                      ? 1.3
                      : 1,
                  borderRadius: hoveredIndex === index ? "50%" : "0%",
                  background:
                    hoveredIndex === index
                      ? "rgba(255, 255, 255, 0.2)"
                      : "transparent",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            </motion.span>
          ))}
        </div>

        <div className="sm:hidden font-banger tracking-wider uppercase text-7xl">
          Moments of <span className=""> Delight </span> for Everyone
        </div>

        <div className="max-sm:hidden text-3xl flex">
          <motion.div
            className="flex"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className={word.includes("Waah!") ? "text-red-500" : ""}
                style={{ marginRight: "0.5rem" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="sm:hidden text-3xl">
          Tasteful experiences that make you go{" "}
          <span className="text-red-500"> Waah!</span>
        </div>

      </div>
      <Model />

      {/* <motion.img
        animate={{ x: 100 }}
        transition={{ delay: 1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        src="/images/hero02.png"
        alt="ice cream"
        className="max-sm:hidden absolute top-0 -left-80 z-20 h-[55rem]"
      />
      <motion.img
        animate={{ x: 100 }}
        transition={{ delay: 1, from: 300 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        src="/images/hero01.png"
        alt="ice cream"
        className="max-sm:hidden absolute top-[10%] -right-0 z-20 h-[35rem]"
      /> */}
    </div>
  );
};

export default Hero;
