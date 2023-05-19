import { Link } from "react-router-dom";
import { UilGithub, UilGlobe } from "@iconscout/react-unicons";
import {
  SiTailwindcss,
  SiFirebase,
  SiReactrouter,
  SiRedux,
  SiReact,
  SiJavascript,
  SiCss3,
  SiApacherocketmq,
} from "react-icons/si";
import { CgScrollV } from "react-icons/cg";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import {
  box3,
  box1,
  main,
  box2,
  box4,
} from "../../assets/projects/Movie1/index";

import {
  box3 as ms3,
  box1 as ms1,
  main as msMain,
  box2 as ms2,
  box4 as ms4,
} from "../../assets/projects/MusicPlayer/index";
import image1 from "./image1.png";
import imageBruno from "./imageBruno.png";
import elio from "./elio.png";
const projects = [
  {
    id: "1",
    project: "Movie Dashboard",
    linkDemo: "https://sfcpj2.csb.app/",
    gitHubLink: "https://github.com/Tritintruong114/Netflix-Clone-DashBoard",
    techStack: [{ style: <SiCss3 /> }, { frameWork: <SiJavascript /> }],
    image: { box1, box2, box3, main, box4 },
  },
  {
    id: "2",
    project: "Music Player",
    desc: "Live preview",
    linkDemo: "https://master--voluble-otter-f2f9c8.netlify.app/",
    gitHubLink:
      "https://github.com/Tritintruong114/react-soundCloud/tree/master",
    techStack: [
      { style: <SiTailwindcss /> },
      { frameWork: <SiReact /> },
      { router: <SiReactrouter /> },
    ],
    image: { box1: ms1, box2: ms2, box3: ms3, main: msMain, box4: ms4 },
  },
  {
    id: "3",
    project: "Movie Dashboard",
    linkDemo: "https://iridescent-taffy-0e81cb.netlify.app/",
    gitHubLink: "https://github.com/Tritintruong114/Movie-Dashboard",
    desc: "Live preview",

    techStack: [
      { style: <SiTailwindcss /> },
      { frameWork: <SiReact /> },
      { router: <SiReactrouter /> },
      { database: <SiFirebase /> },
      { state: <SiRedux /> },
    ],
    // image:
  },
  {
    id: "4",
    project: "Bruno Website",
    linkDemo: "https://porfolio-bruono.vercel.app/",
    gitHubLink: "https://github.com/Tritintruong114/Porfolio-Bruono",
    techStack: [
      { style: <SiTailwindcss /> },
      { frameWork: <SiReact /> },
      { database: <SiFirebase /> },
      { router: <SiReactrouter /> },
      { content: <SiApacherocketmq /> },
      { state: <SiRedux /> },
    ],
    studio: "https://brunoweb.sanity.studio",
  },

  {
    id: "5",
    project: "Elio Trader",
    linkDemo: "https://elio-personal-website.vercel.app/",
    gitHubLink: "https://github.com/Tritintruong114/project-ellio",
    techStack: [
      { style: <SiTailwindcss /> },
      { frameWork: <SiReact /> },
      { router: <SiReactrouter /> },
      { database: <SiFirebase /> },
      { state: <SiRedux /> },
      { content: <SiApacherocketmq /> },
    ],
    studio: "https://elio.sanity.studio/desk/post",
  },
];

// const useScroll = () => {
//   const [state, setState] = useState({
//     x: 0,
//     y: 0,
//   });
//   const onScroll = () => {
//     setState({ y: window.scrollY, x: window.scrollX });
//     console.log(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   return state;
// };

//folder
// routing, client render ,
//client -> UI , static HTML , load first -> UI  .... functional component --> redux , store, config -> server render , state.
// ES6 code
// const throttle = (func, delay) => {
//   let lastCall = 0;

//   return function (...args) {
//     if (!lastCall) {
//       lastCall = true;
//       setTimeout(() => {
//         lastCall = false;
//       }, delay);
//       func(...args);
//     }
//   };
// };

const debounce = (handleFunction, delay) => {
  let timeout;

  return function executedFunc(...args) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      handleFunction(...args);
      timeout = null;
    }, delay);
  };
};

const Projects = () => {
  const myRef = useRef();
  const [projectIndex, setProjectIndex] = useState(0);

  const handleScroll = () => {
    const cord = Math.floor(myRef.current.scrollTop) / 730.8;
    setProjectIndex(Math.round(cord));
    console.log(projectIndex);
  };
  console.log(projectIndex);

  const tHandler = debounce(handleScroll, 100);
  return (
    <div className="grid bg-black sm:grid-cols-5 grid-rows-4 sm:grid-rows-1 xl:grid-cols-4 md:grid-cols-5 items-center h-full w-full p-6 sm:p-12">
      <div className="absolute left-3 z-30 top-3">
        <Link to="/">
          <button className="p-3 sm:opacity-100 opacity-0 text-white active:bg-persian-600 active:text-white  font-bold text-xl capitalize  rounded-xl  hover:text-black hover:bg-white ">
            Back
          </button>
        </Link>
      </div>
      <div className="absolute left-3 z-30 top-3">
        <Link to="/">
          <button className="p-3 sm:opacity-0 opacity-100 text-white active:bg-persian-600 active:text-white  font-bold text-xl capitalize  rounded-xl  hover:text-black hover:bg-white ">
            <IoArrowBackCircleOutline />
          </button>
        </Link>
      </div>
      {projectIndex === 0 && (
        <div className=" p-3  sm:p-6 rounded-t-xl md:rounded-tr-none md:rounded-br-none sm:rounded-l-xl sm:rounded-tr-none sm:rounded-br-none row-span-3 h-full sm:col-span-3 md:col-span-3 xl:col-span-3  flex justify-center items-center">
          <div className="h-full grid-cols-1 no-scrollbar overflow-scroll xl:grid-cols-3 xl:grid-rows-6 text-white bg-white gap-3 p-9 rounded-xl w-full grid items-center  justify-center">
            <div
              className={`${"bg-thunder-900"} rounded-3xl  xl:row-span-4 xl:col-span-2 gap-3 text-center content-center   h-full w-full flex-shrink-0`}
            >
              <img
                className="h-full roun3 w-full rounded-3xl object-cover xl:object-left "
                src={projects[projectIndex].image.main}
              ></img>
            </div>
            <div
              className={`${"bg-thunder-900"} rounded-3xl  xl:row-span-6 gap-3 text-center content-center   h-full w-full flex-shrink-0`}
            >
              {" "}
              <img
                className="w-full h-full rounded-3xl  object-cover"
                src={projects[projectIndex].image.box1}
              ></img>
            </div>{" "}
            {/* <div
              className={`${"bg-thunder-900"}   gap-3 text-center content-center rounded-3xl  h-full w-full flex-shrink-0`}
            >
              {" "}
              <img
                className="w-full h-full object-cover object-center"
                src={projects[projectIndex].image.box4}
              ></img>
            </div> */}
            <div
              className={`${"bg-thunder-900"} xl:row-span-3 gap-3 text-center content-center rounded-3xl  h-full w-full flex-shrink-0`}
            >
              {" "}
              <img
                className="w-full h-full rounded-3xl object-cover"
                src={projects[projectIndex].image.box3}
              ></img>
            </div>{" "}
            <div
              className={`${"bg-thunder-900"} xl:row-span-3 gap-3 text-center content-center rounded-3xl  h-full w-full flex-shrink-0`}
            >
              {" "}
              <img
                className="w-full h-full rounded-3xl object-cover"
                src={projects[projectIndex].image.box2}
              ></img>
            </div>
          </div>
        </div>
      )}
      {projectIndex === 1 && (
        <div className=" p-3 sm:p-6 rounded-t-xl md:rounded-tr-none md:rounded-br-none sm:rounded-l-xl sm:rounded-tr-none sm:rounded-br-none row-span-3 h-full sm:col-span-3 md:col-span-3 xl:col-span-3  flex justify-center items-center">
          <div className="h-full w-full">
            <iframe
              className="h-full w-full rounded-3xl"
              src={projects[projectIndex].linkDemo}
            ></iframe>
          </div>
          {/* <div
              className={`${"bg-thunder-900"} col-span-1 no-scrollbar row-span-3 overflow-scroll gap-3 text-center content-center   h-full w-full flex-shrink-0`}
            >
              <img
                className="w-full h-full object-cover"
                src={projects[projectIndex].image.box1}
              ></img>
            </div> */}
          {/* <div
              className={`${"bg-thunder-900"} col-span-1 row-span-3 no-scrollbar overflow-scroll gap-3 text-center content-center   h-full w-full flex-shrink-0`}
            >
              {" "}
              <img
                className="w-full h-full "
                src={projects[projectIndex].image.box4}
              ></img>
            </div> */}
        </div>
        // </div>
      )}
      {projectIndex === 2 && (
        <div className=" p-3 sm:p-6 rounded-t-xl md:rounded-tr-none md:rounded-br-none sm:rounded-l-xl sm:rounded-tr-none sm:rounded-br-none row-span-3 h-full sm:col-span-3 md:col-span-3 xl:col-span-3  flex justify-center items-center">
          <div className="h-full grid-cols-5 grid-rows-6 text-white bg-white gap-3 p-9  rounded-xl w-full grid items-center  justify-center">
            <div
              className={` col-span-5 relative no-scrollbar row-span-6 overflow-scroll gap-3 text-center content-center rounded-3xl  h-full w-full flex-shrink-0`}
            >
              {" "}
              <iframe
                className="h-full w-full"
                src={projects[projectIndex]?.linkDemo}
              ></iframe>
            </div>
          </div>
        </div>
      )}{" "}
      {projectIndex === 3 && (
        <div className=" p-3 sm:p-6 rounded-t-xl md:rounded-tr-none md:rounded-br-none sm:rounded-l-xl sm:rounded-tr-none sm:rounded-br-none row-span-3 h-full sm:col-span-3 md:col-span-3 xl:col-span-3  flex justify-center items-center">
          <div className="h-full grid-cols-5 grid-rows-6 text-white bg-white gap-3 p-9  rounded-xl w-full grid items-center  justify-center">
            <div
              className={` col-span-5 relative no-scrollbar row-span-6 overflow-scroll gap-3 text-center content-center rounded-3xl  h-full w-full flex-shrink-0`}
            >
              {" "}
              <img
                className="w-full h-full object-cover object-left"
                src={imageBruno}
              ></img>
            </div>
          </div>
        </div>
      )}
      {projectIndex === 4 && (
        <div className=" p-3 sm:p-6 rounded-t-xl md:rounded-tr-none md:rounded-br-none sm:rounded-l-xl sm:rounded-tr-none sm:rounded-br-none row-span-3 h-full sm:col-span-3 md:col-span-3 xl:col-span-3  flex justify-center items-center">
          <div className="h-full grid-cols-5 grid-rows-6 text-white bg-white gap-3 p-9  rounded-xl w-full grid items-center  justify-center">
            <div
              className={` col-span-5 relative no-scrollbar row-span-6 overflow-scroll gap-3 text-center content-center rounded-3xl  h-full w-full flex-shrink-0`}
            >
              {(
                <img className="w-full h-full object-cover" src={elio}></img>
              ) || (
                <iframe
                  className="h-full w-full"
                  src={projects[projectIndex]?.linkDemo}
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
      <div className=" rounded-b-xl  md:rounded-tl-none sm:rounded-r-xl relative  sm:rounded-bl-none sm:col-span-2 md:col-span-2 xl:col-span-1    text-black sm:p-6 h-full flex flex-col justify-center items-center">
        <h1 className="absolute text-xl top-0 text-white">
          <CgScrollV />
        </h1>
        <div
          ref={myRef}
          onScroll={() => tHandler()}
          className="snap-y no-scrollbar w-full h-full rounded-b-xl sm:rounded-xl snap-mandatory overflow-scroll  "
        >
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="snap-start  gap-3 text-center  bg-white h-full flex-shrink-0 flex items-center flex-col justify-center"
              >
                <h1 className="font-bold text-md md:text-3xl">
                  {project.project}
                </h1>
                <p className="text-xl font-bold text-persian-600">
                  {project.desc ? project.desc : null}
                </p>
                <div className="flex sm:grid md:flex xl:flex w-full  no-scrollbar flex-shrink-0 overflow-scroll items-center justify-center gap-3">
                  {project.techStack.map((stack) => {
                    return (
                      <div className="text-xl" key={stack.style}>
                        <i>{stack.style}</i>
                        <i>{stack.frameWork}</i>
                        <i>{stack.database}</i>
                        <i>{stack.router}</i>
                        <i>{stack.state}</i>
                        <i>{stack.content}</i>
                      </div>
                    );
                  })}
                </div>
                <div className="no-scrollbar md:flex xl:flex sm:grid flex-shrink-0 overflow-scroll flex items-center justify-center w-full gap-3 text-xs md:text-sm font-light">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.gitHubLink}
                    className="flex items-center gap-1"
                  >
                    <UilGithub />
                    Code
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.linkDemo}
                    className="flex items-center gap-1"
                  >
                    <UilGlobe />
                    Product
                  </a>
                  {project.studio && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.studio}
                      className="flex items-center gap-1"
                    >
                      <SiApacherocketmq />
                      Admin
                    </a>
                  )}
                </div>
                {project.explain && <p>{project.explain}</p>}
              </div>
            );
          })}
        </div>
        {/* <div className="absolute h-full w-full bg-white z-0"></div> */}
      </div>
    </div>
  );
};

export default Projects;
