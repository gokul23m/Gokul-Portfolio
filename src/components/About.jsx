import React from "react";
import SelfIntro from "../assets/Self_Introduction.mp4";


const About = () => {

    const src = "https://drive.google.com/file/d/1tt_P-yQrh88QGhykuYR1hzMwk9fTe74a/view?usp=drive_link";
  return (
    <div
      name="about"
      className="w-full h-220 min-h-150 bg-gradient-to-b from-gray-800 to-black text-white pt-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl pb-3 mt-15">
Basically, I being a Computer Science engineering graduate, with a mere knowledge in HTML, I started developing my interest in Web developing field and acquired knowledge in few front end technologies, frameworks and libraries like HTML, CSS, JavaScript, Bootstrap, ReactJS and built up few responsive web pages and apps from the ground up.
        </p>
        

<p className="text-xl pb-3 mt-2">I possess knowledge in  Java,MySQL,git, firebase. And I have completed a wide range of projects using my skill set.</p>
     
      <br />
      <div className="">
        
      <h1 className="text-xl">Self Introduction 👇</h1>
      <br />
     <video src={SelfIntro} controls />

         
       
      </div>
      </div>
    </div>
  );
};

export default About;