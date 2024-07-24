import { LuInstagram } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";

const Footer = () => {
  return (
    <div className="w-full px-20 h-fit bg-[#00636B] flex flex-col  ">
      <div className="top bg-red-300 w-full h-[60vh] ">


      </div>
      <div className="bottom  w-full  flex justify-between items-center font-['Panther_Hunter_Personal_USe_Onl'] text-white px-2">
        <h2 className="text-[10vmax] leading-0">Vadilal</h2>
        <div className="h-full w-full   flex gap-8 justify-end">
          <LuInstagram size={"3rem"}/>
          <FaFacebookF size={"3rem"}/>
          <ImYoutube size={"3rem"}/>
        </div>
      </div>
    </div>
  )
}

export default Footer