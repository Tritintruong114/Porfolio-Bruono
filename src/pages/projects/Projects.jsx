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
const projects = [
  {
    project: "Movie Dashboard",
    linkDemo: "https://sfcpj2.csb.app/",
    gitHubLink: "https://github.com/Tritintruong114/Netflix-Clone-DashBoard",
    techStack: [{ style: <SiCss3 /> }, { frameWork: <SiJavascript /> }],
  },
  {
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
    project: "Bruno Website",
    linkDemo: "https://porfolio-bruono.vercel.app/",
    gitHubLink: "https://github.com/Tritintruong114/Porfolio-Bruono",
    techStack: [
      { style: <SiTailwindcss /> },
      { frameWork: <SiReact /> },
      { database: <SiFirebase /> },
      { content: <SiApacherocketmq /> },
      { state: <SiRedux /> },
    ],
    studio: "https://brunoweb.sanity.studio",
  },

  {
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
const Projects = () => {
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
          <div className="bg-thunder-900 col-span-3 no-scrollbar row-span-4 overflow-scroll p-9 gap-3 text-center content-center rounded-3xl  h-full w-full flex-shrink-0"></div>
          <div className="bg-thunder-900 col-span-2 no-scrollbar row-span-2 overflow-scroll p-9 gap-3 text-center content-center rounded-3xl  h-full w-full flex-shrink-0"></div>
          <div className="bg-thunder-900 col-span-2 no-scrollbar row-span-2 overflow-scroll p-9 gap-3 text-center content-center rounded-3xl  h-full w-full flex-shrink-0"></div>
        </div>
      </div>
      <div className=" rounded-b-xl bg-thunder-600  md:rounded-tl-none sm:rounded-r-xl relative  sm:rounded-bl-none sm:col-span-2 md:col-span-2 xl:col-span-1    text-black sm:p-6 h-full flex flex-col justify-center items-center">
        <h1 className="absolute text-xl top-0 text-white">
          <CgScrollV />
        </h1>
        <div className="snap-y w-full h-full rounded-b-xl sm:rounded-xl snap-mandatory overflow-scroll no-scrollbar  ">
          {projects.map((project) => {
            return (
              <div
                className="snap-start  gap-3 text-center  bg-white bg-opacity-95 h-full flex-shrink-0 flex items-center flex-col justify-center"
                key={project.project}
              >
                <h1
                  className="font-bold text-md md:text-3xl"
                  key={project.project}
                >
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
