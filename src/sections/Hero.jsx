import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <div id="hero" className="w-full h-screen gradient-sm sm:gradient max-sm:wave-sm sm:wave">
      <Navbar />
      <div className=" h-screen bg-ruins max-sm:bg-right-bottom bg-cover bg-no-repeat flex max-sm:flex-col">
        <div className="flex-1">
          <h1 className="text-white text-6xl font-extrabold text-center mt-[40%]">
            LEVEL UP WITH{" "}
            <span className="sm:hover:text-7xl">
              COSMO
              <span className="text-primary">BYTE</span>
            </span>
          </h1>
        </div>
        <div className="flex-1">
          <div className="my-28 mx-7 sm:mx-16 border border-primary hover:shadow-2xl hover:shadow-primary h-[60%] flex justify-start items-center rounded-lg p-2 sm:p-4">
            <div className="h-full w-full rounded-lg backdrop-blur-md bg-primary">
              <img
                src="/assets/hero-headphone.png"
                alt="headphone"
                className="object-contain w-full h-full hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
