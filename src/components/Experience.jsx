import React from 'react'

const Experience = ({ img, title, date, details }) => {
  return (
    <div className='glass-panel rounded-2xl w-full'>

      <div className='flex flex-col sm:flex-row sm:justify-between px-8 pt-6 pb-2 gap-4 sm:items-start'>

        {/* Left */}
        <div className='flex gap-4 items-center'>
          <div className='bg-white/10 p-2 rounded-xl'>
            <img src={img} alt="" className='w-8 h-8 rounded-full' />
          </div>
          <div className='text-lg md:text-xl font-bold text-white tracking-tight'>
            {title}
          </div>
        </div>

        {/* Date */}
        <div className='text-sm font-semibold text-red-400 bg-red-500/10 px-4 py-1.5 rounded-full whitespace-nowrap mt-2 sm:mt-0'>
          {date}
        </div>

      </div>

      {/* Details */}
      <p className='text-zinc-400 px-8 pb-8 pt-2 text-base leading-relaxed max-w-3xl'>
        {details}
      </p>

    </div>
  )
}

export default Experience