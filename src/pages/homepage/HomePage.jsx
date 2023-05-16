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
import { useState } from "react";
const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const buttons = [
    {
      button: "home",
      icon: <UilEstate />,
    },
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
    {
      name: "Twitter",
      icon: <UilTwitter />,
      link: "https://twitter.com/TruongBruno114",
    },
    {
      name: "Insta",
      icon: <UilInstagramAlt />,
      link: "https://www.instagram.com/brunotruong114/",
    },
  ];
  return (
    <div className="h-screen w-full ">
      <img
        className="absolute w-full z-0 h-full object-cover"
        src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.15752-9/346105316_114287088332462_4537839571767316912_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=cgBljPQFoq4AX9wN7EX&_nc_ht=scontent.fsgn5-8.fna&oh=03_AdTdAT6oj8C8_Kdg7Z0jLafhypkUZX7Keq8MprTNUgluMw&oe=6489DBAC"
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
          <p className="text-xl rounded-xl py-1  text-left w-3/4 ">{`< Front-End-Developer />`}</p>
          <div className=" flex items-start gap-12  w-3/4 pt-6">
            <button className="border hover:bg-white hover:text-persian-900 active:bg-persian-600 active:text-white border-persian-600 px-3 py-1 rounded-xl">
              Resume
            </button>
            <button className="border hover:bg-white hover:text-persian-900 active:bg-persian-600 active:text-white border-persian-600 px-3 py-1 rounded-xl">
              Porfolio
            </button>
          </div>
        </div>
      </div>
      <div className="flex absolute bottom-24  z-30 left-3 sm:m-24 gap-3 items-end">
        {contactsIcon.map((icon) => (
          <button className=" active:text-persian-600" key={icon.name}>
            <a rel="noreferrer" href={icon.link} target="_blank">
              {icon.icon}
            </a>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
