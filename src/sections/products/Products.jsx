import React from 'react'
import bomberCandy from '../../assets/product-assets/bomberCandy.png'
import vadilalCones from '../../assets/product-assets/vadilalCones.jpg'
import vadilalGourmet from '../../assets/product-assets/vadilalGourmet.jpg'
import blackForest from '../../assets/product-assets/blackForest.jpg'

const Products = () => {
  return (
    <div className='productContainer h-full w-full'>
    <section className="hero">
      <h1>Vadilal</h1>
    </section>

    <section className='info'>
     <div className="header-rows">
      <div className="header-row">
        <h1>Motion</h1>
      </div>
      <div className="header-row">
        <h1>Stills</h1>
      </div>
     </div>
    </section>

    <section className="header-info">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum laboriosam earum perspiciatis debitis tempore facere error rem temporibus quaerat?</p>

      <div className="header-images">
        <div className="img"><img src={blackForest} alt="" /></div>
        <div className="img"><img src={bomberCandy} alt="" /></div>
        <div className="img"><img src={vadilalCones} alt="" /></div>
        <div className="img"><img src={vadilalGourmet} alt="" /></div>
      </div>
    </section>

    <section className="whitespace"></section>

    <section className="pinned">
      <div className="revealer">
        <div className="revealer-1"></div>
        <div className="revealer-2"></div>
      </div>
    </section>

    <section className="white-content">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel. Aspernatur dolorem quasi ipsa totam.</h1>
    </section>
    </div>
  )
}

export default Products