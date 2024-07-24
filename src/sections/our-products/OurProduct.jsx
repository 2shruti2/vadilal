import React, { useEffect } from 'react'

import peachCobbler from '../../assets/product-assets/peachCobbler.jpg'
import matka from '../../assets/product-assets/matka.jpg'
import jumboCups from '../../assets/product-assets/jumboCups.jpg'
import bomberCandy from '../../assets/product-assets/bomberCandy.png'
import vadilalCones from '../../assets/product-assets/vadilalCones.jpg'
import vadilalGourmet from '../../assets/product-assets/vadilalGourmet.jpg'


const OurProduct = () => {
  
 useEffect(() => {
  const track = document.getElementById("image-trackId");

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

    track.animate({
      transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1000, fill: "forwards" });
    

    for(const image of track.getElementsByClassName("image-track1")) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 1000, fill: "forwards" });
     
    }

  }
 }, [])

  return (
    <div className='section-x-padding'>
      <div className='h-screen w-screen slider-container overflow-x-hidden'>
      <section className='image-track' id='image-trackId' data-mouse-down-at="0" data-prev-percentage="0">
        <div className='h-[30vh] w-[40vw] lg:h-[50vh] lg:w-[20vw]  rounded-[20px]'>
        <img src={vadilalCones} alt='track2' className='image-track1 h-[50vh] w-[20vw]' draggable="false"/>
        </div>

        <div className='h-[30vh] w-[40vw] lg:h-[50vh] lg:w-[20vw] rounded-[20px]'>
        <img src={vadilalGourmet} alt='track5' className='image-track1 h-[50vh] w-[20vw]' draggable="false"/>
        </div>
 
        <div className='h-[30vh] w-[40vw] lg:h-[50vh] lg:w-[20vw]  rounded-[20px]'>
        <img src={peachCobbler} alt='track4' className='image-track1 h-[50vh] w-[20vw]' draggable="false"/>
        </div>

        <div className='h-[30vh] w-[40vw] lg:h-[50vh] lg:w-[20vw] rounded-[20px]'>
        <img src={matka} alt='track5' className='image-track1 h-[50vh] w-[20vw]' draggable="false"/>
        </div>
 
        <div className='h-[30vh] w-[40vw] lg:h-[50vh] lg:w-[20vw]  rounded-[20px]'>
        <img src={jumboCups} alt='track2' className='image-track1 h-[50vh] w-[20vw]' draggable="false"/>
        </div>

        <div className='h-[30vh] w-[40vw] lg:h-[50vh] lg:w-[20vw]  rounded-[20px]'>
        <img src={bomberCandy} alt='track5' className='image-track1 h-[50vh] w-[20vw]' draggable="false"/>
        </div>

      </section>
      </div>
    </div>
  )
}

export default OurProduct