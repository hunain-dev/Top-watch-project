import React from "react";
import Bottombar from "../../Components/Bottombar";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io";

const Clock = () => {
  return (
    <div className="h-screen w-full   text-black flex items-center justify-center">
 
 <div className="max-h-[85vh] min-w-[21%] rounded-2xl bg-linear-to-b from-yellow-50 to-white overflow-hidden">
        <div className="min-h-[76vh] flex items-start flex-col justify-start w-full ">
          <div className="py-2 px-2 relative  w-full  flex items-end justify-end">
          <IoMdAddCircle className="text-2xl cursor-pointer" />

          <div className="absolute top-0 left-0 h-[70vh] w-full"></div>



          </div>
          <div className="flex-col mt-15 Actay t flex px-2  items-center justify-center w-full">
            <div className="flex mt-3 items-center justify-center gap-2">
            <CiLocationArrow1 />
            <h3>Pakistan.</h3>
            </div>
            <h5 className="Actay mt-2 text-[2vh] opacity-60">December 14 January 2025</h5>
            <h5 className="Actay  font-semibold text-4xl mt-5">02:29 PM</h5>
          
          </div>
       
        </div>
        <Bottombar />
      
    </div>
      
    </div>
  );
};

export default Clock;
