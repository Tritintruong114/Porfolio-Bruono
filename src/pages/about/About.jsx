import aboutimg from "./aboutimg.jpg";
import { BackButton } from "../../components/BackButton";
import champion from "./champion.jpg"
import team from "./team.jpg"
import charles from "./charles.jpg"
import linkedin from "./linkedin.png"
import github from "./github.png"

const About = () => {
  return (
    <div className="text-black bg-background relative w-full ">
      <div className=" top-1/4 flex sm:grid-cols-2 sm:p-12 p-6 md:p-24">
        <div className="w-full sm:h-full shadow-2xl ml-32  justify-center  rounded-xl flex flex-col sm:w-full px-12 py-12 top-1/4 font-handWrite">
          <h1 className="text-3xl sm:text-6xl text-left">Bruno</h1>
          <h1 className="pl-6 text-3xl sm:text-6xl text-left ">Truong</h1>
          <div>

            <p className="text-sm md:text-sm font-poppins w-full text-left">
              I'm curious about UI/UX design and front-end development, especially building projects with Tailwind CSS, SCSS, and the React JS ecosystem.

              Recently, I've been learning at Coder School, which is considered the best coding school in Ho Chi Minh. It not only teaches coding skills but also fosters a coding mindset.

              As you can see, I became the champion of the Tech Trek Competition held by Coder School. This project, Maison De Villa, is one of the most successful projects I have ever built and is included in my portfolio.

              I have been consistently working on various projects and practicing every day to become a master in front-end development in the near future. Please feel free to contact me via LinkedIn or Gmail.

              Note: If you provide your actual LinkedIn profile or Gmail address, I can include them in the revised text.
            </p>
            <div className=" flex gap-10">
              <a href="https://www.linkedin.com/in/truongtritin-bruno/">

                <img className="h-12" src={linkedin} />
              </a>
              <a href="https://github.com/Tritintruong114">

                <img className="h-12" src={github} />
              </a>
            </div>
            <div className="flex h-full overflow-scroll gap-6">

              <img className="w-3/4 object-cover" src={champion} />
              <img className="w-3/4 object-cover" src={charles} />
              <img className="w-3/4 object-cover" src={team} />
            </div>
          </div>
        </div>
        <div className="flex bg-background h-full w-full   xl:ml-20 shadow-2xl rounded-xl items-center justify-center">
          <img
            className="object-cover h-full w-full rounded-xl"
            src={aboutimg}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
