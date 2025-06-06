// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's

import mpboardLogo from "./assets/education_logo/mpboard.png" ;
import rgpvImg    from  "./assets/education_logo/rgpv.png" ;

// Project Section Logo's 
import aiproject from "./assets/work_logo/aiproject.png"  ;
import hotelmanagement from "./assets/work_logo/hotelmanagement.png" ;
import todo  from  "./assets/work_logo/todoapp.png"  ;
import gitdetective from "./assets/work_logo/githubdetective.png"


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      // { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Language',
    skills: [
      // { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      // { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
   
    {
      id: 0,
      img:  rgpvImg,
      school: "BSA College, Mathura",
      date: "2018 - Aug 2021",
      grade: "72.2%",
      desc: "I pursued B.Tech in Electrical Engineering, where I not only gained theoretical and practical knowledge in the field but also participated in various college events and technical competitions. I was actively involved in campus activities, contributed to team projects, and worked on innovative academic projects that enhanced my technical and teamwork skills.",
      degree: "Bachelor of Technology (B.Tech) – Electrical Engineering",
    },
    {
      id: 1,
      img: mpboardLogo,
      school: "Government Higher Secondary School, Silpara, Rewa (M.P.)",
      date: "2017 - 2018",
      grade: "65%",
      desc: "I completed my 12th standard in 2018 from the MP Board with a specialization in Mathematics stream, securing 65%. This phase strengthened my analytical thinking and problem-solving skill .",
      degree: "MP Board(XII) - PCM ",
    },
    {
      id: 2,
      img: mpboardLogo,
      school: "Government Higher Secondary School, Silpara, Rewa (M.P.)",
      date: "2015 - 2016",
      grade: "67%",
      desc: "I completed my 10th standard in 2016 under the MP Board of Secondary Education with a score of 67%. During this period, I built a strong foundation in core subjects and developed discipline and consistency in studies. ",
      degree: "MP Board(X)",
    },
  ];
  
  export const projects = [

    {
      id: 0,
      title: "Github Account Detective",
      description:
        " A modern web application that allows users to search and view detailed GitHub profiles. Built with React and the GitHub API, this tool provides a clean and intuitive interface to explore GitHub user information. ",
      image: gitdetective ,
      tags: ["React JS", "HTML", "CSS", "JavaScript"  ,"API handling"],
      github: "https://github.com/SHUBHAMREWA/Git-profile-detective.git",
      webapp: "https://git-profile-detective.vercel.app/" ,
    },
    {
      id: 1,
      title: "Ai chat Bot",
      description:
        "This AI chatbot is built using React (Vite) and styled with Tailwind CSS. It uses the Google Gemini API to fetch responses. Features include chat history with localStorage, dark/light mode, auto-scroll, and Enter key support for input. The app uses React Hooks for state management and offers a smooth, responsive chat experience.",
      image: aiproject ,
      tags: ["React JS", "Tailwind css" , "HTML", "CSS", "JavaScript"  ,"API handling"],
      github: "https://github.com/SHUBHAMREWA/AiTool.git",
      webapp: "https://shubhamrewa.github.io/AiTool/" ,
    },
    {
      id: 2,
      title: "Hotel Management",
      description:
        "The Hotel Management System is a simple web application built using Vanilla JavaScript, HTML, and CSS. It allows users to sign up, log in, and manage hotel operations like customer check-in/check-out, room booking, and payment recording. Admins can access a panel to manage customers, rooms, and bookings, with reports on total bookings and revenue. All data is stored in the browser using localStorage to ensure it persists across sessions. Basic CSS and Bootstrap are used for styling and layout.",
      image: hotelmanagement,
      tags: [  "JavaScript" , "Bootstrap","HTML", "CSS" , ],
      github: "https://github.com/SHUBHAMREWA/hotel-Management-Project.git",
      webapp: "https://shubhamsproject.netlify.app/",
    },
    {
      id: 3,
      title: "to do app",
      description:
        "Todo app for normal Task view create , and delete using html css Javascript.",
      image: todo ,
      tags: ["html" , "css" , "js"],
      github: "https://github.com/SHUBHAMREWA/toDoApp.git",
      webapp: "https://todoappshubham.netlify.app/",
    }

  ];  