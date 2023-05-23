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
import { useEffect, useRef, useState } from "react";
import { box2 } from "../../../assets/projects/Movie1/index";
import js from "./js.png";
import css from "./css.png";
import React from "./React.png";
import redux from "./redux.png";
import tailwind from "./tailwind.png";
import firebase from "./firebase.png";
import sanity from "./sanity.png";
import router from "./router.png";

const projects = [
  {
    id: "1",
    project: "Movie Dashboard",
    linkDemo: "https://sfcpj2.csb.app/",
    gitHubLink: "https://github.com/Tritintruong114/Netflix-Clone-DashBoard",
    techStack: {
      style: css,
      frameWork: js,
    },
    image: { box2 },
  },
  {
    id: "2",
    project: "Music Player",
    desc: "Live preview",
    linkDemo: "https://master--voluble-otter-f2f9c8.netlify.app/",
    gitHubLink:
      "https://github.com/Tritintruong114/react-soundCloud/tree/master",
    techStack: [{ style: tailwind }, { frameWork: React }, { router: router }],
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

const Projects = () => {
  return (
    <div className="relative overflow-scroll no-scrollbar gap-9 p-12 pt-24 md:p-24 text-white h-full w-full grid grid-cols-1 md:grid-cols-2">
      <div className="absolute left-6 z-30 top-6">
        <Link to="/">
          <button className="p-3 active:bg-persian-600 active:text-white  font-bold text-xl capitalize  rounded-xl  hover:text-white hover:bg-black bg-opacity-20 ">
            Back
          </button>
        </Link>
      </div>
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className="w-full h-96 rounded-3xl flex-shrink-0 bg-mahogany-500"
          >
            <img src={project.image?.box2} />
            <div className="flex items-center justify-center">
              <img className="h-16" src={project.techStack.frameWork} />
              <img className="h-16" src={project.techStack.style} />
              <img className="h-12" src={project.techStack.router} />
              <img className="h-12" src={project.techStack.database} />
              <img className="h-12" src={project.techStack.state} />
            </div>
            <h1>{project.project}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
