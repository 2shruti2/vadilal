import { LuInstagram } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { easeInOut, motion } from "framer-motion";



const Footer = () => {


  return (
    <div  className="w-full lg:px-20 h-fit pt-4 bg-[#00636B]  overflow-hidden text-white ">
      <motion.div
      
      initial={{y:100 , opacity : 0}}
      whileInView={{y:0 , opacity:1 }}
      transition={{duration:1, ease: "easeInOut"}}
      id="footer"
        className="top  relative w-full h-fit lg:pb-[25%] text-center  "
      >
        <div  className=" lg:w-[80%] w-[90%] m-auto flex  justify-between py-12 lg:px-16 border-b-2 ">
          <div className="w-full text-md flex flex-col lg:flex-row
           lg:justify-between ">
            <div className="w-full lg:w-[40%] flex flex-col gap-8">
              <p className="w-full text-sm font-medium text-pretty lg:text-justify">
                Thank you for choosing Vadilal. We are honored to be a part of
                your special moments and look forward to serving you the best
                ice creams for many years to come.
              </p>
              <div className="lg:w-fit  flex justify-center lg:justify-end gap-8">
                <LuInstagram size={"1.5rem"} />
                <FaFacebookF size={"1.5rem"} />
                <ImYoutube size={"1.5rem"} />
              </div>
            </div>
            <div className="w-full lg:w-[25%] flex gap-5 flex-wrap pt-6 lg:p-2 items-center justify-center">
              {[
                "contact us",
                "locate us",
                "brand story",
                "products",
                "careers",
                "cronicals",
              ].map((item, index) => {
                return (
                  <span key={index} className="text-sm lg:text-md capitalize cursor-pointer">
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* copyright */}
        <h2 className=" text-xs lg:text-sm font-normal my-3">
          Copyright by Asap developers 2024
        </h2>

        {/* vadilal */}
        <motion.h2
        initial={{y:100 , opacity : 0}}
        whileInView={{y:0 , opacity:1 }}
        transition={{duration:1, ease: easeInOut}}
          className=" hidden lg:flex text-[20vmax] lg:text-[30vmax] absolute -bottom-[60%] lg:-bottom-[44%] right-6 lg:right-28 leading-0 font-custom"
        >
          Vadilal
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Footer;
