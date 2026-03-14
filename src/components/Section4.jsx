import React from 'react'
import about from '../assets/About.png'

const Section4 = () => {
  return (
    <div className='bg-white w-full flex flex-col md:flex-row items-center py-12 px-6 md:px-14' id="me">

      {/* Image */}
      <div className='w-full md:w-[45%] flex justify-center mb-10 md:mb-0'>
        <img 
          src={about} 
          alt="About" 
          className='w-[80%] md:w-[90%] max-w-md'
        />
      </div>

      {/* Text */}
      <div className='w-full md:w-[55%] flex flex-col justify-center'>

        <div className='text-3xl md:text-4xl'>
          About <span className='font-bold'>Me</span>
        </div>

        <p className='text-sm md:text-base mt-6 text-gray-500 leading-relaxed'>
          I am a passionate software developer with a strong foundation in data 
          structures, algorithms, and modern web development. I have completed 
          hands-on training in DSA from CipherSchools, MERN stack development 
          from Cantilever Labs, and frontend development from Gokboru. I enjoy 
          building clean, responsive, and user-friendly web applications using 
          React, JavaScript, and Tailwind CSS.

          <br/><br/>

          I actively solve coding problems to strengthen my logical thinking and 
          problem-solving skills. I am always eager to learn new technologies, 
          improve my communication skills, and grow as a developer by working on 
          real-world projects and collaborative environments.
        </p>

      </div>

    </div>
  )
}

export default Section4