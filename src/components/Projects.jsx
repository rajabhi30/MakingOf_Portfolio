import React, { useContext } from 'react'
import Oddpro from './Oddpro'
import Evenpro from './Evenpro'
import { scontext } from '../Context/SkillContext'

const Projects = () => {

  const { projects } = useContext(scontext)

  return (
    <div className='relative w-full max-w-7xl mx-auto px-6 md:px-16 py-32 flex flex-col items-center' id="project">

      {/* Heading */}
      <div className="flex flex-col items-center">
        <div className='section-tag'>My Work</div>
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-16">
          Featured <span className="font-bold text-gradient-red">Projects</span>
        </h2>
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