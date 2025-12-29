import React from 'react'
import Section1 from './components/section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Projects from './components/Projects'
const App = () => {
  return (
    <div className='font-sans h-screen'>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Projects/>
    </div>
  )
}

export default App