import React from 'react'
import './Hero.css'
import b1 from '/b.jpg'
import Categories from './Categories'
import Move from '../../dragable/Move'


function Hero() {
   
        const settings={
          
              display:true,
             dots:1,
            iShow:1,
                 stricky:true,
               circle:true,
               media:true
           //  prevArrow:<PrevArrow/>,
           //  NextArrow:<NextArrow/>
           
           
     
        }
  return (
    <section className='hero flex gap-'>
        <div className="b-container   ">

            {/* <Move {...settings} >    */}
            <li className="banner ">
              
            <img className='w-full' loading='lazy'   src={b1} alt="" />  
           </li>
           <li className="banner ">
           <img className='w-full'   src={b1} alt="" />   
           </li>
           <li className="banner ">
            <img className='w-full'   src={b1} alt="" /> 
           </li> 



            {/* </Move>        */}
        </div>
          <div className="s-tags f1">
           <Categories />
         </div> 
    
    </section>
  )
}

export default Hero
