import Model from "../components/Model";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full h-screen gradient-sm sm:gradient max-sm:wave-sm sm:wave relative"
    >
      <Navbar />
      <Model/>

      <div className="z-30 top-1/2  absolute w-full h-full text-center flex justify-center items-center text-5xl text-white">Vadilal!</div>
    </div>
  );
};

export default Hero;
