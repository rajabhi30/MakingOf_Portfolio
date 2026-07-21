import React from 'react'
import Nav1 from './Nav1'
import Intro from './Intro'

const Section1 = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden bg-black text-white bg-noise relative'>
      <Nav1 />
      <Intro />
    </div>
  )
}

export default Section1