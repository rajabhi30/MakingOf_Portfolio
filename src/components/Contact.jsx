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
    <div className='relative w-full max-w-7xl mx-auto px-6 md:px-16 py-32 flex flex-col items-center min-h-screen' id="contact">

      {/* Heading */}
      <div className="flex flex-col items-center">
        <div className='section-tag'>Get In Touch</div>
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-16">
          Let's <span className="font-bold text-gradient-red">Connect</span>
        </h2>
      </div>

      <div className='glass-panel w-full md:w-[70%] lg:w-[60%] p-8 md:p-14 rounded-3xl relative z-10'>

        <form onSubmit={onSubmit} className='flex flex-col gap-8'>

          <div className='flex flex-col group'>
            <label className='text-sm font-semibold text-zinc-400 mb-2 uppercase tracking-widest group-focus-within:text-red-400 transition-colors'>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className='modern-input p-4 rounded-xl text-lg'
              placeholder='John Doe'
              required
            />
          </div>

          <div className='flex flex-col group'>
            <label className='text-sm font-semibold text-zinc-400 mb-2 uppercase tracking-widest group-focus-within:text-red-400 transition-colors'>Email</label>
            <input
              type="email"
              name="email"
              value={mail}
              onChange={(e) => setmail(e.target.value)}
              className='modern-input p-4 rounded-xl text-lg'
              placeholder='john@example.com'
              required
            />
          </div>

          <div className='flex flex-col group'>
            <label className='text-sm font-semibold text-zinc-400 mb-2 uppercase tracking-widest group-focus-within:text-red-400 transition-colors'>Message</label>
            <textarea
              name="message"
              rows="5"
              value={messsage}
              onChange={(e) => setmessage(e.target.value)}
              className='modern-input p-4 rounded-xl text-lg resize-none'
              placeholder='Tell me about your project...'
              required
            />
          </div>

          <button
            type="submit"
            className='w-full md:w-auto self-end px-10 py-4 rounded-full font-bold btn-modern-dark tracking-wide text-lg mt-4'>
            Send Message <i className="ri-send-plane-fill ml-2"></i>
          </button>

        </form>

      </div>
    </div>
  )
}

export default Contact;