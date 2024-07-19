import React, { useEffect } from 'react'
import track1 from '../../assets/product-assets/track1.jpg'
import track2 from '../../assets/product-assets/track2.jpeg'
import track4 from '../../assets/product-assets/track4.jpeg'
import track5 from '../../assets/product-assets/track5.jpeg'

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
    }, { duration: 900, fill: "forwards" });
    

    for(const image of track.getElementsByClassName("image-track1")) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 900, fill: "forwards" });
     
    }

  }
 }, [])

  return (
    <div className=''>
      <section className='image-track' id='image-trackId' data-mouse-down-at="0" data-prev-percentage="0">
        {/* <img src={track1} alt='track1' className='image-track1 h-[50vh] w-[40vh]' draggable="false"/> */}
        <img src={track2} alt='track2' className='image-track1 h-[50vh] w-[40vh]' draggable="false"/>
        <img src={track5} alt='track5' className='image-track1' draggable="false"/>
        <img src={track4} alt='track4' className='image-track1' draggable="false"/>
        <img src={track5} alt='track5' className='image-track1' draggable="false"/>
        <img src={track2} alt='track2' className='image-track1' draggable="false"/>
        <img src={track5} alt='track5' className='image-track1' draggable="false"/>
        {/* <img src={track1} alt='track1' className='image-track1 h-[50vh] w-[40vh]' draggable="false"/> */}
      </section>
    </div>
  )
}

export default OurProduct