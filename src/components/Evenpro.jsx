import React from 'react'

const Evenpro = ({ num, title, desc, link, img }) => {
  return (
    <div className='glass-panel rounded-3xl flex flex-col md:flex-row p-6 md:p-8 w-full gap-8 items-center group relative overflow-hidden'>

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/0 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

      {/* Text Section */}
      <div className='w-full md:w-[50%] z-10 pl-4 md:pl-10'>

        <h4 className='text-4xl md:text-5xl font-light text-zinc-600 mb-4'>
          {String(num + 1).padStart(2, "0")}
        </h4>

        <h3 className='text-3xl md:text-4xl font-bold text-white tracking-tight mb-6'>
          {title}
        </h3>

        <p className='text-base md:text-lg text-zinc-400 leading-relaxed mb-8'>
          {desc}
        </p>

        <a href={link} target='_blank' rel="noopener noreferrer">
          <button className='w-12 h-12 flex justify-center items-center rounded-full glass-panel text-white hover:text-red-400 hover:border-red-400/50 transition-all duration-300'>
            <i className="ri-arrow-right-up-line text-xl"></i>
          </button>
        </a>

      </div>

      {/* Image Section */}
      <div className='w-full md:w-[50%] h-[250px] md:h-[350px] overflow-hidden rounded-2xl z-10 shadow-2xl'>
        <img
          src={img}
          alt="project"
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
        />
      </div>

    </div>
  )
}

export default Evenpro