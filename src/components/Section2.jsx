import React, { useContext } from 'react'
import SkillCard from './SkillCard'
import { scontext } from '../Context/SkillContext'

const Section2 = () => {

  const { skills } = useContext(scontext)

  return (
    <div className="w-full py-12 px-6 md:px-14" id="skill">

      {/* Heading */}
      <div className="flex justify-center text-3xl md:text-4xl gap-2">
        My <span className="font-bold">Skills</span>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
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