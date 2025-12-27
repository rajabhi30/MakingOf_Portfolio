import React from 'react'
import Logo from '../assets/Logo.png'


const Nav1 = () => {
  return (
    <div className='py-5 px-14 flex justify-between items-center'>

      <div>
        <img className='w-15' src={Logo} alt="Logo" />
      </div>

      <div className='flex gap-10 font-semibold text-base'>
        <h4>About Me</h4>
        <h4>Skills</h4>
        <h4>Project</h4>
        <h4>Contact Me</h4>
      </div>

      <div>
        <button className='text-base font-bold text-white bg-black px-4 py-2 rounded'>Resume <span className='ml-1'><i class="ri-folder-download-line"></i></span></button>
      </div>

    </div>
  )
}

export default Nav1
