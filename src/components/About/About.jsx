import React from 'react'

export default function About() {
    return (
        <>
            <div className='bg-[#1abc9c] text-white h-screen flex items-center justify-center'>
                <div className='container flex items-center justify-center flex-col'>
                    <h1 className='text-4xl font-bold py-4'>ABOUT COMPONENT</h1>
                    <div className='flex items-center gap-4 pb-4'>
                        <div className='w-24 h-1 bg-white'></div>
                        <i className="fa-solid fa-star " ></i>
                        <div className='w-24 h-1 bg-white'></div>
                    </div>
                    <div className='flex flex-wrap md:w-10/12 mx-10'>
                    <div className='md:w-1/2 w-full pb-5'>
                        <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <p>
                        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    </div>
                </div>
            </div>


        </>
    )
}
