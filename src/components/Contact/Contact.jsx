import React from 'react'

export default function Contact() {

function handleSubmit(event){
  event.preventDefault()
}

  return (
    <>
      <div className='h-screen'>
        <div className='container m-auto'>
          <div className='flex  justify-center pt-40 mb-20'>
            <div >
              <h1 className='text-[#2c3e50] text-4xl font-bold'>CONTACT SECTION</h1>
              <div className='flex items-center gap-4 justify-center pt-2'>
                <div className='w-24 h-1 bg-[#2c3e50]'></div>
                <i className="fa-solid fa-star " ></i>
                <div className='w-24 h-1 bg-[#2c3e50]'></div>
              </div>
            </div>
          </div>




        </div>
          <form className="md:w-1/2 px-8 m-auto" onSubmit={(e)=>handleSubmit(e)}>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer" placeholder=" " required />
              <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1abc9c] peer-focus:dark:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userName</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="number" name="floating_userAge" id="floating_userAge" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer" placeholder=" " required />
              <label htmlFor="floating_userAge" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1abc9c] peer-focus:dark:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userAge</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer" placeholder=" " required />
              <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1abc9c] peer-focus:dark:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userEmail</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer" placeholder=" " required />
              <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1abc9c] peer-focus:dark:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userPassword</label>
            </div>
            <button type="submit" className="text-white bg-[#1abc9c] hover:bg-[#1abc9c] focus:ring-4 focus:outline-none focus:ring-[#1abc9c] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Send Message</button>
          </form>
      </div>

    </>
  )
}
