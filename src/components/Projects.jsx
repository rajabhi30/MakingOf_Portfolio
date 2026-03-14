import React, { useContext } from 'react'
import Oddpro from './Oddpro'
import Evenpro from './Evenpro'
import { scontext } from '../Context/SkillContext'

const Projects = () => {

  const { projects } = useContext(scontext)

  return (
    <div className='bg-black w-full text-white flex flex-col items-center py-12 px-6 md:px-14' id="project">

      {/* Heading */}
      <div className='text-3xl md:text-4xl'>
        My <span className='font-bold'>Projects</span>
      </div>

      {/* Projects */}
      <div className='w-full mt-10 flex flex-col gap-10'>
        {projects.map((pro, index) => {
          return index % 2 === 0 ? (
            <Evenpro
              key={index}
              num={index}
              title={pro.title}
              desc={pro.desc}
              link={pro.deploy}
              img={pro.img}
            />
          ) : (
            <Oddpro
              key={index}
              num={index}
              title={pro.title}
              desc={pro.desc}
              link={pro.deploy}
              img={pro.img}
            />
          )
        })}
      </div>

    </div>
  )
}

export default Projects