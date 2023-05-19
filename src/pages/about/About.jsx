import { Link } from "react-router-dom";
import aboutimg from "./aboutimg.jpg";
const about = {
  value:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
};
const About = () => {
  return (
    <div className="text-white relative w-full ">
      <div className="absolute left-6 z-30 top-6">
        <Link to="/">
          <button className="p-3 active:bg-persian-600 active:text-white  font-bold text-xl capitalize  rounded-xl  hover:text-black hover:bg-white bg-opacity-20 ">
            Back
          </button>
        </Link>
      </div>
      <div className="h-screen bg-black top-1/4 grid sm:grid-cols-2 absolute sm:p-12 p-6 md:p-24">
        <div className="w-3/4  sm:justify-center justify-end flex flex-col sm:w-full pl-12 top-1/4 font-handWrite">
          <h1 className="text-3xl sm:text-6xl text-left">Bruno</h1>
          <h1 className="pl-6 text-3xl sm:text-6xl text-left ">Truong</h1>
          <div>
            <p className="text-sm font-poppins w-full text-left">
              {about.value}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="object-cover h-3/4 w-3/4 rounded-xl"
            src={aboutimg}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
