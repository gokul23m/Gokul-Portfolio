import React from "react";
// import HeroImage from "../assets/heroImage.png";
import { MdLaunch } from "react-icons/md";
import { MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Software Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-full text-xl">
            I have completed my Web development internship and having hands-on experience in web appilication from creating frontend projects.
            
           </p>
           <p  className="text-gray-500 py-4 max-w-full text-xl " >  Currently, I looking for a job from which i get trained technologies like React Js,  Java and MySQL.
         </p>

          <div className="flex flex-row">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex  items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a
              className="group text-white w-fit px-6 py-3 my-2 ml-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              href="https://drive.google.com/file/d/1vJQswupbPEY_bI8vycUGQO08zplagsVO/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <span className="group-hover:rotate-0 duration-300">
                <MdLaunch size={25} className="ml-1"/>
              </span>
            </a>
          </div>
        </div>

        <div>
          {/* <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;