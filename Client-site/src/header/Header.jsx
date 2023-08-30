import React from 'react'

 import Logo from '../assets/logo.svg'
import './header.css'
 import Search from '../Components/Search'
import Nav from '../Components/Nav'
import SideBaer from '../Components/SideBaer'
import { useState } from 'react'

function Header() {
    const[bar,setBar]=useState(false);
console.log('emon')
    const handler=(e)=>{
        console.log('okk')
        e.target.getAttribute('value')==='on'&&setBar(true);
        e.target.getAttribute('value')==='off'&&setBar(false);
    }
  return (
    <header className='header bg-p-wite sticky'>
      <div className="container marg-auto head flex gap-6 items-center p-t-1 p-b-1">
        <div className="h-c-1 flex flex-1 gap-8 items-center">
            <span className='logo'>
                <a href="#">
                    <img src={Logo} alt="" />
                    </a></span>
            <div className="hiden w-full">      
                <Search/>
            </div>  
        </div>
        <div className="h-c-2 flex items-center gap-6">
           
            <a className='cart relative ' href="#">
            <i class="fa-solid fa-cart-shopping fa-lg"></i>
            <span className='absolute'></span>
            </a>
            
            <button className='btn profile ' value='on' onClick={handler}><i class="fa-regular fa-user fa-lg"></i></button>

            
        </div>
      </div>

     <div className="container  m:hide marg-auto">
         <Search/> 
         <br className='block md:hide' /> 
     </div>
     <hr className='bg-gray hiden' /> 

     <div className='container  marg-auto hiden'>
     <Nav/>
     </div>
    { bar&&<div className="bar-container  fixed"  value='off'  onClick={handler}>
        <SideBaer/>
     </div>}
    </header>
  )
}

export default Header
