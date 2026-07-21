import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const Nav1 = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='flex justify-center w-full fixed top-6 z-50 px-4'>
      <div className='flex items-center justify-center bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 w-full max-w-5xl shadow-2xl relative'>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8 font-medium text-sm text-zinc-400'>
          <a href="#me" className='hover:text-white transition-colors duration-300'>About Me</a>
          <a href="#skill" className='hover:text-white transition-colors duration-300'>Skills</a>
          <a href="#project" className='hover:text-white transition-colors duration-300'>Projects</a>
          <Link to="/Contact" className='hover:text-white transition-colors duration-300'>Contact</Link>
        </div>

        {/* Resume Button */}
        <div className='hidden md:block absolute right-3'>
          <a href="/Abhishek(cv).pdf" download>
            <button className='text-sm font-semibold tracking-wide bg-white text-black px-6 py-2.5 rounded-full hover:bg-zinc-200 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]'>
              Resume <i className="ri-download-line ml-1"></i>
            </button>
          </a>
        </div>

      {/* Hamburger */}
      <div className='md:hidden w-full flex justify-end text-2xl cursor-pointer text-white' onClick={() => setMenuOpen(!menuOpen)}>
        <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
      </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-24 left-4 right-4 bg-black/90 backdrop-blur-xl text-white flex flex-col items-center gap-6 py-8 md:hidden font-medium border border-white/10 rounded-2xl shadow-2xl z-40' >
          <a href="#me" className='hover:text-zinc-400' onClick={() => setMenuOpen(false)}>About Me</a>
          <a href="#skill" className='hover:text-zinc-400' onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#project" className='hover:text-zinc-400' onClick={() => setMenuOpen(false)}>Projects</a>
          <Link to="/Contact" className='hover:text-zinc-400' onClick={() => setMenuOpen(false)}>Contact</Link>

          <a href="/Abhishek(cv).pdf" download>
            <button className='text-sm font-semibold tracking-wide bg-white text-black px-8 py-3 rounded-full'>
              Resume
            </button>
          </a>
        </div>
      )}

    </div>
  )
}

export default Nav1