import React,{ useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation';
import 'swiper/css/free-mode'

import { Pagination, FreeMode} from 'swiper/modules'

import peachCobbler from '../../assets/product-assets/peachCobbler.jpg'
import jumboCups from '../../assets/product-assets/jumboCups.jpg'
import bomberCandy from '../../assets/product-assets/bomberCandy.png'
import vadilalCones from '../../assets/product-assets/vadilalCones.jpg'
import vadilalGourmet from '../../assets/product-assets/vadilalGourmet.jpg'
import blackForest from '../../assets/product-assets/blackForest.jpg'

import { FaIceCream } from "react-icons/fa";
import { GiChocolateBar, GiCupcake } from "react-icons/gi";
import { TbBrandCakephp } from "react-icons/tb";
import { GoContainer } from "react-icons/go";
import { LuIceCream2 } from "react-icons/lu";

const Advertisemts = () => {
  
  useEffect(() => {
    const track = document.getElementById("swiper-trackId");
  
    window.onmousedown = e => {
      track.dataset.mouseDownAt = e.clientX;
    }
  
    window.onmouseup = e => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    }
  
  
    window.onmousemove = e => {
     if(track.dataset.mouseDownAt === "0") return;
  
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, maxDelta = window.innerWidth / 2;
  
      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
      
      track.dataset.percentage = nextPercentage;
  
  
      for(const image of track.getElementsByClassName("slideImage")) {
        image.animate({
          backgroundPosition: `${100 + nextPercentage}% center`
        }, { duration: 1000, fill: "forwards" });
       
      }
  
    }
   }, [])

  return (
    <div className='flex items-start justify-center flex-col h-screen w-full gradient'>
     <Swiper
     breakpoints={{
      340: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 10,
      }
     }}

     pagination={{
      clickable: true
     }}

    //   autoplay={{
    //   delay: 1000,
    //   disableOnInteraction: true,
    // }}

     freeMode={true}
        modules={[FreeMode, Pagination]}
     className='mySwiper max-w-[90%] lg:max-w-[80%]'
     id='swiper-trackId'
     data-mouse-down-at="0" 
     data-prev-percentage="0"
     >

       <SwiperSlide>
        <div className='flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-2xl overflow-hidden px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] cursor-pointer'>
          <div className='absolute inset-0 bg-cover slideImage' style={{backgroundImage: `url(${vadilalCones})`}} />
          <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50' />
          <div className='relative hidden flex-col gap-3 group-hover:flex'>
          <FaIceCream className="group-hover:text-blue-400  w-[32px] h-[32px]"/>
          <h1 className="text-xl lg:text-2xl">Flingo</h1>
          <p className="lg:text-[18px]">Falling in love is fun with Flingo</p>
          </div>
        </div>
       </SwiperSlide>

        <SwiperSlide>   
          <div className='flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-2xl overflow-hidden px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] cursor-pointer'>
        <div className='absolute inset-0 bg-cover slideImage' style={{backgroundImage: `url(${peachCobbler})`}}/>
        <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50' />
        <div className='relative hidden flex-col gap-3 group-hover:flex'>
          <LuIceCream2 className="group-hover:text-blue-400 w-[32px] h-[32px]"/>
          <h1 className="text-xl lg:text-2xl">Peach Combler</h1>
          <p className="lg:text-[18px]">Dairy/Free Frozen Dessert</p>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>  
          <div className='flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-2xl overflow-hidden px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] cursor-pointer'>
          <div className='absolute inset-0 bg-cover slideImage' style={{backgroundImage: `url(${vadilalGourmet})`}} />
          <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50' />
          <div className='relative hidden flex-col gap-3 group-hover:flex'>
          <GoContainer className="group-hover:text-blue-400 w-[32px] h-[32px]"/>
          <h1 className="text-xl lg:text-2xl">Gourmet</h1>
          <p className="lg:text-[18px]">Ice Cream Cookies N Cream</p>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
             <div className='flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-2xl overflow-hidden px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] cursor-pointer'>
             <div className='absolute inset-0 bg-cover slideImage' style={{backgroundImage: `url(${blackForest})`}} />
             <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50' />
             <div className='relative hidden flex-col gap-3 group-hover:flex'>
          <TbBrandCakephp className="group-hover:text-blue-400 w-[32px] h-[32px]"/>
          <h1 className="text-xl lg:text-2xl">Black Forest</h1>
          <p className="lg:text-[18px]">Ice Cream Cake</p>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide> 
            <div className='flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-2xl overflow-hidden px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] cursor-pointer'>
            <div className='absolute inset-0 bg-cover slideImage' style={{backgroundImage: `url(${bomberCandy })`}}/>
            <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50' />
             <div className='relative hidden flex-col gap-3 group-hover:flex'>
          <GiChocolateBar className="group-hover:text-blue-400 w-[32px] h-[32px]"/>
          <h1 className="text-xl lg:text-2xl">Bomber Candy</h1>
          <p className="lg:text-[18px]">Boom Boom Boomer Candy</p>
          </div>            

        </div>
        </SwiperSlide>

        <SwiperSlide>   
          <div className='flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-2xl overflow-hidden px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] cursor-pointer'>
          <div className='absolute inset-0 bg-cover slideImage' style={{backgroundImage: `url(${jumboCups})`}}/>
          <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50' />
             <div className='relative hidden flex-col gap-3 group-hover:flex'>
          <GiCupcake className="group-hover:text-blue-400 w-[32px] h-[32px]"/>
          <h1 className="text-xl lg:text-2xl">Jumbo</h1>
          <p className="lg:text-[18px]">Ice Cream Cups</p>
          </div>
        </div>
        </SwiperSlide>

     </Swiper>
    </div>
  )
}

export default Advertisemts