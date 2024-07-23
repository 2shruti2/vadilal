import Model from "../components/Model";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full h-screen gradient-sm sm:gradient max-sm:wave-sm sm:wave relative"
    >
      <Navbar />
      <div className="z-30 absolute w-full h-full text-center flex-col flex gap-16 sm:gap-2 justify-center items-center text-white">
        <div className="font-banger tracking-wider uppercase text-7xl">
          Moments of <span className=""> Delight </span> for Everyone
        </div>
        <div className="text-3xl">
          Tasteful experiences that make you go{" "}
          <span className="text-red-500"> Waah!</span>
        </div>
      </div>
      <Model />

      <motion.img
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
        className="max-sm:hidden absolute top-10 -right-0 z-20 h-[35rem] rotate-90"
      />
    </div>
  );
};

export default Hero;
