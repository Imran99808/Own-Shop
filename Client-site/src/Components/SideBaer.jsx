import React from 'react'

function SideBaer() {
  return (
    <div className='bar  absolute round-md bg-p-wite'>
      <ul className='p-l-r'>
        <li className=' p-t-1 p-b-1  '>
            <a href="#" className='f-medium'>Home</a>
        </li>
        <li className='p-b-1'>
            <a href="#" className='f-medium'>Shops</a>
        </li>
        <li className='p-b-1'>
            <a href="#" className='f-medium'>Delivery Address</a>
        </li>
        <li className='p-b-1'>
            <a href="#" className='f-medium'>My Order</a>
        </li>
        <li className='p-b-1'>
            <a href="#" className='f-medium'>Log in</a>
        </li>
      </ul>
    </div>
  )
}

export default SideBaer
