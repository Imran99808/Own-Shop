import React, { useState } from 'react'
import { loop } from '../../loop'
import { cateData } from './data'
import Move from '../../dragable/Move'

function Categories() {
  const [value,setValue]=useState(window.screen.width<1024);
  // console.log(window.screen.width)
  const dis=window.screen.width<1024;

  

  const settings={
          
   display:value,
   iShow:5.5,
   cb:()=>{
    console.log(window.screen.width<1024)
    setValue(window.screen.width<1024)
  },
  
  }
  
  return (

    <div className='categories '>
     <Move {...settings}  >   
      {

        loop(cateData,(d,i)=>{

          return(
           
            <div key={i} className="category p05 flex items-center gap-8">
          <i className={`text-lg-2 ${d.cateImg}`}></i>
            <span className='text-lg'>{cateData[i].cateName}</span>
            </div>
           
          )
        })
      }
      </Move>    
    </div>
  )
}

export default Categories

