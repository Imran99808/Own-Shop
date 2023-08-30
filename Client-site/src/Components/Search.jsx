import React from 'react'

function Search() {
  return (
    <div className='search '>
      <div className="ib flex round-md  w-full overfollow ">
       <div className="inp w-full ">
        <input className="block border-none  p1 p-l w-full  outline-none  bg-black1 " placeholder="Search in Evaly" autocomplete="off"/>
       </div> 

      <button className='btn p-l-r bg-black text-lg  text-white f-medium'>Search</button>
      </div>

    </div>
  )
}

export default Search
