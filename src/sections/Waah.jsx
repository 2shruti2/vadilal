import TextReveal from "@/components/magicui/text-reveal";
import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from 'react-intersection-observer';

const Waah = () => {
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

  // Intersection observer for images
  const { ref: imgRef1, inView: inView1 } = useInView({ triggerOnce: false });
  const { ref: imgRef2, inView: inView2 } = useInView({ triggerOnce: false });

  return (
    <div id="waah" className="w-full h-[60vh] sm:h-screen bg-teal-500 relative overflow-hidden">
      <div className="z-30 absolute w-full h-full text-center flex-col flex gap-16 sm:gap-2 justify-center items-center text-white">
        <div className="max-sm:hidden font-banger tracking-wider uppercase text-4xl sm:text-7xl text-outline flex">
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
                zIndex: hoveredIndex === index ? 1 : 0,
              }}
            >
              <motion.span
                className="inner-letter"
                animate={{
                  scale: hoveredIndex !== null && Math.abs(hoveredIndex - index) <= 1 ? 1.3 : 1,
                  borderRadius: hoveredIndex === index ? "50%" : "0%",
                  background: hoveredIndex === index ? "rgba(255, 255, 255, 0.2)" : "transparent",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            </motion.span>
          ))}
        </div>

        <div className="sm:hidden font-banger tracking-wider uppercase text-7xl">
          <TextReveal text="Tasteful experiences that make you go Waah!" className="text-4xl font-medium text-outline" />
        </div>

        <div className="max-sm:hidden text-3xl text-outline flex">
          <motion.div className="flex" variants={containerVariants} initial="hidden" animate="visible">
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className={word.includes("Waah!") ? "text-red-500 transition-colors duration-700 hover:animate-slowShake bg-white p-1 rounded hover:text-red-600" : ""}
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

      <motion.img
        ref={imgRef1}
        animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : -100 }}
        transition={{ delay: 0.3, duration: 1 }}
        src="/images/hero02.png"
        alt="ice cream"
        className="absolute top-0 -left-80 z-20 h-[55rem] max-sm:hidden"
      />

      <motion.img
        ref={imgRef2}
        animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : 100 }}
        transition={{ delay: 0.3, duration: 1 }}
        src="/images/collection-icecream.png"
        alt="ice cream"
        className="sm:absolute max-sm:mt-10 top-0 right-0 z-20 sm:h-[55rem] max-sm:object-contain"
      />
    </div>
  );
};

export default Waah;
