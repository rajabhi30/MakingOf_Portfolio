import React from 'react'

const SkillCard = ({ logo, name }) => {
  return (
    <div className='glass-panel rounded-2xl w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 
    flex flex-col justify-center items-center gap-3 
    group cursor-pointer'>

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