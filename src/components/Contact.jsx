import React, { useState } from 'react'

const Contact = () => {
    const [name,setname]=useState(' ');
    const [mail,setmail]=useState(' ');
    const [messsage,setmessage]=useState(' ');

    const Submithandler=(e)=>{
        e.preventDefault();
        setname(' ')
        setmail(' ');
        setmessage(' ')
    }
    return (
        <div className='w-full h-screen flex flex-col items-center px-14 py-10 justify-between bg-black text-white'>

            <div className='flex flex-col items-center'>
                <h4 className='text-4xl font-bold'>Contact Me</h4>
            <h2 className='text-sm font-bold mt-2'>Feel free to reach out if you'd like to ask questions, or to say hi!</h2>
            </div>

            <div className='border-2 h-90 w-[50%] mb-5 p-10 bg-white text-black rounded-md'>
                <form action="">
                    <div className='flex flex-col mb-3 font-bold'>
                        <label htmlFor="name">Name</label>
                        <input onChange={(e)=>{
                            setname(e.target.value)
                        }} className='border p-2 font-normal outline-none focus:outline-none rounded-md' type="text" name="user_name" id="name" placeholder='Your Name' value={name} />
                    </div>
                    <div className='flex flex-col mb-3 font-bold'>
                        <label htmlFor="email">Email</label>
                        <input onChange={(e)=>{
                            setmail(e.target.value)
                        }} className='border p-2 font-normal outline-none focus:outline-none rounded-md' type="text" name="user_email" id="email" placeholder='Your Email' value={mail} />
                    </div>
                    <div className='flex flex-col mb-3 font-bold'>
                        <label htmlFor="Message">Message</label>
                        <input onChange={(e)=>{
                            setmessage(e.target.value)
                        }} className='border p-2 font-normal outline-none focus:outline-none rounded-md' type="text" placeholder='Message' value={messsage} name='user_message'/>
                    </div>
                    <div><button onClick={(e)=>{
                        Submithandler(e);
                    }} className='px-6 py-3 bg-black text-white font-semibold mt-2 rounded-md'>Sent Message</button></div>
                </form>
            </div>

        </div>
    )
}

export default Contact