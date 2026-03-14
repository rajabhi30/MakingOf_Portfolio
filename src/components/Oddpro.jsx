import React from 'react'

const Evenpro = ({ num, title, desc, link, img }) => {
  return (
    <div className='flex flex-col md:flex-row px-6 md:px-20 lg:px-40 py-8 w-full gap-8 items-center'>

      {/* Text Section */}
      <div className='w-full md:w-[60%]'>

        <h4 className='text-2xl md:text-3xl font-bold'>
          {String(num + 1).padStart(2, "0")}
        </h4>

        <h3 className='text-xl md:text-2xl font-bold mt-2'>
          {title}
        </h3>

        <p className='text-sm md:text-base mt-4 text-gray-600'>
          {desc}
        </p>

        <a href={link} target='_blank' rel="noopener noreferrer">
          <button className='w-9 h-9 flex justify-center items-center border hover:bg-black hover:text-white rounded-md mt-5 transition'>
            <i className="ri-arrow-right-up-box-fill"></i>
          </button>
        </a>

      </div>

      {/* Image Section */}
      <div className='w-full md:w-[40%] h-[200px] md:h-[250px] overflow-hidden rounded-xl'>
        <img
          src={img}
          alt="project"
          className='w-full h-full object-cover'
        />
      </div>

    </div>
  )
}

export default Evenpro