import React, { useContext } from 'react'
import SkillCard from './SkillCard'
import { scontext } from '../Context/SkillContext'

const Section2 = () => {

  const { skills, experience } = useContext(scontext)

  return (
    <div className="h-screen py-5 px-14" id="skill">

      <div className="flex justify-center text-4xl gap-3">
        My <span className="font-bold">Skills</span>
      </div>

      <div className="flex flex-wrap gap-14 mt-18 ml-13">
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
