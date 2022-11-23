import React from 'react'
import pn from "../images/prj1.jpg";
import pm from "../images/prj2.jpg";

const Prjct = (props) => {
  return (
    <div className=" m-10 md:w-1/2  ">
      <img
        src={props.src}
        alt="img"
        className=" p-1 shadow-2xl shadow-[#1d2615] drop-shadow-lg  cursor-pointer rounded-lg "
      />
    </div>
  );
}

export default Prjct