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
          I am a full-stack software developer with a strong foundation in data structures
          and algorithms, currently focused on building efficient and scalable web applications.
          I have hands-on experience working with the MERN stack (MongoDB, Express.js, React,
          Node.js), enabling me to develop complete end-to-end solutions.

          <br /><br />

          On the frontend, I specialize in creating responsive and intuitive user interfaces
          using React, JavaScript, and Tailwind CSS. On the backend, I design and develop
          RESTful APIs, manage databases, and implement robust server-side logic to ensure
          performance and reliability.

          <br /><br />

          I consistently strengthen my problem-solving abilities through regular practice of
          DSA and actively seek opportunities to apply my skills in real-world projects and
          collaborative environments. I am committed to continuous learning and professional growth.
        </p>

      </div>

    </div>
  )
}

export default Section4