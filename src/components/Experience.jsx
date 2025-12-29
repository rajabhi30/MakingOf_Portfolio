import React from 'react'

const Experience = (props) => {
  return (
    <div className='border border-white rounded-md hover:bg-gray-600'>
         <div className='flex justify-between px-5 py-3 items-center'>
        <div className='flex gap-3 items-center'>
            <div>
                <img src={props.img} alt="" className='w-5 h-5 rounded-full overflow-hidden' />
            </div>
            <div className='text-sm font-bold text-white'>{props.title}</div>
        </div>

        <div className='text-sm font-bold text-white'>
            {props.date}
        </div>
    </div>
    <p className='text-white px-5 text-sm mb-3'>{props.details}</p>
    </div>
   
  )
}

export default Experience