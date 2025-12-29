import React from 'react'

const SkillCard = (props) => {
  return (
    <div className='border rounded-md w-30 h-30 flex flex-col justify-center items-center gap-1 hover:bg-black hover:text-white'>

        <div className='text-3xl'>
           {props.logo}
        </div>

        <div>
            <h4 className='font-semibold mt-2'>
                {props.name}
            </h4>
        </div>

    </div>
  )
}

export default SkillCard