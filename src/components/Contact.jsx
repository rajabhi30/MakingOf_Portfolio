import React, { useState } from 'react'

const Contact = () => {

  const [name, setname] = useState('');
  const [mail, setmail] = useState('');
  const [messsage, setmessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "e5d34e24-50da-4c50-b1e7-9329026e03ba");

    const json = JSON.stringify(Object.fromEntries(formData));

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then(res => res.json());

    if (res.success) {
      setname('');
      setmail('');
      setmessage('');
    } 
  };

  return (
    <div className='w-full h-screen flex flex-col items-center px-14 py-10 bg-black text-white'>

      <h4 className='text-4xl font-bold'>Contact Me</h4>

      <div className='border-2 w-[50%] p-10 bg-white text-black rounded-md mt-6'>
        <form onSubmit={onSubmit}>

          <div className='flex flex-col mb-3 font-bold'>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className='border p-2 rounded-md font-normal'
              required
            />
          </div>

          <div className='flex flex-col mb-3 font-bold'>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={mail}
              onChange={(e) => setmail(e.target.value)}
              className='border p-2 rounded-md font-normal'
              required
            />
          </div>

          <div className='flex flex-col mb-3 font-bold'>
            <label>Message</label>
            <textarea
              name="message"
              value={messsage}
              onChange={(e) => setmessage(e.target.value)}
              className='border p-2 rounded-md font-normal'
              required
            />
          </div>

          <button
            type="submit"
            className='px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-600'>
            Send Message
          </button>

        </form>
      </div>
    </div>
  )
}

export default Contact;
