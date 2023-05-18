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
import { useRef, useState, useEffect } from "react";
import { box1, box2, main } from "../../assets/projects/Movie1/index";

const projects = [
  {
    id: "1",
    project: "Movie Dashboard",
    linkDemo: "https://sfcpj2.csb.app/",
    gitHubLink: "https://github.com/Tritintruong114/Netflix-Clone-DashBoard",
    techStack: [{ style: <SiCss3 /> }, { frameWork: <SiJavascript /> }],
    image: [
      {
        main: main,
        box1: box1,
        box2: box2,
      },
    ],
  },
  {
    id: "2",
    project: "Music Player",
    linkDemo: "https://master--voluble-otter-f2f9c8.netlify.app/",
    gitHubLink:
      "https://github.com/Tritintruong114/react-soundCloud/tree/master",
    techStack: [
      { style: <SiTailwindcss /> },
      { frameWork: <SiReact /> },
      { router: <SiReactrouter /> },
    ],
  },
  {
    id: "3",
    project: "Movie Dashboard",
    linkDemo: "https://iridescent-taffy-0e81cb.netlify.app/",
    gitHubLink: "https://github.com/Tritintruong114/Movie-Dashboard",
    techStack: [
      { style: <SiTailwindcss /> },
      { frameWork: <SiReact /> },
      { router: <SiReactrouter /> },
      { database: <SiFirebase /> },
      { state: <SiRedux /> },
    ],
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

function debounce(func, delay) {
  let timeout;

  return function executedFunc(...args) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, delay);
  };
}

const Projects = () => {
  const myRef = useRef();
  const [color, setColor] = useState(0);

  const handleScroll = () => {
    const cord = Math.floor(myRef.current.scrollTop) / 730.8;
    console.log(Math.ceil(cord));
    setColor(cord);
  };

  const tHandler = debounce(handleScroll, 500);
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
      <div className="bg-thunder-600  p-3 sm:p-6 rounded-t-xl md:rounded-tr-none md:rounded-br-none sm:rounded-l-xl sm:rounded-tr-none sm:rounded-br-none row-span-3 h-full sm:col-span-3 md:col-span-3 xl:col-span-3  flex justify-center items-center">
        <div className="h-full grid-cols-5 grid-rows-4 text-white bg-white gap-3 p-9 bg-opacity-95 rounded-xl w-full grid items-center  justify-center">
          <div
            className={`${"bg-thunder-900"} col-span-5 no-scrollbar row-span-4 overflow-scroll gap-3 text-center content-center rounded-3xl  h-full w-full flex-shrink-0`}
          >
            <img
              className="w-full h-full object-cover object-left"
              src={box2}
            ></img>
          </div>
        </div>
      </div>

      <div className=" rounded-b-xl bg-thunder-600  md:rounded-tl-none sm:rounded-r-xl relative  sm:rounded-bl-none sm:col-span-2 md:col-span-2 xl:col-span-1    text-black sm:p-6 h-full flex flex-col justify-center items-center">
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
                className="snap-start  gap-3 text-center  bg-white bg-opacity-95 h-full flex-shrink-0 flex items-center flex-col justify-center"
              >
                <h1 className="font-bold text-md md:text-3xl">
                  {project.project}
                </h1>
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
