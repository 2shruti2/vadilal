import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const ScreenLoader = () => {
 
  useGSAP(()=>{
    let tl= gsap.timeline()
    tl.to(".text",{
      rotate : 0,
      opacity:1,
      duration:1
    })
    tl.from(".line",{
      width : 0,
      opacity:0,
      duration:1.5
    })
    tl.to(".gcircle",{
      top:'-50%',
      duration:1,
      delay:1
    })
    tl.to(".load",{
      opacity:0,
      duration:0.5
    })
  })
  return (
    <div className="load w-full h-screen bg-[#00626B] absolute z-[100] top-0 left-0 right-0 bottom-0 flex justify-center items-center overflow-hidden ">
      <div className="w-full h-1 top-1/2  -translate-y-1/2 absolute z-[-1]">
        <div className="line opacity-100 w-full h-1 lg:h-2 bg-red-400  absolute top-1/2 -translate-y-1/2"></div>
      </div>
      <div className="font-custom text-white opacity-100 text-[9vmax] lg:text-[5vmax] overflow-hidden">
        <span className="text px-4 origin-left inline-block rotate-90 opacity-0 ">
        Vadilal
        </span>
        </div>
      <div className="gcircle w-[150vmax] absolute top-[120%] rounded-full h-[150vmax] gradient "> </div>
    </div>
  )
}

export default ScreenLoader