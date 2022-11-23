import React from 'react'
import { CgProfile } from "react-icons/cg";
const About = () => {
  return (
    <div className="mx-auto ">
      <div className="my-auto flex flex-col gap-3 m-10 mt-7 mb-12 border-2 p-5 ">
        <h1 className="font-bold  text-[#496a2f] flex items-center  gap-2">
          ABOUT ME {<CgProfile className=" text-[#496a2f] w-5 h-5" />}
        </h1>
        <h1 className="text-3xl font-medium text-[#79b84a]">Better Design</h1>
        <h1 className="text-3xl font-medium text-[#79b84a]">
          {" "}
          Better Experience
        </h1>
        <p className="text-[#1d2615] opacity-60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel ab
          obcaecati repellendus enim itaque error iste ad saepe magnam nemo rem
          qui ea voluptates, quia laudantium ullam officia recusandae!
        </p>
        <h2 className="text-[#496a2f] font-bold">REACT</h2>
        <div className="w-full h-2 bg-[#1d2615]  rounded-md">
          <div className="w-full bg-[#b8b597] h-2 rounded-md" />
        </div>
        <h2 className="text-[#496a2f] font-bold">NODE.JS</h2>
        <div className="w-full h-2 bg-gray-200 rounded-md">
          <div className="w-60 bg-[#b8b597] h-2 rounded-md" />
        </div>
        <h2 className="text-[#496a2f] font-bold">HTML & CSS</h2>
        <div className="w-full h-2 bg-gray-200 rounded-md">
          <div className="w-80 bg-[#b8b597] h-2 rounded-md" />
        </div>
        <h2 className="text-[#496a2f] font-bold">TAILWIND</h2>
        <div className="w-full h-2 bg-gray-200 rounded-md">
          <div className="w-90 bg-[#b8b597] h-2 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default About