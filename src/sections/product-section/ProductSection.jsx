import { useGSAP } from '@gsap/react'
import gsap, { Expo } from 'gsap'
import React, { useEffect, useState } from 'react'
import chocoFudge from '../../assets/product-assets/chocoFudge.png'
import rajwadi from '../../assets/product-assets/rajwadi.png'
import chocoCrackle from '../../assets/product-assets/chocoCrackle.png'
import chocoCrackleFlingo from '../../assets/product-assets/chocoCrackleFlingo.png'
import cookieIcecreamSandwich from '../../assets/product-assets/cookieIcecreamSandwich.png'
import gourmetNaturalTubFalooda from '../../assets/product-assets/gourmetNaturalTubFalooda.png'      

const ProductSection = () => {

  const [active, setActive] = useState(3);

  useEffect(() => {

 var mncircles = document.querySelectorAll(".mncircle");
  var productImgs = document.querySelectorAll(".productImg");
 var sec = document.querySelectorAll(".sec");

 gsap.to(mncircles[active-1], {
  opacity: 0.5,
 })

 gsap.to(sec[active-1], {
  opacity: 1,
 })

 mncircles.forEach(function(val, index){
  val.addEventListener("click", function(){
    gsap.to("#circle", {
      rotate: (3-(index+1))*20,
      duration: 1.3,
      ease: Expo.easeInOut,
    })
    greyout();

    gsap.to(this, {
      opacity: 0.5,
    })

     gsap.to(sec[index],{
      opacity: 1,
     })
  })
 })

  gsap.to(mncircles[active-1], {
  opacity: 0.5,
 })

 gsap.to(sec[active-1], {
  opacity: 1,
 })

//  productImgs.forEach(function(val, index){
//   val.addEventListener("click", function(){
//     gsap.to("#circle", {
//       rotate: (3-(index+1))*20,
//       duration: 1.3,
//       ease: Expo.easeInOut,
//     })
//   })
//  })

 function greyout(){
  gsap.to(mncircles, {
    opacity: 0.08,
  })

  gsap.to(sec, {
    opacity: 0.4,
  })
 }

  }, [])
  useGSAP(() => {
    gsap.to('#circle', {
      rotate: 0,
      ease: Expo.easeInOut,
      duration: 2,
    })
  })
  return (
    <div id="main" className='h-screen w-screen bg-white'>
    <div id="circle" className='absolute left-[-115vh] lg:left-[-100vh] top-[50%] rounded-[50%] w-[150vh] md:w-[200vh] h-[200vh]'> 
      <div className="stripe str1 flex absolute top-[50%] left-[50%] w-[100%] h-[50px] lg:h-[150px]">
        <div className="first h-[100%] w-[50%] relative">
          <div className="smcircle absolute right-[0.3vw] top-[50%] w-[0.5vw] h-[0.5vw] bg-[#5a595977] rounded-[50%]">

          </div>
        </div>
        <div className="sec opacity-[0.4] pl-[30px] w-[50%] h-[100%]">
          <img src={chocoFudge} alt="" className='productImg h-[50px] md:h-[100px] lg:h-[200px] md:w-[100px] w-[50px] lg:w-[150px]'/>
          <h6 className='pl-[10px] text-[2.5vw] lg:text-[1vw] opacity-[0.5] font-[400]'>Choco Fudge</h6>
        </div>
      </div>
      <div className="stripe str2 flex absolute top-[50%] left-[50%] w-[100%] h-[50px] lg:h-[150px]">
      <div className="first h-[100%] w-[50%] relative">
      <div className="smcircle absolute right-[0.3vw] top-[50%] w-[0.5vw] h-[0.5vw] bg-[#5a595977] rounded-[50%]">
            
        </div>
      </div>
      <div className="sec opacity-[0.4] pl-[30px] w-[50%] h-[100%]">
      <img src={gourmetNaturalTubFalooda} alt="" className='productImg h-[50px] md:h-[100px] lg:h-[150px] md:w-[100px] w-[50px] lg:w-[150px]'/>
      <h6 className='text-[2.5vw] lg:text-[1vw] opacity-[0.5] font-[400]'>Gourmet Falooda</h6>
      </div>
      </div>
      <div className="stripe str3 flex absolute top-[50%] left-[50%] w-[100%]  h-[50px] lg:h-[150px]">
      <div className="first h-[100%] w-[50%] relative">
      <div className="smcircle absolute right-[0.3vw] top-[50%] w-[0.5vw] h-[0.5vw] bg-[#5a595977] rounded-[50%]">
            
      </div>
      </div>
      <div className="sec opacity-[0.4] pl-[30px] w-[50%] h-[100%]">
      <img src={chocoCrackleFlingo} alt="" className='productImg h-[50px] md:h-[100px] lg:h-[150px] md:w-[100px] w-[50px] lg:w-[150px]'/>
      <h6 className='text-[2.5vw] lg:text-[1vw] opacity-[0.5] font-[400]'>Choco Crack Flingo</h6>
      </div>
      </div>
      <div className="stripe str4 flex absolute top-[50%] left-[50%] w-[100%]  h-[50px] lg:h-[150px]">
      <div className="first h-[100%] w-[50%] relative">
      <div className="smcircle absolute right-[0.3vw] top-[50%] w-[0.5vw] h-[0.5vw] bg-[#5a595977] rounded-[50%]">
            
      </div>
      </div>
      <div className="sec opacity-[0.4] pl-[30px] w-[50%] h-[100%]">
      <img src={chocoCrackle} alt="" className='productImg h-[50px] md:h-[100px] lg:h-[150px] md:w-[100px] w-[50px] lg:w-[150px]'/>
      <h6 className='text-[2.5vw] lg:text-[1vw] lg:pl-[5px] opacity-[0.5] font-[400]'>Choco Crackle</h6>
      </div>
      </div>
      <div className="stripe str5 flex absolute top-[50%] left-[50%] w-[100%]  h-[50px] lg:h-[150px]">
      <div className="first h-[100%] w-[50%] relative">
      <div className="smcircle absolute right-[0.3vw] top-[50%] w-[0.5vw] h-[0.5vw] bg-[#5a595977] rounded-[50%]">
            
        </div>
      </div>
      <div className="sec opacity-[0.4] pl-[40px] lg:pl-[30px] w-[50%] h-[100%]">
   <img src={cookieIcecreamSandwich} alt="" className='productImg h-[50px] md:h-[100px] lg:h-[150px] md:w-[100px] w-[50px] lg:w-[150px]'/>
   <h6 className='pl-[14px] text-[2.5vw] lg:text-[1vw] opacity-[0.5] font-[400]'>Cookie Sandwich</h6>
      </div>
      </div>
    </div>
    <div id="panel" className='flex flex-col items-center justify-between absolute left-[40%] md:right-[3%] top-[50%] w-[5%] h-[30%]'>
      <div className="mncircle cursor-pointer rounded-[50%] w-[2.5vw] md:w-[1.5vw] lg:w-[1vw] h-[2.5vw] md:h-[1.5vw] lg:h-[1vw] opacity-[0.08] bg-black"></div>
      <div className="mncircle cursor-pointer rounded-[50%] w-[2.5vw] md:w-[1.5vw] lg:w-[1vw] h-[2.5vw] md:h-[1.5vw] lg:h-[1vw] opacity-[0.08] bg-black"></div>
      <div className="mncircle cursor-pointer rounded-[50%] w-[2.5vw] md:w-[1.5vw] lg:w-[1vw] h-[2.5vw] md:h-[1.5vw] lg:h-[1vw] opacity-[0.08] bg-black"></div>
      <div className="mncircle cursor-pointer rounded-[50%] w-[2.5vw] md:w-[1.5vw] lg:w-[1vw] h-[2.5vw] md:h-[1.5vw] lg:h-[1vw] opacity-[0.08] bg-black"></div>
      <div className="mncircle cursor-pointer rounded-[50%] w-[2.5vw] md:w-[1.5vw] lg:w-[1vw] h-[2.5vw] md:h-[1.5vw] lg:h-[1vw] opacity-[0.08] bg-black"></div>
    </div>
    </div>
  )
}

export default ProductSection