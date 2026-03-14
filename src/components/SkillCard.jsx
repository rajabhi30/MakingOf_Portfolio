import React from 'react'

const SkillCard = ({ logo, name }) => {
  return (
    <div className='border rounded-md w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 
    flex flex-col justify-center items-center gap-2 
    hover:bg-black hover:text-white transition-all duration-300 cursor-pointer'>

        <div className='text-2xl sm:text-3xl'>
           {logo}
        </div>

        <h4 className='font-semibold text-sm sm:text-base'>
            {name}
        </h4>

    </div>
  )
}

export default SkillCard