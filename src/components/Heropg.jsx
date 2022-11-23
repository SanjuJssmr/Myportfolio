import React from 'react'
import img from '../images/sm2.png'
import { TbHeartHandshake } from "react-icons/tb";

const Heropg = () => {
  return (
    <div className=" flex  ">
      <div className="flex">
        <img src={img} alt="img" className=" h5/6 sm:mt-48 lg:mt-0 " />
      </div>
      <div className=" text-center items-center justify-center absolute overflow-hidden  sm:top-28 xl:top-10 sm:ml-20 flex  flex-col   sm:left-10 lg:right-20 lg:ml-96  lg:mt-56 ">
        <span
          className=" flex  text-center items-center justify-center
  text-[#effae4] lg:text-gray-300 text-5xl xl:text-7xl sm:ml-2 sm:mb-1  xl:ml-80 lg:ml-64 "
        >
          Hi there..
          <TbHeartHandshake />
        </span>
        <p
          className=" sm:mb-2  text-[#92e158] text-4xl xl:ml-80 xl:text-8xl
         lg:text-4xl lg:ml-64"
        >
          Raveendhar here
        </p>
        <p className=" text-[#effae4] xl:text-5xl lg:ml-72 sm:text-xl opacity-75 border-b-[1px] pb-2 border-opacity-20 " >Front End Developer</p>
      </div>
    </div>
  );
      
}

export default Heropg