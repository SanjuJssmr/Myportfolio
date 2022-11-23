import React from 'react'
import Prjct from './Prjct'
import pn from '../images/prj1.jpg'
import pm from "../images/prj2.jpg";
import { GrProjects } from "react-icons/gr";
const Projects = () => {
    return (
      <>
        <div className="container mx-auto m-10 ">
          <div className="flex flex-col items-center gap-3">
            <h1 className="font-bold  text-[#496a2f] mt-3 flex justify-center items-center gap-3">
              PORTFOLIO'S {<GrProjects className="w-5 h-5 text-[#496a2f]" />}
            </h1>
            <h1 className=" text-3xl font-medium text-[#79b84a]">
              Works & Projects
            </h1>
            <p className="text-[#1d2615] opacity-60 w-1/2 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              obcaecati maiores illum magni ab numquam quae, sequi laudantium,
              illo aspernatur reiciendis deleniti. Quisquam soluta, dignissimos
              perferendis iure adipisci saepe harum.
            </p>
          </div>
          <div className="flex md:flex-row sm:flex-col sm:w-full ">
            <Prjct src={pn} />
            <Prjct src={pm} />
          </div>
        </div>
        <div className=" border-[#1d2615] border-[1px] border-opacity-30 sm:mx-10 lg:mx-40 " />
      </>
    );
}

            export default Projects