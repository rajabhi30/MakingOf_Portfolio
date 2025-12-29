import React from 'react'

const Evenpro = (props) => {
    return (
        <div className='flex px-40 py-5 w-full h-full overflow-hidden mt-5'>
            <div className='w-[60%] h-full px-10'>
                <h4 className='text-3xl font-bold'>{0}{props.num+1}</h4>
                <h3 className='text-2xl font-bold mt-1'>{props.title}</h3>
                <p className='text-sm mt-5'>{props.desc}</p>

                <button className='w-8 h-8 flex justify-center items-center border  hover:bg-white hover:text-black rounded-md mt-5'>
                  <i class="ri-arrow-right-up-box-fill"></i>
                 </button>

            </div>
            <div className='w-[40%] h-[250px] overflow-hidden rounded-xl'>
                <img
                    src={props.img}
                    alt=""
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
    )
}

export default Evenpro