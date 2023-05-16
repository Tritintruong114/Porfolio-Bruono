import { Link } from "react-router-dom";

const projects = [
  {
    project: "Movie Dash-Board by ReactJS",
    linkDemo: "https://iridescent-taffy-0e81cb.netlify.app/",
    gitHubLink: "https://github.com/Tritintruong114/Movie-Dashboard",
    techStack: {
      style: "Tailwind CSS",
      frameWork: "React JS",
    },
  },
  {
    project: "Music Player",
    linkDemo: "https://master--voluble-otter-f2f9c8.netlify.app/",
    gitHubLink:
      "https://github.com/Tritintruong114/react-soundCloud/tree/master",
    techStack: {
      style: "Tailwind CSS",
      frameWork: "React JS",
    },
  },
  {
    project: "Movie Dash-Board by JS",
    linkDemo: "https://sfcpj2.csb.app/",
    gitHubLink: "https://github.com/Tritintruong114/Netflix-Clone-DashBoard",
    techStack: {
      style: "CSS",
      frameWork: "Vanilla Javascript",
    },
  },
  {
    project: "Personal Website by ReactJS",
    linkDemo: "https://porfolio-bruono.vercel.app/",
    gitHubLink: "https://github.com/Tritintruong114/Porfolio-Bruono",
    techStack: {
      style: "Tailwind CSS",
      frameWork: "React JS",
    },
  },
];
const Projects = () => {
  return (
    <div className="bg-white grid grid-rows-4 sm:grid-rows-1 sm:grid-cols-4 items-center h-full w-full p-6 sm:p-24">
      <div className="absolute left-3 z-30 top-3">
        <Link to="/">
          <button className="p-3 active:bg-persian-600 active:text-white  font-bold text-xl capitalize  rounded-xl  hover:text-black hover:bg-white bg-opacity-20 ">
            Back
          </button>
        </Link>
      </div>
      <div className="bg-persian-600 row-span-3 h-full sm:col-span-3  flex justify-center items-center">
        ABC
      </div>
      <div className="bg-persian-900  h-full flex flex-col gap-3 justify-center items-center">
        <div className=" overflow-scroll no-scrollbar ">
          {projects.map((project) => {
            return <h1 key={project.project}>{project.project}</h1>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
