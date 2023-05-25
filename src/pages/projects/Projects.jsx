import { Link } from "react-router-dom";
import { UilGithub, UilGlobe } from "@iconscout/react-unicons";
import { CgScrollV } from "react-icons/cg";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
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
const projects = [
  {
    id: "1",
    project: "Movie Dashboard",
    linkDemo: "https://sfcpj2.csb.app/",
    gitHubLink: "https://github.com/Tritintruong114/Netflix-Clone-DashBoard",
    techStack: {
      style: css,
      frameWork: js,
      html: html5,
    },
    image: box2,
  },
  {
    id: "2",
    project: "Music Player",
    desc: "Live preview",
    linkDemo: "https://master--voluble-otter-f2f9c8.netlify.app/",
    gitHubLink:
      "https://github.com/Tritintruong114/react-soundCloud/tree/master",
    techStack: { style: tailwind, frameWork: React, router: router },
    image: music,
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
  },
  {
    id: "4",
    project: "Bruno Website",
    linkDemo: "https://porfolio-bruono.vercel.app/",
    gitHubLink: "https://github.com/Tritintruong114/Porfolio-Bruono",
    techStack: {
      style: tailwind,
      frameWork: React,
      database: firebase,
      router: router,
      content: sanity2,
      state: redux,
    },

    studio: "https://brunoweb.sanity.studio",
    image: bruno,
  },

  {
    id: "5",
    project: "Elio Trader",
    linkDemo: "https://elio-personal-website.vercel.app/",
    gitHubLink: "https://github.com/Tritintruong114/project-ellio",
    techStack: {
      style: tailwind,
      frameWork: React,
      database: firebase,
      router: router,
      content: sanity2,
      state: redux,
    },
    studio: "https://elio.sanity.studio/desk/post",
    image: elio,
  },
];

const Projects = () => {
  return (
    <div className="relative bg-background overflow-scroll no-scrollbar gap-9 p-12 pt-24 md:p-24  h-full w-full grid grid-cols-1 xl:grid-cols-4">
      <div className="absolute left-6 z-30 top-6">
        <Link to="/">
          <button className="p-3 hover:shadow-xl active:bg-persian-600 active:text-white  font-bold text-xl capitalize  rounded-xl  hover:text-black hover:bg-white text-black ">
            Back
          </button>
        </Link>
      </div>
      {projects.map((project) => {
        return (
          <>
            <div
              key={project.id}
              className="w-full xl:col-span-3 shadow-2xl p-6 flex flex-col bg-white  rounded-3xl flex-shrink-0 bg-wh"
            >
              <img
                className="h-96 w-full ojt col-span-4 object-cover rounded-3xl"
                src={project.image}
              />
            </div>
            <div className=" h-40 bg-white xl:h-full shadow-2xl rounded-3xl p-6 col-span-1">
              <div className="flex  justify-between items-center no-scrollbar overflow-scroll w-full gap-3 ">
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
              <div className="text-black flex">
                <a
                  target="_blank"
                  className="h-12"
                  rel="noopener noreferrer"
                  href={project.linkDemo}
                >
                  <UilGlobe />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={[project.gitHubLink]}
                >
                  <UilGithub />
                </a>
              </div>
              <div>
                <p className="text-black">{project.project}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Projects;
