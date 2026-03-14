import React, { useContext } from 'react'
import Experience from './Experience'
import { scontext } from '../Context/SkillContext'

const Section3 = () => {

  const { experience } = useContext(scontext)

  return (
    <div className="bg-black w-full py-12 px-6 md:px-14 flex flex-col items-center">

      {/* Heading */}
      <div className="flex justify-center text-3xl md:text-4xl gap-2 text-white">
        My <span className="font-bold">Trainings</span>
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