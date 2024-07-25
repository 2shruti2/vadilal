import Model from "../components/Model";
import { motion } from "framer-motion";


const Hero = ({logo}) => {
motion

  return (
    <div
      id="hero"
      className="w-full h-screen gradient gradient-sm  max-sm:wave-sm sm:wave  relative overflow-hidden"
    >
      
       
      
      <motion.span
      initial={{x:-50 , opacity : 0}}
      whileInView={{x:0 , opacity:1 }}
      transition={{duration:1, ease: "easeInOut"}}
      className="text-[7vmax] lg:text-[6vmax] inline-block bottom-[75%] lg:bottom-[75%] left-7 font-custom text-white font-semibold absolute text-outline">
       Delightful world of
      </motion.span>
      <motion.span 
      initial={{x:50 , opacity : 0}}
      whileInView={{x:0 , opacity:1 }}
      transition={{duration:1, ease: "easeInOut"}}
      className="text-[5vmax] lg:text-[6vmax] inline-block bottom-[15%] right-12 lg:right-7 font-custom text-white font-semibold absolute text-outline">
      Vadilal Ice Creams
      </motion.span>
      
      <Model />

      
    </div>
  );
};

export default Hero;
