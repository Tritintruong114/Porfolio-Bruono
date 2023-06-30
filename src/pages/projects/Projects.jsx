import { UilGithub, UilGlobe } from "@iconscout/react-unicons";
import { box2 } from "../../assets/projects/Movie1/index";
import js from "./asset/js.png";
import css from "./asset/css.png";
import React from "./asset/React.png";
import redux from "./asset/redux.png";
import tailwind from "./asset/tailwind.png";
import firebase from "./asset/firebase.png";
import sanity2 from "./asset/sanity2.png";
import router from "./asset/router.png";
import movie from "./asset/movie.png";
import html5 from "./asset/html5.png";
import music from "./asset/music.png";
import bruno from "./asset/bruno.png";
import elio from "./asset/elio.png";
import maison from "./asset/maison.png";
import iphone from "./asset/iphone.png";
import threejs from "./asset/threejs.png";
import gsap from "./asset/gsap.png";
import trackit from "./asset/trackit.png";
import { BackButton } from "../../components/BackButton";
const projects = [
  {
    id: "123",
    project: "Trackit",
    linkDemo: "https://iphone-3d-website-starter-main.vercel.app/",
    gitHubLink:
      "https://github.com/Tritintruong114/iphone-3d-website-starter-main",
    techStack: {
      style: tailwind,
      frameWork: React,
      router: router,
      database: firebase,
      state: redux,
      content: sanity2,
    },
    image: trackit,
    info: {
      text: "The task tracker app is simple and easy to use, with a clean and modern design. The use of React JS is apparent, with the app being fast and responsive, and the state management being handled efficiently.",
    },
  },
  {
    id: "5",
    project: "Iphone 3D Module",
    linkDemo: "https://iphone-3d-website-starter-main.vercel.app/",
    gitHubLink:
      "https://github.com/Tritintruong114/iphone-3d-website-starter-main",
    techStack: {
      frameWork: threejs,
      style: gsap,
      state: redux,
      router: router,
      database: tailwind,
    },
    image: iphone,
    info: {
      text: "Moved on to designing the 3D model of the iPhone using Three.js, paying attention to the details and ensuring that the model was as realistic as possible. Deployed the web project to a hosting platform as Vercel",
    },
  },
  {
    id: "1",
    project: "Maison De Villa",
    linkDemo: "https://maison-de-villa.vercel.app/",
    gitHubLink: "https://github.com/Tritintruong114/Maison-De-Villa",
    techStack: {
      style: tailwind,
      frameWork: React,
      router: router,
      database: firebase,
      state: redux,
      content: sanity2,
    },
    image: maison,
    info: {
      text: "Using React JS for the base , React Router Dom for navigate user , and styled with Tailwind CSS, and Firebase for register user and store all the new user, Implement AI MidJourney for generating IMG and focus on the Core Customer",
    },
  },
  {
    id: "3",
    project: "Movie Dashboard",
    linkDemo: "https://iridescent-taffy-0e81cb.netlify.app/",
    gitHubLink: "https://github.com/Tritintruong114/Movie-Dashboard",
    desc: "Live preview",

    techStack: {
      style: tailwind,
      frameWork: React,
      router: router,
      database: firebase,
      state: redux,
    },
    image: movie,
    info: {
      text: "Using React JS for the base , React Router Dom for navigate user , and styled with Tailwind CSS, and Firebase for register user and store all the new user",
    },
  },
  {
    id: "4",
    project: "Bruno Website",
    linkDemo: "https://porfolio-bruono.vercel.app/",
    gitHubLink: "https://github.com/Tritintruong114/Porfolio-Bruono",
    techStack: {
      style: tailwind,
      frameWork: React,
      router: router,
      content: sanity2,
      state: redux,
    },
    info: {
      text: "Using React JS for base, React Router Dom for navigate user, and styled with Tailwind Css and Sanity Studio for CMS module with CRUD features, Redux for the state management.",
    },

    studio: "https://brunoweb.sanity.studio",
    image: bruno,
  },
];

const Projects = () => {
  return (
    <div className="relative bg-teal overflow-scroll no-scrollbar gap-9 p-3 md:p-24  h-full w-full grid grid-cols-1 xl:grid-cols-4">
      <BackButton />
      {projects.map((project) => {
        return (
          <>
            <div
              key={project.id}
              className="w-full  bg-background xl:col-span-3 shadow-2xl p-6 flex flex-col bg-white  rounded-3xl flex-shrink-0 bg-wh"
            >
              <a
                target="_blank"
                className="h-fulll"
                rel="noopener noreferrer"
                href={project.linkDemo}
                title={project.project}
              >
                <img
                  className="h-full w-full rounded-3xl"
                  src={project.image}
                />
              </a>
            </div>
            <div className=" h-60 bg-background flex flex-col items-center justify-center no-scrollbar overflow-scroll bg-white xl:h-full shadow-2xl rounded-3xl p-6 col-span-1">
              <h1 className="text-black w-full font-bold pt-6 text-3xl pb-9">
                {project.project}
              </h1>
              <div className="flex justify-between items-center no-scrollbar overflow-scroll w-full gap-3 ">
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
          </>
        );
      })}
    </div>
  );
};

export default Projects;
