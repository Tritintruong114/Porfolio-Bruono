import { Link } from "react-router-dom";
import aboutimg from "./aboutimg.jpg";
import js from "./asset/js.png";
import css from "./asset/css.png";
import reactjs from "./asset/reactjs.png";
import redux from "./asset/redux.png";
import tailwind from "./asset/tailwind.png";
import firebase from "./asset/firebase.png";
import sanity2 from "./asset/sanity2.png";
import router from "./asset/router.png";
import html5 from "./asset/html5.png";
const about = {
  value:
    "I am a software developer, specialising in the web development arena,I have been developing websites using Javascript programming language. Something that I love about software development is the opportunity to work with people from a wide range of disciplines. The software development lifecycle involves working with so many different people and departments and as a people person and someone who loves to build new relationships, it’s great to be able to come together with other professionals who are striving towards the same goal. ",
};
const About = () => {
  return (
    <div className="text-black overflow-scroll relative w-full ">
      <div className="h-screen  bg-background top-1/4 grid sm:grid-cols-2 sm:p-12 p-6 md:p-24">
        <div className="sm:absolute left-6 z-30 top-6">
          <Link to="/">
            <button className="p-3 hover:shadow-xl active:bg-persian-600 active:text-white  font-bold text-xl capitalize  rounded-xl  hover:text-black hover:bg-white bg-opacity-20 ">
              Back
            </button>
          </Link>
        </div>
        <div className="w-3/4  sm:justify-center justify-end flex flex-col sm:w-full pl-12 top-1/4 font-handWrite">
          <h1 className="text-3xl sm:text-6xl text-left">Bruno</h1>
          <h1 className="pl-6 text-3xl sm:text-6xl text-left ">Truong</h1>
          <div>
            <p className="text-sm font-poppins w-full text-left">
              {about.value}
            </p>
          </div>
        </div>
        <div className="flex bg-white  xl:ml-20 shadow-2xl rounded-3xl items-center justify-center">
          <img
            className="object-cover h-3/4 w-3/4 rounded-xl"
            src={aboutimg}
          ></img>
        </div>
      </div>
      {/* <div className="flex w-full  bg-opacity-95 bg-white items-center justify-center gap-6">
        <img
          className="h-24"
          src={tailwind}
          title="Tailwind CSS - CSS FrameWork"
        ></img>
        <img
          className="h-24"
          src={sanity2}
          title="Tailwind CSS - CSS FrameWork"
        ></img>
        <img
          className="h-24"
          src={firebase}
          title="Tailwind CSS - CSS FrameWork"
        ></img>
        <img
          className="h-24"
          src={reactjs}
          title="Tailwind CSS - CSS FrameWork"
        ></img>
        <img
          className="h-24"
          src={html5}
          title="Tailwind CSS - CSS FrameWork"
        ></img>{" "}
        <img
          className="h-24"
          src={js}
          title="Tailwind CSS - CSS FrameWork"
        ></img>
        <img
          className="h-24"
          src={css}
          title="Tailwind CSS - CSS FrameWork"
        ></img>
        <img
          className="h-24"
          src={redux}
          title="Tailwind CSS - CSS FrameWork"
        ></img>
        <img
          className="h-20"
          src={router}
          title="Tailwind CSS - CSS FrameWork"
        ></img>
      </div> */}
    </div>
  );
};

export default About;
