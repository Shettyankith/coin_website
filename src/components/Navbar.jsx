import React, { useState } from "react";


function Navbar() {
  const [menu,setmenu]=useState(false);
  const navElements=["crypto taxes","free tools","resource center"];
  return (
  <header className="flex  justify-between px-6 items-center p-2 bg-white">
    <img src="/logo.svg" alt="Logo" className="h-5 w-22 md:h-14 md:w-26 mix-blend-multiply"/>
    <i className={`absolute top-4 right-6 lg:hidden fa-solid ${menu?"fa-ellipsis-vertical":"fa-ellipsis"} transition-all duration-500 text-3xl`} onClick={()=>{setmenu(!menu)}}></i>
    <ul className={` lg:top-0 absolute right-0 w-full justify-center items-center  lg:w-fit text-center lg:static lg:flex my-4 top-10 ${menu?"visible":"hidden"} transition-all duration-500`}>
      {navElements.map((item,index)=>{
        return  <li className="my-4 lg:my-0 capitalize lg:m-4 text-center font-medium" key={index}>{item}</li>
      })}
      <button className="my-4 lg:my-0 lg:m-4 bg-blue-600 justify-self-center text-white px-6 py-2 rounded-lg box-shadow-2xl hover:cursor-pointer hover:bg-blue-700 block lg:inline">Get Started</button>
      </ul>
  </header>
  )
}

export default Navbar;
