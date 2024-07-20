import React, { useEffect } from 'react'
import blackcurrant from '../../assets/product-assets/blackcurrant.jpg'
import mango from '../../assets/product-assets/mango.jpg'
import vanilla from '../../assets/product-assets/vanilla.jpg'
import chocolate from '../../assets/product-assets/chocolate.jpg'
import strawberry from '../../assets/product-assets/strawberry.jpg'
import kesarPista from '../../assets/product-assets/kesarPista.jpg'

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

    // Math.min(nextPercentage, 0);

    // Math.max(nextPercentage, -100);
    
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
        <div className='h-[50vh] w-[20vw]  rounded-[20px] overflow-hidden'>
        <img src={blackcurrant} alt='track2' className='image-track1 h-[50vh] w-[20vw]' draggable="false"/>
        </div>

        <div className='h-[50vh] w-[20vw] rounded-[20px] overflow-hidden'>
        <img src={mango} alt='track5' className='image-track1 h-[50vh] w-[20vw] ' draggable="false"/>
        </div>
 
        <div className='h-[50vh] w-[20vw]  rounded-[20px] overflow-hidden'>
        <img src={vanilla} alt='track4' className='image-track1 h-[50vh] w-[20vw] ' draggable="false"/>
        </div>

        <div className='h-[50vh] w-[20vw]  rounded-[20px] overflow-hidden'>
        <img src={chocolate} alt='track5' className='image-track1 h-[50vh] w-[20vw] ' draggable="false"/>
        </div>

        <div className='h-[50vh] w-[20vw]  rounded-[20px] overflow-hidden'>
        <img src={kesarPista} alt='track2' className='image-track1 h-[50vh] w-[20vw]' draggable="false"/>
        </div>

        <div className='h-[50vh] w-[20vw]  rounded-[20px] overflow-hidden'>
        <img src={strawberry} alt='track5' className='image-track1 h-[50vh] w-[20vw]' draggable="false"/>
        </div>

      </section>
      </div>
    </div>
  )
}

export default OurProduct