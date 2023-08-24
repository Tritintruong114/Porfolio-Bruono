import {
  UilBloggerAlt,
  UilFolder,
  UilUser,
  UilBars,
  UilMultiply,
  UilGithub,
  UilDribbble,
  UilLinkedin,
} from "@iconscout/react-unicons";
import TruongTriTin_FED from "./TruongTriTin_FED.pdf";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPostsData } from "../../features/fetchDateSlice";
import computer from "./computer.jpg";
import js from "./asset/js.png";
import css from "./asset/css.png";
import reactjs from "./asset/reactjs.png";
import redux from "./asset/redux.png";
import tailwind from "./asset/tailwind.png";
import firebase from "./asset/firebase.png";
import sanity2 from "./asset/sanity2.png";
import router from "./asset/router.png";
import html5 from "./asset/html5.png";
import sass from "./asset/sass.png"
import ts from "./asset/ts.png"
const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const buttons = [
    {
      button: "blogs",
      icon: <UilBloggerAlt />,
    },
    {
      button: "projects",
      icon: <UilFolder />,
    },
    {
      button: "about",
      icon: <UilUser />,
    },
  ];
  const contactsIcon = [
    {
      name: "Github",
      icon: <UilGithub />,
      link: "https://github.com/Tritintruong114",
    },

    {
      name: "Linkedin",
      icon: <UilLinkedin />,
      link: "https://www.linkedin.com/in/truongtritin-bruno/",
    },
  ];

  useEffect(() => {
    dispatch(fetchPostsData());
  }, [dispatch]);

  return (
    <div className="h-screen w-full text-background ">
      <img
        className="absolute object-cover h-full w-full z-0"
        src={computer}
      ></img>
      <div className="h-full w-full absolute backdrop-blur-sm"></div>
      <div className="flex justify-between w-full relative">
        <div className="flex z-20 w-full gap-3 ">
          <div className="sm:hidden z-30 absolute right-3 top-3 ">
            {!showMenu ? (
              <button onClick={() => setShowMenu(!showMenu)}>
                <UilBars />
              </button>
            ) : (
              <button onClick={() => setShowMenu(!showMenu)}>
                <UilMultiply />
              </button>
            )}
          </div>
          {showMenu ? (
            <div className="sm:p-6 w-full justify-center flex items-center flex-col bg-black h-screen absolute sm:flex sm:w-full md:w-full lg:w-2/4">
              {buttons.map((button) => {
                return (
                  <div
                    className="py-3 backdrop:blur-2xl tracking-widest  text-center  hover:text-black hover:bg-background bg-opacity-20 w-screen sm:w-1/4  "
                    key={button.button}
                  >
                    <h1
                      className="font-bold text-xl capitalize"
                      key={button.name}
                    >
                      <Link to={`${button.button}`}>{button.button}</Link>
                    </h1>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="hidden sm:visible tracking-widest   mt-12 sm:ml-24 md:ml-36  sm:flex  md:w-full lg:w-2/4 sm:w-full absolute">
              {buttons.map((button) => {
                return (
                  <div
                    className="py-3 rounded-xl text-left hover:decoration-blue-500 decoration-4 hover:underline w-screen sm:w-1/4  "
                    key={button.button}
                  >
                    <Link to={`${button.button}`}>
                      <h1
                        className="font-bold text-xl capitalize"
                        key={button.name}
                      >
                        {button.button}
                      </h1>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="w-full md:pl-12 h-full text-background z-10 absolute flex items-center">
        <div className="px-6 sm:m-24">
          <h1 className="font-bold py-3 text-3xl md:text-6xl text-center">
            Bruno Truong
          </h1>
          <p className="text-xl rounded-xl justify-center text-center xl:text-center w-full opacity-60 pb-3">{`<FrontEndDev />`}</p>
          {/* <div className="grid w-2/4 sm:w-2/4 sm:items-center sm:justify-center gap-3 py-3">
            <div className="bg-white w-fit px-3 italic text-black font-medium py-1 rounded-3xl">
              <h1>+ Think organization</h1>
            </div>
            <div className="bg-white w-fit px-3 italic text-black font-medium py-1 rounded-3xl">
              <h1>+ Quick Learning</h1>
            </div>
            <div className="bg-white w-fit px-3 italic text-black font-medium py-1 rounded-3xl">
              <h1>+ Open Minded</h1>
            </div>
          </div> */}

          <div className="bg-background bg-opacity-10 p-6 rounded-xl">
            <div className="flex md:justify-center  py-3  w-fit  rounded-t-3xl    items-center xl:justify-center justify-between flex-wrap">
              <img
                className="h-9  hover:scale-125 hover:z-30 transition ease-in-out"
                src={tailwind}
                title="Tailwind CSS - CSS FrameWork"
              ></img>
              <img
                className="h-9  hover:scale-125 hover:z-30 transition ease-in-out"
                src={sass}
                title="Tailwind CSS - CSS FrameWork"
              ></img>

              <img
                className="h-9 hover:scale-125 hover:z-30 transition ease-in-out"
                src={css}
                title="CSS"
              ></img>
              <img
                className="h-9 hover:scale-125 hover:z-30 transition ease-in-out"
                src={sanity2}
                title="CMS - Sanity"
              ></img>
              <img
                className="h-9 hover:scale-125 hover:z-30 transition ease-in-out"
                src={firebase}
                title="Firebase"
              ></img>

              <img
                className="h-9 hover:scale-125 hover:z-30 transition ease-in-out"
                src={js}
                title="Javascript"
              ></img>

              <img
                className="h-9  hover:scale-125 hover:z-30 transition ease-in-out"
                src={ts}
                title="Tailwind CSS - CSS FrameWork"
              ></img>

              <img
                className="h-9 hover:scale-125 hover:z-30 transition ease-in-out"
                src={reactjs}
                title="React JS"
              ></img>
              <img
                className="h-7 hover:scale-125 hover:z-30 transition ease-in-out"
                src={router}
                title="React Router Dom"
              ></img>

              <img
                className="h-9 hover:scale-125 hover:z-30 transition ease-in-out"
                src={redux}
                title="Redux"
              ></img>
              <img
                className="h-9 hover:scale-125 hover:z-30 transition ease-in-out"
                src={html5}
                title="HTML"
              ></img>{" "}

            </div>
            <div className=" flex  flex-col    gap-3 items-center text-center w-full h-50  rounded-b-3xl ">
              <p className="w-full pt-3">
                Hi there, welcome to my personal website.
                <br />
              </p>
              <div className="flex gap-3 flex-col w-full justify-center items-center">
                <div className="flex h-12 text-xl font-bold w-full px-6 gap-3">
                  <button className="border w-3/4 text-sm md:text-xl hover:bg-background hover:text-black active:bg-persian-600 active:text-background px-3 py-1 rounded-xl">
                    <a download href={TruongTriTin_FED}>
                      Resume
                    </a>
                  </button>{" "}
                  <button className="border w-3/4 text-sm md:text-xl hover:bg-background hover:text-black active:bg-persian-600 active:text-background  px-3 py-1 rounded-xl">
                    <Link to="/contact">Let's talk</Link>
                  </button>
                </div>
                <div className="flex pl-3 items-center pt-3 pb-3 gap-3 justify-center">
                  {contactsIcon.map((icon) => (
                    <button className=" active:text-persian-600" key={icon.name}>
                      <a rel="noreferrer" href={icon.link} target="_blank">
                        {icon.icon}
                      </a>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
