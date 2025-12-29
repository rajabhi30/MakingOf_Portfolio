import React, { useContext } from 'react'
import Experience from './Experience'
import { scontext } from '../Context/SkillContext'

const Section3 = () => {

  const { experience } = useContext(scontext)

  return (
    <div className="bg-black min-h-screen w-full py-5 px-14 flex flex-col">

      <div className="flex justify-center text-4xl gap-3 text-white">
        My <span className="font-bold">Trainings</span>
      </div>

      <div className="w-full mt-10 flex flex-col gap-5">
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
