import React from 'react'
import Image1 from '../assets/Image1.png'

const Intro = () => {
  return (
    <div className='flex flex-col md:flex-row w-full items-center justify-center px-6 md:px-16 pt-10 md:pt-0'>

      {/* Left Section */}
      <div className='w-full md:w-1/2 text-center md:text-left'>

        <div className='space-y-2'>
          <h1 className='text-2xl sm:text-3xl md:text-5xl'>
            Hello I'm <span className='font-bold'>Abhishek.</span>
          </h1>

          <h1 className='text-2xl sm:text-3xl md:text-5xl'>
            <span className='font-bold'>Frontend</span> Developer
          </h1>

          <h1 className='text-2xl sm:text-3xl md:text-5xl'>
            Based in <span className='font-bold'>India.</span>
          </h1>
        </div>

        {/* Social Icons */}
        <div className='flex justify-center md:justify-start gap-4 mt-6'>

          <a href="https://github.com/rajabhi30" target='_blank' rel="noreferrer">
            <div className='w-9 h-9 flex justify-center items-center border hover:bg-black hover:text-white rounded-md'>
              <i className="ri-github-fill"></i>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/abhishek-kumar1226/" target='_blank' rel="noreferrer">
            <div className='w-9 h-9 flex justify-center items-center border hover:bg-black hover:text-white rounded-md'>
              <i className="ri-linkedin-box-fill"></i>
            </div>
          </a>

          <a href="mailto:rajabhishek8070@gmail.com">
            <div className='w-9 h-9 flex justify-center items-center border hover:bg-black hover:text-white rounded-md'>
              <i className="ri-mail-fill"></i>
            </div>
          </a>

          <a href="https://wa.me/8709291785" target='_blank' rel="noopener noreferrer">
            <div className='w-9 h-9 flex justify-center items-center border hover:bg-black hover:text-white rounded-md'>
              <i className="ri-whatsapp-fill"></i>
            </div>
          </a>

        </div>
      </div>

      {/* Right Section */}
      <div className='w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0'>
        <img 
          src={Image1} 
          alt="profile" 
          className='w-[80%] sm:w-[60%] md:w-[75%]' 
        />
      </div>

    </div>
  )
}

export default Intro