import { LuInstagram } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";

const Footer = () => {
  return (
    <div className="w-full px-20 h-fit bg-[#00636B]  overflow-hidden text-white ">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="top  relative w-full h-[90vh] text-center "
      >
        <div className=" w-[80%] m-auto flex  justify-between py-12 px-16 border-b-2 ">
          <div className="w-full text-md text-justify flex justify-between">
            <div className="w-[40%] flex flex-col gap-8">
              <p className="w-full text-sm font-medium">
                Thank you for choosing Vadilal. We are honored to be a part of
                your special moments and look forward to serving you the best
                ice creams for many years to come.
              </p>
              <div className="w-fit  flex justify-end gap-8">
                <LuInstagram size={"1.5rem"} />
                <FaFacebookF size={"1.5rem"} />
                <ImYoutube size={"1.5rem"} />
              </div>
            </div>
            <div className="w-[25%] flex gap-5 flex-wrap p-2 items-center justify-center">
              {[
                "contact us",
                "locate us",
                "brand story",
                "products",
                "careers",
                "cronicals",
              ].map((item, index) => {
                return (
                  <span className="text-md capitalize cursor-pointer">
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* copyright */}
        <h2 className="text-sm font-normal mt-3">
          Copyright by Asap developers 2024
        </h2>

        {/* vadilal */}
        <h2
          className=" hidden lg:flex text-[30vmax] absolute -bottom-[44
        %] right-28 leading-0 font-['Panther_Hunter_Personal_USe_Onl']"
        >
          Vadilal
        </h2>
      </div>
    </div>
  );
};

export default Footer;
