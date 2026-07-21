import React from 'react'
import about from '../assets/AboutNew.png'

const Section4 = () => {
  return (
    <div className='relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-32' id="me">

      {/* Image */}
      <div className='w-full md:w-[45%] flex justify-center mb-16 md:mb-0 relative z-10'>
        <div className='glow-orb-white opacity-20 absolute'></div>
        <img src={about} alt="about" className='w-[80%] md:w-[90%] drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)] relative z-10' />
      </div>

      {/* Content */}
      <div className='w-full md:w-[50%] flex flex-col items-center md:items-start text-center md:text-left z-10'>
        <div className='section-tag'>About Me</div>
        
        <h2 className='text-4xl md:text-6xl font-light tracking-tighter text-white mb-6'>
          Who is <span className='font-bold text-gradient-red'>Abhishek?</span>
        </h2>
        
        <p className='text-zinc-400 font-medium text-base md:text-lg leading-relaxed max-w-2xl'>
          I am a full-stack software developer with a strong foundation in data structures and algorithms, currently focused on building efficient and scalable web applications. I have hands-on experience working with the MERN stack (MongoDB, Express.js, React, Node.js), enabling me to develop complete end-to-end solutions.
          <br /><br />
          On the frontend, I specialize in creating responsive and intuitive user interfaces using React, JavaScript, and Tailwind CSS. On the backend, I design and develop RESTful APIs, manage databases, and implement robust server-side logic to ensure performance and reliability.
          <br /><br />
          I consistently strengthen my problem-solving abilities through regular practice of DSA and actively seek opportunities to apply my skills in real-world projects and collaborative environments. I am committed to continuous learning and professional growth.
        </p>
      </div>

    </div>
  )
}

export default Section4