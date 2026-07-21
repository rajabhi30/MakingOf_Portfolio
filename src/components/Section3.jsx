import React, { useContext } from 'react'
import Experience from './Experience'
import { scontext } from '../Context/SkillContext'

const Section3 = () => {

  const { experience } = useContext(scontext)

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 md:px-16 py-32 flex flex-col items-center z-10">

      {/* Heading */}
      <div className="flex flex-col items-center">
        <div className='section-tag'>My Background</div>
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-16">
          Education & <span className="font-bold text-gradient-red">Trainings</span>
        </h2>
      </div>

      {/* Experience List */}
      <div className="w-full max-w-4xl mt-10 flex flex-col gap-6">
        {experience.map((exp, idx) => (
          <Experience
            key={idx}
            img={exp.img}
            title={exp.Title}
            date={exp.Date}
            details={exp.Details}
          />
        ))}
      </div>

    </div>
  )
}

export default Section3