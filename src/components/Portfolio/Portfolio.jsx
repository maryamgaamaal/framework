import React, { useState } from 'react'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'

export default function Portfolio() {


const [data , setData]=useState({term:""})

function handelClick(term){

setData({term})

}

function closeClick(){

setData({term:""})

}
 function stopBuppling(e){

e.stopPropagation()
 }






  return (
    <>
    
    {data.term &&  <div  onClick={closeClick}   className='fixed top-0 w-full h-[100vh] z-50   bottom-0 left-0 right-0  bg-[rgba(26,188,156,0.5)] flex justify-center items-center'>
        <img  onClick={stopBuppling}  className='w-1/2' src={data.term}></img>
      </div>} 
    <div >
     
      <div className='flex  justify-center pt-40 mb-5'>

        <div >

          <h1 className='text-[#2c3e50] text-4xl font-bold'>PORTFOLIO COMPONENT</h1>
          <div className='flex items-center gap-4 justify-center pt-2'>
            <div className='w-24 h-1 bg-[#2c3e50]'></div>
            <i className="fa-solid fa-star " ></i>
            <div className='w-24 h-1 bg-[#2c3e50]'></div>
          </div>
        </div>
      </div>
      <div className='container m-auto flex flex-wrap mb-5'>
        <div className='w-full md:w-4/12'>
          <div className='m-4 relative ' onClick={()=>{handelClick(img1)}}>
            <img src={img1} className='w-full rounded-md'></img>
            <div className='absolute top-0 bottom-0 left-0 right-0 rounded-md cursor-pointer bg-[rgba(26,188,156,0.9)] flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500' ><i className="fa-solid fa-plus text-8xl text-white"></i></div>
          </div>
        </div>
        <div className='w-full md:w-4/12'>
          <div className='m-4 relative'  onClick={()=>{handelClick(img2)}} >
            <img src={img2} className='w-full rounded-md'></img>
            <div className='absolute top-0 bottom-0 left-0 right-0 rounded-md cursor-pointer bg-[rgba(26,188,156,0.9)] flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500' ><i className="fa-solid fa-plus text-8xl text-white"></i></div>
          </div>
        </div>
        <div className='w-full md:w-4/12'>
          <div className='m-4 relative' onClick={()=>{handelClick(img3)}} >
            <img src={img3} className='w-full rounded-md'></img>
            <div className='absolute top-0 bottom-0 left-0 right-0 rounded-md cursor-pointer bg-[rgba(26,188,156,0.9)] flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500' ><i className="fa-solid fa-plus text-8xl text-white"></i></div>
          </div>
        </div>
        <div className='w-full md:w-4/12'>
          <div className='m-4 relative' onClick={()=>{handelClick(img1)}} >
            <img src={img1} className='w-full rounded-md'></img>
            <div className='absolute top-0 bottom-0 left-0 right-0 rounded-md cursor-pointer bg-[rgba(26,188,156,0.9)] flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500' ><i className="fa-solid fa-plus text-8xl text-white"></i></div>
          </div>
        </div>
        <div className='w-full md:w-4/12'>
          <div className='m-4 relative' onClick={()=>{handelClick(img2)}} >
            <img src={img2} className='w-full rounded-md'></img>
            <div className='absolute top-0 bottom-0 left-0 right-0 rounded-md cursor-pointer bg-[rgba(26,188,156,0.9)] flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500' ><i className="fa-solid fa-plus text-8xl text-white"></i></div>
          </div>
        </div >
        <div className='w-full md:w-4/12'>
          <div className='m-4 relative' onClick={()=>{handelClick(img3)}} >
            <img src={img3} className='w-full rounded-md'></img>
            <div className='absolute top-0 bottom-0 left-0 right-0 rounded-md cursor-pointer bg-[rgba(26,188,156,0.9)] flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500' ><i className="fa-solid fa-plus text-8xl text-white"></i></div>
          </div>
        </div>

      </div>
    </div></>
  )
}
