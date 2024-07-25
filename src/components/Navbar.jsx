import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { MdOutlineClose } from "react-icons/md";
import img from "../assets/product-assets/pint.jpg";
import { motion } from "framer-motion";
// import img2 from "../assets/product-assets/vadilal-logo.jpeg";


gsap.registerPlugin(CSSRulePlugin);

const Navbar = ({logo}) => {

  
  const [sideBar, setSideBar] = useState(false);
  useGSAP(() => {
    let tl = gsap.timeline();
    if (sideBar) {
      tl.from(".sideBar", {
        opacity: 0,
        width: 0,
        delay: 0.3,
        duration: 0.6,
      });
      tl.from(".nav", {
        opacity: 0,
        rotate: 90,
        stagger: 0.2,
      });
    }
  }, [sideBar]);

  return (
    <>
      <nav className="w-full bg-[#e8e2d6]  py-2 flex justify-center items-center z-20">
        <motion.img
         initial={{y:30 , opacity : 0}}
         whileInView={{y:0 , opacity:1 }}
         transition={{duration:1, ease: "easeInOut"}}
          src={logo}
          className=" w-24 lg:w-36"
          alt="logo"
        ></motion.img>

        {/* TOOGLE  BUTTON */}
        <div
          onClick={() => {
            setSideBar(!sideBar);
          }}
          className="btn opacity-100 fixed top-5 lg:top-0  right-8 lg:right-24 w-5 lg:w-20 h-5 lg:h-20 flex justify-center items-center  z-[999] cursor-pointer"
          id="toggelBtn"
        >
          <div className="button-outline button-outline1  absolute  w-10 lg:w-16 h-10 lg:h-16 border-[1px] border-black "></div>
          <div className="button-outline button-outline2  absolute   w-10 lg:w-16 h-10 lg:h-16 border-[1px] border-black"></div>
          <div id="hamburger">
            <span> </span>
          </div>
        </div>

        {/* sidebar */}
        {sideBar && (
          <div className="sideBar w-full text-white h-screen fixed top-0 right-0  overflow-hidden  bg-[#00626B] lg:flex  px-4 md:px-8 py-4 z-[9999]">
            <button
                onClick={() => {
                  setSideBar(!sideBar);
                }}
                className="w-fit h-fit px-3 py-3 mb-5 rounded-full cursor-pointer hover:bg-black bg-gray-900 hover:scale-110"
              >
                <MdOutlineClose size={25} />
              </button>
            <div className="left w-full lg:w-1/2  h-1/2  lg:h-full flex items-center justify-center">
              <Tilt className="w-[80%] h-[80%] flex relative rounded-2xl overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className="absolute  opacity-20 scale-[0.92] w-full h-full object-cover"
                />
                <img
                  src={img}
                  alt=""
                  className="absolute  opacity-40 scale-[0.95] w-full h-full object-cover"
                />
                <img
                  src={img}
                  alt=""
                  className="absolute  opacity-60 scale-[0.97] w-full h-full object-cover"
                />
                <img
                  src={img}
                  alt=""
                  className="absolute  opacity-80  w-full h-full object-cover"
                />
              </Tilt>
            </div>

            <div className="right w-full lg:w-1/2  h-1/2  lg:h-full flex flex-col gap-8">
              
              <div className="w-full flex flex-col gap-4 items-center lg:items-end lg:pr-28 lg:pt-10 lg:gap-8 ">
                {[
                  { title: "Home", nav: "#Home" },
                  { title: "Products", nav: "#Products" },
                  { title: "About", nav: "#About" },
                  { title: "Contact", nav: "#Contact" },
                ].map((item) => {
                  return (
                    <div className="w-fit h-fit overflow-hidden">

<span
                      key={item.title}
                      className="nav  inline-block cursor-pointer h-fit text-[5vmax] lg:ml-8 w-fit origin-left  rotate-0 opacity-100 "
                    >
                      <a
                        onClick={() => {
                          setSideBar(!sideBar);
                        }}
                        href={item.nav}
                      >
                        {item.title}
                      </a>
                    </span>
                    </div>
                    
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
