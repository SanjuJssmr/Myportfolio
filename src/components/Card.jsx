import React from 'react'


const Card = (props) => {
  return (
    <div className=" md:m-10 md:w-1/4 shadow-lg  border-none  shadow-[#1d2615] drop-shadow-2xl bottom-2 p-3 rounded-lg sm:m-24 sm:mt-7 sm:mb-7  ">
      <div className="flex items-center justify-between m-5 ">
        <img src={props.src} alt="img" className="w-10 h-10 border-2 p-1 " />
        <h1 className="font-bold text-[#1d2615] opacity-75 text-2xl flex justify-center items-center">
          {props.title}
        </h1>
      </div>
      <p className="mr-5 ml-5 mb-5 text-[#1d2615] opacity-60 text-xs">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid itaque
        vel perspiciatis cum vero eligendi earum aut possimus. Debitis sit sunt
        obcaecati aut nobis magnam eveniet nostrum aliquid eius iusto.
      </p>
      <a
        href="#"
        className="flex items-center justify-center text-gray-50 font-bold hover:opacity-80 opacity-50 bg-[#1d2615] ml-5 mr-5 p-2 rounded-lg"
      >
        Read More
      </a>
    </div>
  );
}

export default Card
