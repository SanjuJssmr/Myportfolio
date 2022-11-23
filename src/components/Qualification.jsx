import React from 'react'
import { BsCalendarCheckFill } from 'react-icons/bs'
import { FaGraduationCap } from "react-icons/fa";

const Qualification = () => {
    return (
      <>
        <div className="flex flex-col items-center justify-center m-10 ">
          <h1 className="font-bold  text-[#496a2f] uppercase  ">Qualification</h1>
                <h2 className="text-3xl font-medium text-[#79b84a] flex items-center justify-center gap-2">Education { <FaGraduationCap/>}</h2>
          <p className="text-[#1d2615] opacity-60 w-1/2 text-center">
            My personal journey
          </p>
        </div>
        <div class="my-10 w-full flex justify-center items-center mb-16">
          <div class="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
            <div class="col-span-4 pl-4 w-full h-full ">
              <div class="w-full h-full bg-[#1d2615] bg-opacity-90 drop-shadow-xl shadow-xl rounded-md p-2 md:pl-4">
                <h1 class="  text-[#79b84a] font-semibold text-lg py-1 flex items-center justify-center border-b-[#fff] border-b-[1px] border-opacity-30">
                  Schooling
                </h1>
                <p class="  text-[#effae4] sm:text-sm font-semibold p-2 flex items-center justify-center">
                  Anderson.hr.sec.school
                </p>
                <div className="flex gap-3 items-center text-lg font-semibold  text-[#79b84a] pt-2 justify-center border-t-[#fff] border-t-[1px] border-opacity-30 ">
                  {
                    <BsCalendarCheckFill className="flex items-center justify-center " />
                  }
                  2011-2018
                </div>
              </div>
            </div>
            <div class="relative col-span-1 w-full h-full flex justify-center items-center">
              <div class="h-full w-1 bg-[#1d2615] bg-opacity-60"></div>
              <div class="absolute w-6 h-6 rounded-full bg-[#1d2615] bg-opacity-90 z-10 text-white text-center">
                1
              </div>
            </div>
            <div class="col-span-4 w-full h-full"></div>

            <div class="col-span-4 w-full h-full"></div>
            <div class="relative col-span-1 w-full h-full flex justify-center items-center">
              <div class="h-full w-1 bg-[#1d2615] bg-opacity-60"></div>
              <div class="absolute w-6 h-6 rounded-full bg-[#1d2615] bg-opacity-90 z-10 text-white text-center">
                2
              </div>
            </div>
            <div class="col-span-4 w-full h-full pr-4 ">
              <div class="w-full h-full bg-[#1d2615] bg-opacity-90 drop-shadow-xl shadow-xl rounded-md p-2 md:pl-4">
                <h1 class="  text-[#79b84a] font-semibold text-lg py-1 flex items-center justify-center border-b-[#fff] border-b-[1px] border-opacity-30">
                  Under_Graduate
                </h1>
                <p class="  text-[#effae4] sm:text-sm font-semibold p-2 flex items-center justify-center">
                  SCSVMV ( BSC.CS )
                </p>
                <div className="flex gap-3 items-center text-lg font-semibold  text-[#79b84a] pt-2 justify-center border-t-[#fff] border-t-[1px] border-opacity-30 ">
                  {
                    <BsCalendarCheckFill className="flex items-center justify-center " />
                  }
                  2018-2021
                </div>
              </div>
            </div>

            <div class="col-span-4 w-full h-full pl-4 ">
              <div class="w-full h-full bg-[#1d2615] bg-opacity-90 drop-shadow-xl shadow-xl rounded-md p-2 md:pl-4">
                <h1 class="  text-[#79b84a] font-semibold text-lg py-1 flex items-center justify-center border-b-[#fff] border-b-[1px] border-opacity-30">
                  Post_Graduate
                </h1>
                <p class="  text-[#effae4] sm:text-sm font-semibold p-2 flex items-center justify-center">
                  TEC ( MCA )
                </p>
                <div className="flex gap-3 items-center text-lg font-semibold  text-[#79b84a] pt-2 justify-center border-t-[#fff] border-t-[1px] border-opacity-30 ">
                  {
                    <BsCalendarCheckFill className="flex items-center justify-center " />
                  }
                  2021-Present
                </div>
              </div>
            </div>
            <div class="relative col-span-1 w-full h-full flex justify-center items-center">
              <div class="h-full w-1 bg-[#1d2615] bg-opacity-60"></div>
              <div class="absolute w-6 h-6 rounded-full bg-[#1d2615] bg-opacity-90 z-10 text-white text-center">
                3
              </div>
            </div>
            <div class="col-span-4 w-full h-full"></div>
          </div>
        </div>
        <div className="  border-[#1d2615] border-[1px] border-opacity-30 sm:mx-10 lg:mx-40 " />
      </>
    );
}

export default Qualification
