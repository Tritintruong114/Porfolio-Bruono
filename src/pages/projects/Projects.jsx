import { UilGithub, UilGlobe } from "@iconscout/react-unicons";
import React from "./asset/React.png";
import redux from "./asset/redux.png";
import tailwind from "./asset/tailwind.png";
import firebase from "./asset/firebase.png";
import sanity2 from "./asset/sanity2.png";
import router from "./asset/router.png";
import movie from "./asset/movie.png";
import bruno from "./asset/bruno.png";
import maison from "./asset/maison.png";
import iphone from "./asset/iphone.png";
import threejs from "./asset/threejs.png";
import gsap from "./asset/gsap.png";
import trackit from "./asset/trackit.png";
import wooder from "./asset/wooder.png";
import js from "./asset/js.png"
import sass from "./asset/sass.png"
import figma from "./asset/figma.png"
import crypto from "./asset/crypto.png"
import html from "./asset/html.png"
import grunt from "./asset/grunt.png"
import vite from "./asset/vite.png"
import mh from "./asset/mh.png"
import { BackButton } from "../../components/BackButton";
const projects = [

  {
    id: "1234526",
    project: "Manh Hieu",
    linkDemo: "https://mh-photo.vercel.app",
    gitHubLink:
      "https://github.com/Tritintruong114/mh",
    techStack: {
      style: tailwind,
      html: vite,
      frameWork: React,
      router: router,
      database: firebase,
      state: redux,
      content: sanity2,
    },
    role: true,
    status: false,
    mvp: true,
    image: mh,
    info: {
      text: "Built with React JS Eco and Implement Sanity for JAM Stack. For client. Full Stack Role",
    },
  },
  {
    id: "123452",
    project: "Finance flow",
    linkDemo: "https://crypto-delta-rose.vercel.app/",
    gitHubLink:
      "https://github.com/Tritintruong114/Crypto.git",
    techStack: {
      style: sass,
      frameWork: js,
      router: figma,
      database: html,
      state: grunt
    },
    role: false,

    status: false,
    mvp: false,
    image: crypto,
    info: {
      text: "Project with designed by Figma and built with Javascript and Scss. Front End Role",
    },
  },
  {
    id: "1234",
    project: "Wooder",
    linkDemo: "https://wooder2-grunt.vercel.app",
    gitHubLink:
      "https://github.com/Tritintruong114/Wooder-Final",
    techStack: {
      style: sass,
      frameWork: js,
      router: figma,
      database: html,
      state: grunt
    },
    role: false,
    mvp: false,
    status: true,
    image: wooder,
    info: {
      text: "Wooder was built for the sass best practice with responsive for mobile, compile working with Figma and Photoshop. This project was built by Javascript and HTML , Scss. Front End Role",
    },
  },
  {
    id: "123",
    project: "Trackit",
    linkDemo: "https://task-tracker-reactjs-2.vercel.app/",
    gitHubLink:
      "https://github.com/Tritintruong114/task-tracker-reactjs-2.git",
    mvp: true,
    status: false,
    techStack: {
      style: tailwind,
      html: vite,
      frameWork: React,
      router: router,
      database: firebase,
      state: redux,
      content: sanity2,
    },
    role: true,

    image: trackit,
    info: {
      text: "The task tracker app is simple and easy to use, with a clean and modern design. The use of React JS is apparent, with the app being fast and responsive, and the state management being handled efficiently.Full Stack Role",
    },
  },
  {
    id: "3",
    project: "Movie Dashboard",
    linkDemo: "https://iridescent-taffy-0e81cb.netlify.app/",
    gitHubLink: "https://github.com/Tritintruong114/Movie-Dashboard",
    desc: "Live preview",
    mvp: false,
    status: true,
    techStack: {
      style: tailwind,
      frameWork: React,
      router: router,
      database: firebase,
      html: vite,
      state: redux,
    },
    role: false,

    image: movie,
    info: {
      text: "Using React JS for the base , React Router Dom for navigate user , and styled with Tailwind CSS, and Firebase for register user and store all the new user.Full Stack Role",
    },
  },
  {
    id: "5",
    project: "Iphone 3D Module",
    linkDemo: "https://iphone-3d-website-starter-main.vercel.app/",
    gitHubLink:
      "https://github.com/Tritintruong114/iphone-3d-website-starter-main",
    mvp: false,
    status: true,
    techStack: {
      frameWork: threejs,
      style: gsap,
      state: redux,
      router: router,
      html: vite,
      database: tailwind,
    },
    role: true,
    image: iphone,
    info: {
      text: "Moved on to designing the 3D model of the iPhone using Three.js, paying attention to the details and ensuring that the model was as realistic as possible. Deployed the web project to a hosting platform as Vercel.Best practice for motion development. Front End Role",
    },
  },
  {
    id: "1",
    project: "Maison De Villa",
    linkDemo: "https://maison-de-villa.vercel.app/",
    gitHubLink: "https://github.com/Tritintruong114/Maison-De-Villa",
    mvp: true,
    status: false,
    techStack: {
      style: tailwind,
      html: vite,
      frameWork: React,
      router: router,
      database: firebase,
      state: redux,
      content: sanity2,
    },
    role: true,
    image: maison,
    info: {
      text: "Using React JS for the base , React Router Dom for navigate user , and styled with Tailwind CSS, and Firebase for register user and store all the new user, Implement AI MidJourney for generating IMG and focus on the Core Customer.Full Stack Role",
    },
  },

  {
    id: "4",
    project: "Bruno Website",
    linkDemo: "https://porfolio-bruono.vercel.app/",
    gitHubLink: "https://github.com/Tritintruong114/Porfolio-Bruono",
    mvp: true,
    status: false,
    techStack: {
      style: tailwind,
      frameWork: React,
      router: router,
      content: sanity2,
      html: vite,
      state: redux,
    },
    role: true,

    info: {
      text: "Using React JS for base, React Router Dom for navigate user, and styled with Tailwind Css and Sanity Studio for CMS module with CRUD features, Redux for the state management.",
    },

    studio: "https://brunoweb.sanity.studio",
    image: bruno,
  },
];

const Projects = () => {
  return (
    <div className="relative  no-scrollbar gap-9 py-12 px-6 md:px-24 md:pt-20  h-full w-full grid grid-cols-1 xl:grid-cols-4">
      <BackButton />
      {projects.map((project) => {
        return (
          <div className="col-span-4 h-full w-full shadow-2xl mb-10 grid xl:grid-cols-4 rounded-xl overflow-hidden" key={project.id
          }>
            <div
              className="w-full h-full  bg-background xl:col-span-3 shadow-xl flex flex-col bg-white  md:rounded-l-xl flex-shrink-0 bg-wh"
            >
              <a
                target="_blank"
                className="h-full w-full object-cover"
                rel="noopener noreferrer"
                href={project.linkDemo}
                title={project.linkDemo}
              >
                <img
                  className="h-full w-full "
                  src={project.image}
                />
              </a>
            </div>
            <div className=" bg-background flex flex-col items-center justify-center no-scrollbar bg-white xl:h-full shadow-2xl md:rounded-r-xl p-6 col-span-1">
              <h1 className="text-black text-center w-full font-bold text-3xl ">
                {project.project}
              </h1>
              {project.role == true ? <p className="text-md font-bold">Full Stack Position</p> : <p className="tex-md font-semibold">Front End Position</p>}
              {project.status == true ? <p className="text-xl font-bold flex justify-center items-start w-1/2 my-3 bg-malachite-600 px-3 rounded text-background ">Finish</p> :
                <p className="text-xl font-bold bg-mahogany-600 px-3  flex justify-center items-start w-1/2 my-3 rounded text-background ">Ongoing</p>}
              {project.mvp == true ? <p className="text-xl bg-mahogany-600 px-3 rounded mb-3  text-background">MVP</p> : <p className="bg-malachite-600 px-3 rounded mb-3 text-background">Personal Project</p>}
              <div className="flex items-center justify-center no-scrollbar overflow-scroll w-full gap-3 ">
                <img
                  className="h-9 flex-shrink-0"
                  src={project.techStack.frameWork}
                />
                <img
                  className="h-9 flex-shrink-0"
                  src={project.techStack.style}
                />{" "}
                {project.techStack.html && (
                  <img
                    className="h-9 flex-shrink-0"
                    src={project.techStack.html}
                  />
                )}
                {project.techStack.router && (
                  <img
                    className="h-8 flex-shrink-0"
                    src={project.techStack.router}
                  />
                )}
                {project.techStack.database && (
                  <img
                    className="h-9 flex-shrink-0"
                    src={project.techStack.database}
                  />
                )}
                {project.techStack.state && (
                  <img
                    className="h-9 flex-shrink-0"
                    src={project.techStack.state}
                  />
                )}
                {project.techStack.content && (
                  <img
                    className="h-9 flex-shrink-0"
                    src={project.techStack?.content}
                  />
                )}
              </div>{" "}
              <div>
                <p className="w-full h-full py-6">{project.info.text}</p>
              </div>
              <div className="text-black py-6 gap-6 flex items-center w-full justify-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.linkDemo}
                  title="Demo"
                >
                  <UilGlobe size="42" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={[project.gitHubLink]}
                  title="Source code"
                >
                  <UilGithub size="42" />
                </a>
              </div>
            </div>
          </div>

        );
      })}
    </div >
  );
};

export default Projects;
