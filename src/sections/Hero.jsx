import Model from "../components/Model";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full h-screen gradient-sm sm:gradient max-sm:wave-sm sm:wave relative"
    >
      <Navbar />
      <div className="z-30 absolute w-full h-full text-center flex-col flex gap-16 sm:gap-2 justify-center items-center text-white">
        <div className="font-banger tracking-wider uppercase text-7xl">
          Moments of <span className=""> Delight </span> for
          Everyone
        </div>
        <div className="text-4xl">
          Tasteful experiences that make you go{" "}
          <span className="text-red-500"> Waah!</span>
        </div>
      </div>
      <Model />
    </div>
  );
};

export default Hero;
