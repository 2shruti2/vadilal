import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { useRef, useState } from "react";

import { Tilt } from "react-tilt";

import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import img from "../assets/product-assets/pint.jpg";

gsap.registerPlugin(CSSRulePlugin);

const Navbar = () => {
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
        y: 10,
        delay: 0.3,
        stagger: 0.2,
      });
    }
  }, [sideBar]);

  return (
    <>
      <nav className=" w-full bg-blue-200 bg-transparent py-4 absolute top-0 flex justify-center items-center ">
        <img
          src="https://www.vadilalicecreams.com/_next/static/media/logo.9cfdd9e4.svg"
          className="w-28 opacity-100"
          alt=""
        ></img>

        {/* TOOGLE  BUTTON */}
        <div
          // ref={toggleButton}
          onClick={() => {
            setSideBar(!sideBar);
          }}
          className="btn opacity-100 absolute top-0 right-0 lg:right-24  w-20 h-20 flex justify-center items-center  z-[2] cursor-pointer"
          id="toggelBtn"
        >
          <div className="button-outline button-outline1  absolute w-16 h-16 border-[1px] border-white "></div>
          <div className="button-outline button-outline2  absolute w-16 h-16 border-[1px] border-white"></div>
          <div id="hamburger">
            <span> </span>
          </div>
        </div>

        {/* sidebar */}
        {sideBar && (
          <div className="sideBar w-full text-white h-screen fixed top-0 overflow-hidden  bg-[#00626B] lg:flex  px-4 md:px-8 py-4 z-50">
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
              
              <div className="w-full flex flex-col gap-4 items-center lg:items-end lg:pr-28 lg:pt-10 lg:gap-8">
                {[
                  { title: "Home", nav: "#Home" },
                  { title: "Products", nav: "#Products" },
                  { title: "About", nav: "#About" },
                  { title: "Contact", nav: "#Contact" },
                ].map((item) => {
                  return (
                    <span
                      key={item.title}
                      className="nav inline-block cursor-pointer h-fit text-[5vmax] lg:ml-8 w-fit hover:border-b-2"
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
