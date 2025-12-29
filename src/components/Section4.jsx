import React from 'react'
import about from '../assets/About.png'

const Section4 = () => {
  return (
    <div className='bg-white h-screen flex'>

      <div className='h-full w-[45%] flex justify-center items-center mt-15'>
        <img src={about} alt="" className='h-[90%]'/>
      </div>

      <div className= 'h-full w-[55%] flex justify-center flex-col px-14 py-5'>
        <div className='text-4xl'>About <span className='font-bold'>Me</span></div>
          <p className='text-sm mt-7 text-gray-500'>I am a passionate software developer with a strong foundation in data structures, algorithms, and modern web development. I have completed hands-on training in DSA from CipherSchools, MERN stack development from Cantilever Labs, and frontend development from Gokboru. I enjoy building clean, responsive, and user-friendly web applications using React, JavaScript, and Tailwind CSS. I actively solve coding problems to strengthen my logical thinking and problem-solving skills. I am always eager to learn new technologies, improve my communication skills, and grow as a developer by working on real-world projects and collaborative environments.</p>
      </div>

    </div>
  )
}

export default Section4