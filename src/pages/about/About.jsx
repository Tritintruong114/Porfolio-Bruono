import aboutimg from "./aboutimg.jpg";
import { BackButton } from "../../components/BackButton";

const about = {
  value:
    "I am a software developer, specialising in the web development arena,I have been developing websites using Javascript programming language. Something that I love about software development is the opportunity to work with people from a wide range of disciplines. The software development lifecycle involves working with so many different people and departments and as a people person and someone who loves to build new relationships, it’s great to be able to come together with other professionals who are striving towards the same goal. ",
};
const About = () => {
  return (
    <div className="text-black relative w-full ">
      <div className="h-screen top-1/4 grid sm:grid-cols-2 sm:p-12 p-6 md:p-24">
        <BackButton />
        <div className="w-3/4 bg-background  sm:justify-center justify-end rounded-xl flex flex-col sm:w-full pl-12 top-1/4 font-handWrite">
          <h1 className="text-3xl sm:text-6xl text-left">Bruno</h1>
          <h1 className="pl-6 text-3xl sm:text-6xl text-left ">Truong</h1>
          <div>
            <p className="text-sm font-poppins w-full text-left">
              {about.value}
            </p>
          </div>
        </div>
        <div className="flex bg-background  xl:ml-20 shadow-2xl rounded-xl items-center justify-center">
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
