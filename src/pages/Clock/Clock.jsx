import React from "react";
import Bottombar from "../../Components/Bottombar";
import { CiLocationArrow1 } from "react-icons/ci";

const Clock = () => {
  return (
    <div className="h-screen w-full   text-black flex items-center justify-center">
 
 <div className="h-[85vh] w-[21%] rounded-2xl bg-linear-to-b from-yellow-50 to-white overflow-hidden">
        <div className="min-h-[76vh] flex items-center justify-center w-full ">
          <div className="flex-col Actay t flex px-2  items-center justify-center w-full">
            <div className="flex mt-3 items-center justify-center gap-2">
            <CiLocationArrow1 />
            <h3>Indonesia</h3>
            </div>
            <h5 className="Actay mt-2 text-[2vh] opacity-60">December 13 January 2025</h5>
            <h5 className="Actay  font-semibold text-4xl mt-5">01:00 PM</h5>
          
          </div>
       
        </div>
        <Bottombar />
      
    </div>
      
    </div>
  );
};

export default Clock;
