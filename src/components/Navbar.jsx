import React from 'react'


import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Navbar = () => {

  

   


  return (
    <>
      <nav className="w-full  top-0 left-0   ">
        <div className="container mx-auto  flex sm:p-5  justify-center items-center">
          <ul className="  flex text-[#92e158]  gap-10 font-bold text-sm uppercase ">
            <li className="hover:text-[#effae4]">
              <a href="#">{<FaLinkedinIn />}</a>
            </li>
            <li className="hover:text-[#effae4]">
              <a href="#">{<FiInstagram />}</a>
            </li>
            <li className="hover:text-[#effae4]">
              <a href="#">{<TfiTwitterAlt />}</a>
            </li>
            <li className="hover:text-[#effae4]">
              <a href="#">{<FaYoutube />}</a>
            </li>
            <li className="hover:text-[#effae4]">
              <a href="#">{<BsGithub />}</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className=" border-[#effae4] border-[1px] border-opacity-30 sm:mx-10 lg:mx-40 " />
    </>
  );
}

export default Navbar
