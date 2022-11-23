import React from 'react'
import { BsLinkedin } from 'react-icons/bs';

import { RiContactsLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="bg-gradient-to-t from-[#1d2615] mt-14">
      <div className="flex flex-col items-center ">
        <h2 className="font-bold  text-[#496a2f] flex items-center justify-center gap-2">
          CONTACT {<RiContactsLine  />}
        </h2>
        <h1 className="text-3xl font-medium text-[#79b84a]">Have Questions?</h1>
        <p className="text-[#1d2615] opacity-60 text-sm">
          Mail me your queries I will here to attend you 24/7
        </p>
      </div>
      <div className="flex flex-col gap-5 m-10  items-center  ">
        <input
          type="text"
          placeholder="Your Name"
          className="border-2 p-2  outline-none lg:w-1/2 w-full border-[#92e158] border-opacity-50"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-2 p-2 outline-none lg:w-1/2 w-full border-[#92e158] border-opacity-50"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message.."
          className="border-2 p-2 outline-none lg:w-1/2 w-full border-[#92e158] border-opacity-50"
        ></textarea>
        <button
          type="submit"
          className="border-2 mb-5 p-2 outline-none lg:w-1/2 w-full bg-[#92e158] text-white text-2xl font-medium border-none rounded-lg hover:bg-[#70af3f]"
        >
          {" "}
          Submit
        </button>
      </div>

      <footer className="w-full flex  items-center justify-center  ">
        <div className="container mx-auto py-5 sm:p-5 ">
          <div className=" flex  text-gray-300 items-center justify-center font-bold text-sm uppercase">
            @2022 | sanjuravi134@gmail.com 💖|{" "}
            {<BsLinkedin className="ml-4 mr-2 cursor-pointer" />} linkedin
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact
