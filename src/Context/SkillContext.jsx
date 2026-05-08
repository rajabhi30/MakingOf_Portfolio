import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const scontext = createContext();

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const skills = [
  {
    name: "React",
    logo: <i className="ri-reactjs-line"></i>,
  },
  {
    name: "Node",
    logo: <i class="ri-nodejs-line"></i>
  },
   {
    name: "Express",
    logo: <i class="ri-npmjs-fill"></i>,
  },
   {
    name: "MongoDB",
    logo: <i class="ri-database-2-fill"></i>,
  },
   {
    name: "Javascript",
    logo: <i className="ri-javascript-fill"></i>,
  },
  {
    name: "Tailwind",
    logo: <i className="ri-tailwind-css-fill"></i>,
  },
  {
    name: "Bootstrap",
    logo: <i className="ri-bootstrap-fill"></i>,
  },
  {
    name: "Html",
    logo: <i className="ri-html5-fill"></i>,
  },
  {
    name: "Css",
    logo: <i className="ri-css3-fill"></i>,
  },
  {
    name: "Git",
    logo: <i className="ri-git-branch-fill"></i>,
  },
  {
    name: "Github",
    logo: <i className="ri-github-fill"></i>,
  },
];

const experience = [
  {
    img: "https://media.licdn.com/dms/image/v2/C510BAQEgcV3sgE1PIA/company-logo_200_200/company-logo_200_200/0/1630568405733/cantilever_labs_logo?e=2147483647&v=beta&t=EQdzDxNW7uP5vn1bCa3Bq9UXCejCYaLOO1Bt2m9K-Jw",
    Title: "Data Structures and Algorithms (DSA) Training - CipherSchools",
    Date: "May 2025 - July 2025",
    Details:
      "Completed a 2-month intensive Data Structures and Algorithms training at CipherSchools, focusing on arrays, linked lists, stacks, queues, trees, graphs, recursion, and dynamic programming, with strong emphasis on problem-solving, time–space complexity analysis, and solving 100+ interview-level coding problems.",
  },
  {
    img: "https://media.licdn.com/dms/image/v2/C510BAQEgcV3sgE1PIA/company-logo_200_200/company-logo_200_200/0/1630568405733/cantilever_labs_logo?e=2147483647&v=beta&t=EQdzDxNW7uP5vn1bCa3Bq9UXCejCYaLOO1Bt2m9K-Jw",
    Title: "Full Stack MERN Development Program — Cantilever Labs",
    Date: "January 2025 - February 2025",
    Details:
      "Completed MERN stack training at Cantilever Labs, learning MongoDB, Express.js, React.js, and Node.js, with hands-on projects, RESTful APIs, authentication, and full-stack application development using modern web technologies.",
  },
  {
    img: "https://media.licdn.com/dms/image/v2/C510BAQEgcV3sgE1PIA/company-logo_200_200/company-logo_200_200/0/1630568405733/cantilever_labs_logo?e=2147483647&v=beta&t=EQdzDxNW7uP5vn1bCa3Bq9UXCejCYaLOO1Bt2m9K-Jw",
    Title: "Modern Frontend Development Program — Gokboru",
    Date: "June 2024 - July 2024",
    Details:
      "Completed frontend development training at Gokboru, learning HTML, CSS, JavaScript, and modern frameworks, focusing on responsive design, UI development, performance optimization, and building interactive, user-friendly web interfaces.",
  },
];

const projects = [
  {
    img: project1,
    title: "Notes Taking",
    desc:
      "A responsive notes-taking app built with React and Tailwind CSS, allowing users to create, edit, delete, and manage notes with a clean, intuitive, and user-friendly interface.",
    deploy: "https://refresh-react-seven.vercel.app/",
  },
  {
    img: project2,
    title: "Your Gallery",
    desc:
      "A React-based application that fetches data from an API and displays it through a clean, responsive, and user-friendly interface designed with modern UI principles.",
    deploy: "https://refresh-react-z5rc.vercel.app/",
  },
  {
    img: project3,
    title: "ReactUi",
    desc:
      "A React-based UI application focused on building clean, responsive, and reusable components, showcasing modern design practices, smooth layouts, and an intuitive user experience.",
    deploy: "https://ui-react-sigma.vercel.app/",
  },
  {
    img: project4,
    title: "Buy from API",
    desc:
      "A React-based shopping application that fetches product data from an API and transforms it into a clean, responsive, and user-friendly shopping interface.",
    deploy: "https://fake-api-e-commerce-zeta.vercel.app/",
  },
];

const SkillContext = ({ children }) => {
  return (
    <scontext.Provider value={{ skills, experience, projects }}>
      {children}
    </scontext.Provider>
  );
};

export default SkillContext;
