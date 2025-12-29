import React, { useContext } from 'react'
import Oddpro from './Oddpro'
import Evenpro from './Evenpro'
import { scontext } from '../Context/SkillContext'



const Projects = () => {
    const { projects } = useContext(scontext)
    return (
        <div className='bg-black h-auto w-full text-white flex flex-col items-center py-5 px-14 overflow-auto'>
            <div className='text-4xl'>My <span className='font-bold'>Projects</span></div>
            <div className='w-full h-[50%] mt-5 '>
                {projects.map((pro, index) => {
                    if (index % 2 === 0) {
                        return <Evenpro key={index} num={index} title={pro.title} desc={pro.desc} link={pro.deploy} img={pro.img} />
                    } else {
                        return <Oddpro key={index}  num={index} title={pro.title} desc={pro.desc} link={pro.deploy} img={pro.img}/>
                    }
                })}
            </div>
        </div>
    )
}

export default Projects