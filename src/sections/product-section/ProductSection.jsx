import { useGSAP } from '@gsap/react'
import gsap, { Expo } from 'gsap'
import React, { useEffect, useState } from 'react'
import chocoFudge from '../../assets/product-assets/chocoFudge.png'
import rajwadi from '../../assets/product-assets/rajwadi.png'
import chocoCrackle from '../../assets/product-assets/chocoCrackle.png'
import chocoCrackleFlingo from '../../assets/product-assets/chocoCrackleFlingo.png'
import cookieIcecreamSandwich from '../../assets/product-assets/cookieIcecreamSandwich.png'

const ProductSection = () => {

  const [active, setActive] = useState(3);

  useEffect(() => {

 var mncircles = document.querySelectorAll(".mncircle");
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
      rotate: (3-(index+1))*10,
      duration: 1.5,
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
    <div id="main">
    <div id="circle">
      <div className="stripe str1">
        <div className="first">
          <div className="smcircle">

          </div>
        </div>
        <div className="sec">
          <img src={chocoFudge} alt="" className='productImg h-[100px] w-[100px]'/>
        </div>
      </div>
      <div className="stripe str2">
      <div className="first">
      <div className="smcircle">
            
        </div>
      </div>
      <div className="sec">
      <img src={rajwadi} alt="" className='productImg h-[100px] w-[100px]'/>
      </div>
      </div>
      <div className="stripe str3">
      <div className="first">
      <div className="smcircle">
            
      </div>
      </div>
      <div className="sec">
      <img src={chocoCrackle} alt="" className='productImg h-[100px] w-[100px]'/>
      </div>
      </div>
      <div className="stripe str4">
      <div className="first">
      <div className="smcircle">
            
      </div>
      </div>
      <div className="sec">
      <img src={chocoCrackleFlingo} alt="" className='productImg h-[100px] w-[100px]'/>
      </div>
      </div>
      <div className="stripe str5">
      <div className="first">
      <div className="smcircle">
            
        </div>
      </div>
      <div className="sec">
   <img src={cookieIcecreamSandwich} alt="" className='productImg h-[100px] w-[100px]'/>
      </div>
      </div>
    </div>
    <div id="panel">
      <div className="mncircle"></div>
      <div className="mncircle"></div>
      <div className="mncircle"></div>
      <div className="mncircle"></div>
      <div className="mncircle"></div>
    </div>
    </div>
  )
}

export default ProductSection