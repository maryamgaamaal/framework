import React, { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import { Navbar } from "flowbite-react";

export default function Mynavbar() {


  const [padding, setPadding] = useState('30px')
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setPadding('10px')
    } else {
      setPadding('30px')

    }

  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])














  return (
    <>
      {/* <nav className=' p-9 bg-[#2c3e50] fixed top-0 right-0 left-0 z-40' >
    
<div className='container  m-auto flex justify-between text-white '>
<h1 className='text-3xl font-bold'>START FRAMEWORK</h1>
<ul className='flex justify-between gap-7 font-bold pt-2'>
    <li>
        <NavLink className={({isActive})=> isActive ? "bg-[#1abc9c] p-2 rounded-md" : ""} to={"/about"}>ABOUT</NavLink>
    </li>
    <li>
    <NavLink className={({isActive})=> isActive ? "bg-[#1abc9c] p-2 rounded-md" : ""}  to={"/portfolio"}>PORTFOLIO</NavLink>
    </li>
    <li>
    <NavLink className={({isActive})=> isActive ? "bg-[#1abc9c] p-2 rounded-md" : ""}  to={"/contact"}>CONTACT</NavLink>
    </li>
</ul>
</div>


    </nav> */}






      {/* <nav className="bg-[#2c3e50]  text-white fixed w-full z-40 transition-all" style={{padding:padding}} onScroll={handleScroll} >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <NavLink className='text-3xl font-bold self-center whitespace-nowrap ' to={"/"}>START FRAMEWORK</NavLink>
          <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            <ul className="flex flex-col  p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  font-bold">
              <li>
                <NavLink className={({ isActive }) => isActive ? "bg-[#1abc9c] p-2 rounded-md" : ""} to={"/about"}  aria-current="page">ABOUT</NavLink>
              </li>
              
              
              <li>
                <NavLink className={({isActive})=> isActive ? "bg-[#1abc9c] p-2 rounded-md" : ""}  to={"/portfolio"}>PORTFOLIO</NavLink>
              </li>
              <li>
              <NavLink className={({isActive})=> isActive ? "bg-[#1abc9c] p-2 rounded-md" : ""}  to={"/contact"}>CONTACT</NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav> */}



      <Navbar className="bg-[#2c3e50]  text-white fixed w-full z-40 transition-all" style={{ padding: padding }} onScroll={handleScroll}  >

        <NavLink className='text-3xl font-bold self-center whitespace-nowrap ' to={"/"}>START FRAMEWORK</NavLink>


        <Navbar.Toggle />
        <Navbar.Collapse>
          <ul className='flex items-center gap-5 font-bold'>
            <li>
            <NavLink className={({ isActive }) => isActive ? "bg-[#1abc9c] p-2 rounded-md" : ""} to={"/about"}  aria-current="page">ABOUT</NavLink>
            </li>
            <li>
            <NavLink className={({isActive})=> isActive ? "bg-[#1abc9c] p-2 rounded-md" : ""}  to={"/portfolio"}>PORTFOLIO</NavLink>
            </li>
            <li>
            <NavLink className={({isActive})=> isActive ? "bg-[#1abc9c] p-2 rounded-md" : ""}  to={"/contact"}>CONTACT</NavLink>
            </li>
          </ul>
        
         
          
          
          
        </Navbar.Collapse>
      </Navbar>



















    </>
  )
}
