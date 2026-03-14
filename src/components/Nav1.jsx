import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

const Nav1 = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='py-5 px-6 md:px-14 flex justify-between items-center'>

      {/* Logo */}
      <div>
        <img className='w-12 md:w-15' src={Logo} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex gap-10 font-semibold text-base'>
        <a href="#me" className='cursor-pointer'>About Me</a>
        <a href="#skill" className='cursor-pointer'>Skills</a>
        <a href="#project" className='cursor-pointer'>Project</a>
        <Link to="/Contact">Contact</Link>
      </div>

      {/* Resume Button */}
      <div className='hidden md:block'>
        <a href="/Abhishek(cv).pdf" download>
          <button className='text-base font-bold bg-black px-4 py-2 rounded hover:bg-gray-700 text-white'>
            Resume <span className='ml-1'><i className="ri-folder-download-line"></i></span>
          </button>
        </a>
      </div>

      {/* Hamburger */}
      <div className='md:hidden text-2xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
        <i className="ri-menu-line"></i>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 md:hidden font-semibold' >
          <a href="#me">About Me</a>
          <a href="#skill">Skills</a>
          <a href="#project">Project</a>
          <Link to="/Contact">Contact</Link>

          <a href="/Abhishek(cv).pdf" download>
            <button className='font-bold bg-black px-4 py-2 rounded'>
              Resume
            </button>
          </a>
        </div>
      )}

    </div>
  )
}

export default Nav1