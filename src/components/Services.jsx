import React from 'react'
import Card from './Card';
import a from '../images/p1.png'

import { RiServiceLine } from "react-icons/ri";
import c from "../images/p3.png";
import d from "../images/p4.png";
import e from "../images/p5.png";

const Services = () => {
  return (
    <>
      <div className=" border-[#1d2615] border-[1px] shadow-2xl shadow-[#1d2615] drop-shadow-2xl  border-opacity-30 sm:mx-10 lg:mx-40 " />
      <div className="container mx-auto m-10 ">
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-bold  text-[#496a2f] flex items-center justify-center gap-2 ">
            SERVICES {<RiServiceLine  className='h-5 w-5 items-center flex justify-center'/>}
          </h1>
          <h1 className="text-3xl font-medium text-[#79b84a]">
            What do I offer
          </h1>
          <p className="text-[#1d2615] opacity-60 w-1/2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            obcaecati maiores illum magni ab numquam quae, sequi laudantium,
            illo aspernatur reiciendis deleniti. Quisquam soluta, dignissimos
            perferendis iure adipisci saepe harum.
          </p>
        </div>
        <div className="flex md:flex-row sm:flex-col  sm:w-full flex-wrap items-center justify-center ">
          <Card src={a} title="React Js" />

          <Card src={c} title="Node Js" />
          <Card src={d} title="Javascript" />
          <Card src={e} title="Tailwind" />
        </div>
      </div>
      <div className=" border-[#1d2615]  border-[1px] border-opacity-30 sm:mx-10 lg:mx-40 " />
    </>
  );
}

export default Services
