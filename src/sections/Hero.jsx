

import Model from "../components/Model";
import video from "../assets/Vadilal Badabite.mp4"


const Hero = ({logo}) => {


  return (
    <div
      id="hero"
      className="w-full h-screen bg-[#F08080]  max-sm:wave-sm sm:wave  relative overflow-hidden"
    >
      {/* <div className="w-[40%] h-[49%] hidden overflow-hidden lg:flex rounded-3xl bg-red-200 absolute top-8 left-[20%] -translate-x-1/2 text-sm
       ">
        <video src={video} muted autoPlay loop className="w-full h-full object-cover "></video>
      </div> */}
      <span className="text-[7vmax] lg:text-[6vmax]  lg:bottom-[75%] left-7 font-custom text-[#DFD8CA] font-semibold absolute">
       Delightful world of
      </span>
      <span className="text-[5vmax] lg:text-[6vmax] bottom-[17%] right-12 lg:right-7 font-custom text-[#DFD8CA] font-semibold absolute">
      Vadilal Ice Creams
      </span>
      
      <Model />

      
    </div>
  );
};

export default Hero;
