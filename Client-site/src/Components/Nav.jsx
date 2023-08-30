import React from 'react'

function Nav() {
    return (
       
            <div className="nav flex   items-center gap- ">
       
            <ul className='n-2  flex items-center gap-6  '>

            {/* <li className='p05 c p-l-r-s'>
                     <div href="#" className='flex  items-center gap-2'> 
                     <i class="fa-solid fa-note-sticky"></i>
                        <p className='font-semibold'>Catgories</p>
                     </div> 
                </li> */}
                <li className=' p-t-1 p-b-1 p-l-r-s'>
                    <a href="#"  className='flex items-center gap-2'>
                       <i class="fa-solid fa-house "></i>
                        <p className='font-semibold'>Home</p>

                    </a>
                </li>
                <li className=' p-t-1 p-b-1 p-l-r-s'>
                    <a href="#"  className='flex items-center gap-2'>
                    <i class="fa-solid fa-shop"></i>
                    <p className='font-semibold'>Shops</p>
                    </a>
                </li>
                <li className=' p-t-1 p-b-1 p-l-r-s'>
                     <a href="#" className='flex items-center gap-2'> 
                     <i class="fa-solid fa-truck"></i>
                        <p className='font-semibold'>Delivery Address</p>
                     </a> 
                </li>
            </ul>

            <div  className='n-1 f1 items-center gap-2 bg-grey2  p05 p-l-r-s'> 
      
           <p className='font-semibold  f1'>
           <i class="fa-solid  fa-note-sticky p-l-r"></i>
            Catgories
          
           </p>
           <i class="fa  fa-chevron-down p-l-r-s" aria-hidden="true"></i>
        </div> 
            </div>
       
    )
}

export default Nav
