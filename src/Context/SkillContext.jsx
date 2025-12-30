import React, { Children, createContext } from 'react'
// eslint-disable-next-line react-refresh/only-export-components
export const scontext=createContext();
import Project1 from '../assets/Project1.png'
import project2 from '../assets/Project2.png'
import project3 from '../assets/Project3.png'
import project4 from '../assets/Project4.png'


 const skills=[
        {
            name:"React",
            logo:<i class="ri-reactjs-line"></i>
        },

         {
            name:"Javascript",
            logo:<i class="ri-javascript-fill"></i>
        },

         {
            name:"Tailwind",
            logo:<i class="ri-tailwind-css-fill"></i>
        },

         {
            name:"Bootstrap",
            logo:<i class="ri-bootstrap-fill"></i>
        },

         {
            name:"Html",
            logo:<i class="ri-html5-fill"></i>
        },

         {
            name:"Css",
            logo:<i class="ri-css3-fill"></i>
        },

         {
            name:"Git",
            logo:<i class="ri-git-branch-fill"></i>
        },
        
         {
            name:"Github",
            logo:<i class="ri-github-fill"></i>
        },


    ]


    const experience=[
        {
            img:"https://play-lh.googleusercontent.com/LaW7m98oE5v_a3nTk4v-4GCM-1viyvxtG1IQK2BEpaM07U8r_vN7eiD68rb2Nn1udkU",
            Title:"Data Structures and Algorithms (DSA) Training-CipherSchools",
            Date:"May 2025 - July 2025",
            Details:"Completed a 2-month intensive Data Structures and Algorithms training at CipherSchools, focusing on arrays, linked lists, stacks, queues, trees, graphs, recursion, and dynamic programming, with strong emphasis on problem-solving, time–space complexity analysis, and solving 100+ interview-level coding problems."
        },
         {
            img:"https://media.licdn.com/dms/image/v2/C510BAQEgcV3sgE1PIA/company-logo_200_200/company-logo_200_200/0/1630568405733/cantilever_labs_logo?e=2147483647&v=beta&t=EQdzDxNW7uP5vn1bCa3Bq9UXCejCYaLOO1Bt2m9K-Jw",
            Title:"Full Stack MERN Development Program — Cantilever Labs",
            Date:"January 2025 - February 2025",
            Details:"Completed MERN stack training at Cantilever Labs, learning MongoDB, Express.js, React.js, and Node.js, with hands-on projects, RESTful APIs, authentication, and full-stack application development using modern web technologies"
        },
         {
            img:"https://media.licdn.com/dms/image/v2/D560BAQGlMH9zNrwO0A/company-logo_200_200/company-logo_200_200/0/1723708435329/gokborutech22_logo?e=2147483647&v=beta&t=1yb1s7Ivr09goYG0Cd3ZgB7twrL8E9_LzWeSEq18MOc",
            Title:"Modern Frontend Development Program — Gokboru",
            Date:"June 2024 - July 2024",
            Details:"Completed frontend development training at Gokboru, learning HTML, CSS, JavaScript, and modern frameworks, focusing on responsive design, UI development, performance optimization, and building interactive, user-friendly web interfaces.",
        }
    ]

    const projects=[
        {
            img:Project1,
            title:"Notes Taking",
            desc:"A responsive notes-taking app built with React and Tailwind CSS, allowing users to create, edit, delete, and manage notes with a clean, intuitive, and user-friendly interface.",
            deploy:"https://refresh-react-seven.vercel.app/"
        },
         {
            img:project2,
            title:"Your Gallery",
            desc:"A React-based application that fetches data from an API and displays it through a clean, responsive, and user-friendly interface designed with modern UI principles.",
            deploy:"https://refresh-react-z5rc.vercel.app/"
        },
        {
            img:project3,
            title:"ReactUi",
            desc:"A React-based UI application focused on building clean, responsive, and reusable components, showcasing modern design practices, smooth layouts, and an intuitive user experience.",
            deploy:"https://ui-react-sigma.vercel.app/"
        },
         {
            img:project4,
            title:"Buy from API",
            desc:"A React-based shopping application that fetches product data from an API and transforms it into a clean, responsive, and user-friendly shopping interface.t",
            deploy:"https://fake-api-e-commerce-zeta.vercel.app/"
        }
    ]

const SkillContext = (props) => {
  return (
    <div>
        <scontext.Provider value={{skills,experience,projects}}>
            {props.children}
        </scontext.Provider>
    </div>
  )
}

export default SkillContext