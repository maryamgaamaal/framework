import React from 'react'
import img from '../../assets/avataaars.svg'


export default function Home() {
    return (
        <>
            <div className='bg-[#1abc9c] text-white h-screen flex items-center justify-center '>
                <div className='container flex items-center justify-center flex-col'>
                    <div className=' md:w-1/5 '>

                        <img className='w-full' src={img}></img>
                    </div>
                    <h1 className='text-4xl font-bold py-4'>START FRAMEWORK</h1>
                   <div className='flex items-center gap-4 pb-4'>
                    <div className='w-24 h-1 bg-white'></div>
                   <i className="fa-solid fa-star " ></i>
                   <div className='w-24 h-1 bg-white'></div>
                   </div>
                   <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </>
    )
}
