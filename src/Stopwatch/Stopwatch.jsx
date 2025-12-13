import React from "react";
import Bottombar from "../Components/Bottombar";
import Resetbutton from "../Components/Resetbutton";

const Stopwatch = () => {
  return (
    <div className="h-screen w-full bg-[#151515] text-white flex items-center justify-center">
      <div className="h-[85vh] w-[21%] rounded-2xl bg-linear-to-b from-yellow-50 to-white overflow-hidden">
        <div className="min-h-[76vh] w-full ">
          <div className=" flex px-2 mt-1 items-end justify-end w-full">
            <Resetbutton/>
          </div>
          <div className="h-[60vh] w-full">
            
          </div>
        </div>
        <Bottombar />
      </div>
    </div>
  );
};

export default Stopwatch;
