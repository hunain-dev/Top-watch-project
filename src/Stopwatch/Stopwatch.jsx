import React from "react";
import Bottombar from "../Components/Bottombar";
import Resetbutton from "../Components/Resetbutton";
import Startbutton from "../Components/Startbutton";

const Stopwatch = () => {
  return (
    <div className="h-screen w-full bg-[#151515] text-white flex items-center justify-center">
      <div className="h-[85vh] w-[21%] rounded-2xl bg-linear-to-b from-yellow-50 to-white overflow-hidden">
        <div className="min-h-[76vh] w-full ">
          <div className=" flex px-2 mt-1 items-end justify-end w-full">
            <Resetbutton />
          </div>
          <div className="h-[60vh] w-full flex px-3 items-center justify-center">
            <div className=" flex-col gap-13 w-full flex  items-center justify-center">
            <div className="bg-[#151515] w-fit px-16 py-21 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
  <h4 className="Actay text-4xl text-white">0:00</h4>
</div>

              <Startbutton/>
            </div>
          </div>
        </div>
        <Bottombar />
      </div>
    </div>
  );
};

export default Stopwatch;
