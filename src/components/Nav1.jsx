import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import Contact from './Contact'


const Nav1 = () => {
  return (
    <div className='py-5 px-14 flex justify-between items-center'>

      <div>
        <img className='w-15' src={Logo} alt="Logo" />
      </div>

      <div className='flex gap-10 font-semibold text-base'>
        <a href="#me" className='cursor-pointer'>About Me</a>
        <a href="#skill" className='cursor-pointer'>Skills</a>
        <a href="#project" className='cursor-pointer'>Project</a>
        <Link to="/Contact">Contact</Link>
      </div>

      <div>
        <a href="/Abhishek(cv).pdf" download><button className='text-base font-bold text-white bg-black px-4 py-2 rounded hover:bg-gray-700'>Resume <span className='ml-1'><i class="ri-folder-download-line"></i></span></button></a>
      </div>

    </div>
  )
}

export default Nav1
