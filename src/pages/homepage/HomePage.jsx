import {
  UilEstate,
  UilBloggerAlt,
  UilFolder,
  UilUser,
  UilBars,
  UilMultiply,
  UilGithub,
  UilDribbble,
  UilLinkedin,
  UilTwitter,
  UilInstagramAlt,
} from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import JuniorReactJS from "./JuniorReactJS.pdf";
import { useDispatch } from "react-redux";
import { fetchPostsData } from "../../features/fetchDateSlice";
import background from "./background.jpg";
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
      name: "Dribble",
      icon: <UilDribbble />,
      link: "https://dribbble.com/truongtritin114",
    },
    {
      name: "Linkedin",
      icon: <UilLinkedin />,
      link: "https://www.linkedin.com/in/tin-truong-tri-699b95251/",
    },
  ];

  useEffect(() => {
    dispatch(fetchPostsData());
  }, [dispatch]);

  return (
    <div className="h-full w-full text-white ">
      <img
        className="absolute w-full opacity-90 z-0 h-full object-cover"
        src={background}
      ></img>
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
            <div className="sm:p-6 absolute  text-center  sm:flex sm:w-full md:w-full lg:w-2/4 grid items-center justify-center">
              {buttons.map((button) => {
                return (
                  <div
                    className="py-3 backdrop:blur-2xl rounded-xl  hover:text-black hover:bg-white bg-opacity-20 w-screen sm:w-1/4  "
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
            <div className="hidden sm:visible  text-center sm:p-6  sm:flex  md:w-full lg:w-2/4 sm:w-full absolute">
              {buttons.map((button) => {
                return (
                  <div
                    className="py-3 active:bg-persian-600 rounded-xl active:text-white backdrop:blur-2xl text-center  hover:text-black hover:bg-white bg-opacity-20 w-screen sm:w-1/4  "
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
      <div className="w-full h-full text-white z-10 absolute flex items-center">
        <div className="m-3 sm:m-24">
          <h1 className="font-bold text-6xl py-3 text-left">Bruno Truong</h1>
          <p className="text-xl rounded-xl py-1  text-left w-3/4 ">{`< Front-End Developer />`}</p>
          <div className="grid sm:flex gap-3 py-3 sm:w-full">
            <div className="bg-white w-fit px-3 italic text-blue-900 font-medium py-1 rounded-3xl">
              <h1>+ Think organization</h1>
            </div>
            <div className="bg-white w-fit px-3 italic text-blue-900 font-medium py-1 rounded-3xl">
              <h1>+ Quick Learning</h1>
            </div>
            <div className="bg-white w-fit px-3 italic text-blue-900 font-medium py-1 rounded-3xl">
              <h1>+ Open Minded</h1>
            </div>
          </div>
          <div className=" flex  flex-col gap-3 items-center text-center xl:w-1/2 h-50  bg-blue-900 bg-opacity-10 rounded-3xl ">
            <p className="w-3/4 pt-3">
              Hi there, welcome to my personal website.
              <br /> As a FrontEnd Developer, patience and passion are my
              strength, creativity and quick learning are my hobbies. And with
              those, everything is possible.
            </p>
            <div>
              <button className="border hover:bg-white hover:text-blue-900 active:bg-persian-600 active:text-white border-blue-900 px-3 py-1 rounded-xl">
                <a download href={JuniorReactJS}>
                  Resume
                </a>
              </button>{" "}
              <button className="border hover:bg-white hover:text-blue-900 active:bg-persian-600 active:text-white border-blue-900 px-3 py-1 rounded-xl">
                Let's talk
              </button>
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
  );
};

export default HomePage;
