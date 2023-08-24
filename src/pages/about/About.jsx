import aboutimg from "./aboutimg.jpg";
import { BackButton } from "../../components/BackButton";
import champion from "./champion.jpg"
import team from "./team.jpg"
import charles from "./charles.jpg"
import linkedin from "./linkedin.png"
import github from "./github.png"
import thumbnail from "./img1.jpg"
import tech from "./img2.jpg"
import click from "./click.png"
const About = () => {
  return (
    <div className="text-black px-6 pt-6 relative grid grid-cols-1 md:grid-cols-3 w-full h-screen">
      <BackButton />
      <div className="md:col-span-2 w-full">
        <div className="flex md:h-full relative overflow-scroll md:gap-12 md:px-6 md:py-12 py-6">
          <img className="w-5/6  object-cover" src={champion} />
          <img className="w-5/6  object-cover" src={charles} />
          <img className="w-5/6  object-cover" src={team} />
          <img className="w-5/6  object-cover" src={thumbnail} />
          <img className="w-5/6  object-cover" src={tech} />
        </div>
      </div>

      <div className="col-span-1 h-3/4 md:py-12 md:px-24 ">
        <div>
          <h1 className="text-xl font-bold py-3">Bruno Truong</h1>
          <p className="text-sm md:text-sm font-poppins w-full text-left">
            I'm curious about UI/UX design and front-end development, especially building projects with Tailwind CSS, SCSS, and the React JS ecosystem.

            Recently, I've been learning at <a href="https://www.coderschool.vn/en" rel="noreferrer" target="_blank" className=" font-bold text-md bg-yellow-100 px-1 text-persian-600 relative">CoderSchool <img className=" z-10 h-6 absolute top-0 right-0" src={click} /></a>, which is considered the <span className="font-bold text-md text-persian-700 underline ">best coding school in Ho Chi Minh.</span>
            <br /><br />
            It not only teaches coding skills but also fosters a coding mindset.

            As you can see, I became the <span className="font-bold text-md text-persian-700 bg-mahogany-50 ">Champion of the Tech Trek Competition held by CoderSchool</span> . <br /><br />This project, <a className="text-md font-bold text-persian-600 underline" href="https://maison-de-villa.vercel.app/" target="_blank" rel="noreferrer">Maison De Villa</a>, is one of the most successful projects I have ever built and is included in my portfolio.

            I have been consistently working on various projects and practicing every day to become a master in front-end development in the near future.<br /> Please feel free to contact me via LinkedIn or Gmail.


          </p>
          <div className=" flex gap-10">
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/truongtritin-bruno/">

              <img className="h-12" src={linkedin} />
            </a>
            <a rel="noreferrer" target="_blank" href="https://github.com/Tritintruong114">

              <img className="h-12" src={github} />
            </a>
          </div>
        </div>
        <div className="h-1/2">
          <h2 className="font-bold text-xl justify-center text-center py-3">Trailer Of the Tech Trek Session 1</h2>
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/ZctPhBF8KII?si=lN6xtpNwcgbDR9o0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div >
  );
};

export default About;
