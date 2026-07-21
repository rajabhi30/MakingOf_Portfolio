import React, { useContext } from 'react'
import SkillCard from './SkillCard'
import { scontext } from '../Context/SkillContext'

const Section2 = () => {

  const { skills } = useContext(scontext)

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 md:px-16 py-32" id="skill">

      {/* Heading */}
      <div className="flex flex-col items-center">
        <div className='section-tag'>My Expertise</div>
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-16">
          Technologies & <span className="font-bold text-gradient-red">Skills</span>
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-4 relative z-10">
        {skills.map((sk, idx) => (
          <SkillCard
            key={idx}
            name={sk.name}
            logo={sk.logo}
          />
        ))}
      </div>

    </div>
  )
}

export default Section2