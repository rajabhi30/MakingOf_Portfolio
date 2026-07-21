import React from 'react'
import Image1 from '../assets/ProfileNew.png'

const Intro = () => {
  return (
    <div className='relative flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center justify-between px-6 md:px-16 pt-32 pb-24 min-h-screen'>
      
      {/* Background Glowing Orb */}
      <div className='glow-orb-red top-1/4 -left-20 md:left-10'></div>
      <div className='glow-orb-white bottom-10 right-10 opacity-50'></div>

      {/* Left Section */}
      <div className='w-full md:w-1/2 text-left z-10'>

        <div className='section-tag'>
          Full-Stack Developer
        </div>

        <div className='space-y-4'>
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white'>
            Hello I'm <span className='font-bold'>Abhishek.</span>
          </h1>

          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter'>
            <span className='text-gradient-red'>MERN</span> <span className='font-light text-white'>Developer</span>
          </h1>

          <h1 className='text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter text-zinc-400'>
            Based in <span className='font-semibold text-white'>India.</span>
          </h1>
        </div>

        {/* Social Icons */}
        <div className='flex justify-start gap-4 mt-12'>

          <a href="https://github.com/rajabhi30" target='_blank' rel="noreferrer">
            <div className='w-12 h-12 flex justify-center items-center rounded-full glass-panel text-white hover:text-red-400'>
              <i className="ri-github-fill text-xl"></i>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/abhishek-kumar1226/" target='_blank' rel="noreferrer">
            <div className='w-12 h-12 flex justify-center items-center rounded-full glass-panel text-white hover:text-red-400'>
              <i className="ri-linkedin-box-fill text-xl"></i>
            </div>
          </a>

          <a href="mailto:rajabhishek8070@gmail.com">
            <div className='w-12 h-12 flex justify-center items-center rounded-full glass-panel text-white hover:text-red-400'>
              <i className="ri-mail-fill text-xl"></i>
            </div>
          </a>

          <a href="https://wa.me/8709291785" target='_blank' rel="noopener noreferrer">
            <div className='w-12 h-12 flex justify-center items-center rounded-full glass-panel text-white hover:text-red-400'>
              <i className="ri-whatsapp-fill text-xl"></i>
            </div>
          </a>

        </div>
      </div>

      {/* Right Section */}
      <div className='w-full md:w-1/2 flex justify-center items-center mt-16 md:mt-0 z-10'>
        <div className='relative flex justify-center w-full'>
          <img 
            src={Image1} 
            alt="profile" 
            className='w-[75%] md:w-[85%] max-w-md object-contain drop-shadow-[0_20px_50px_rgba(220,38,38,0.3)]' 
          />
        </div>
      </div>

    </div>
  )
}

export default Intro