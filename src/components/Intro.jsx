import React from 'react'
import Image1 from '../assets/Image1.png'
const Intro = () => {
  return (
    <div className='flex w-full'>

        <div className='h-116 w-[50%] py-5 px-14'>

           <div className='mt-25 space-y-1.5'>
            <h1 className='text-5xl'>Hello I'am <span className='font-bold'>Abhishek.</span></h1>
            <h1 className='text-5xl'><span className='font-bold'>Frontend</span> Developer</h1>
            <h1 className='text-5xl'>Based in <span className='font-bold'>India.</span></h1>
           </div>

             <div className='flex gap-5 relative top-25'>
                <a href="https://github.com/rajabhi30" target='_blank'>
                  <div className='w-10 h-10 flex justify-center items-center border hover:bg-black hover:text-white rounded-md'>
                    <i class="ri-github-fill"></i>
                 </div>
                </a>
                 <a href="https://www.linkedin.com/in/abhishek-kumar1226/" target='_blank'>
                  <div className='w-10 h-10 flex justify-center items-center border hover:bg-black hover:text-white rounded-md'>
                    <i class="ri-linkedin-box-fill"></i>
                 </div>
                 </a>
                <a href="mailto:rajabhishek8070@gmail.com">
                   <div className='w-10 h-10 flex justify-center items-center border  hover:bg-black hover:text-white rounded-md'>
                    <i class="ri-mail-fill"></i>
                 </div>
                </a>
                 <a href="https://wa.me/8709291785" target='_blank' rel="noopener noreferrer">
                  <div className='w-10 h-10 flex justify-center items-center border  hover:bg-black hover:text-white rounded-md'>
                   <i class="ri-whatsapp-fill"></i>
                 </div>
                 </a>
             </div>
    
         </div>

         
        <div className='h-116 w-[50%] overflow-hidden flex justify-center items-center'>
            <img src={Image1} alt="" className='w-[70%] ml-20'/>
        </div>

    </div>
  )
}

export default Intro