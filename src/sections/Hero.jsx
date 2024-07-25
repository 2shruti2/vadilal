

import Model from "../components/Model";
import video from "../assets/Vadilal Badabite.mp4"
import { motion } from "framer-motion";


const Hero = ({logo}) => {
motion

  return (
    <div
      id="hero"
      className="w-full h-screen gradient gradient-sm  max-sm:wave-sm sm:wave  relative overflow-hidden"
    >
      {/* <div className="w-[40%] h-[49%] hidden overflow-hidden lg:flex rounded-3xl bg-red-200 absolute top-8 left-[20%] -translate-x-1/2 text-sm
       ">
        <video src={video} muted autoPlay loop className="w-full h-full object-cover "></video>
      </div> */}
      <motion.span
      initial={{x:-50 , opacity : 0}}
      whileInView={{x:0 , opacity:1 }}
      transition={{duration:1, ease: "easeInOut"}}
      className="text-[7vmax] lg:text-[6vmax] inline-block lg:bottom-[75%] left-7 font-custom text-[#DFD8CA] font-semibold absolute text-outline">
       Delightful world of
      </motion.span>
      <motion.span 
      initial={{x:50 , opacity : 0}}
      whileInView={{x:0 , opacity:1 }}
      transition={{duration:1, ease: "easeInOut"}}
      className="text-[5vmax] lg:text-[6vmax] inline-block bottom-[17%] right-12 lg:right-7 font-custom text-[#DFD8CA] font-semibold absolute text-outline">
      Vadilal Ice Creams
      </motion.span>
      
      <Model />

      
    </div>
  );
};

export default Hero;
