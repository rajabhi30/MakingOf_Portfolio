import React from 'react'

const Experience = ({ img, title, date, details }) => {
  return (
    <div className='border border-white rounded-md hover:bg-gray-600 transition-all duration-300'>

      <div className='flex flex-col sm:flex-row sm:justify-between px-5 py-3 gap-2 sm:items-center'>

        {/* Left */}
        <div className='flex gap-3 items-center'>
          <img src={img} alt="" className='w-5 h-5 rounded-full' />
          <div className='text-sm md:text-base font-bold text-white'>
            {title}
          </div>
        </div>

        {/* Date */}
        <div className='text-xs sm:text-sm font-bold text-white'>
          {date}
        </div>

      </div>

      {/* Details */}
      <p className='text-white px-5 pb-4 text-sm leading-relaxed'>
        {details}
      </p>

    </div>
  )
}

export default Experience