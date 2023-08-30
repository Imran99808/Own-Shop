import React from 'react'
import './Hero.css'
import b1 from '/b.jpg'
import Move from '../../dragable/Move'

function Hero() {
    
        const settings={
          
            display:true,
            // dots:1,
            iShow:1,
              // circle:true,
           //  prevArrow:<PrevArrow/>,
           //  NextArrow:<NextArrow/>
           
           
     
        }
  return (
    <section className='hero flex gap-'>
        <div className="b-container c  ">

            <Move {...settings} >   
            <li className="banner ">
           <img className='w-full' src={b1} alt="" /> 
           </li>
           <li className="banner ">
           <img className='w-full' src={b1} alt="" /> 
           </li>
           <li className="banner ">
           <img className='w-full' src={b1} alt="" /> 
           </li> 
           
           {/* </li> */}

            </Move>       
        </div>
          <div className="s-tags c f1">
            page tag
         </div> 
    
    </section>
  )
}

export default Hero
