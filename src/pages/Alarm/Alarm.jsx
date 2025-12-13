import React from "react";
import Bottombar from "../../Components/Bottombar";
import { IoIosAddCircleOutline } from "react-icons/io";
import Clock from "../Clock/Clock";

const Alarm = () => {
    const upcommignalarm = [
        {
            alarmtime:"05:00",
        },
        {
            alarmtime:"01:00",
        },
        {
            alarmtime:"06:00",
        },
        {
            alarmtime:"04:00",
        },
        {
            alarmtime:"07:00",
        },
        
    ]
  return (
    <div className="h-screen w-full    flex items-center justify-center">
      <div className="h-[85vh] w-[21%] rounded-2xl bg-linear-to-b from-yellow-50 to-white overflow-hidden">
        <div className="min-h-[76vh] w-full ">
          <div className=" flex px-4 py-4 items-start  justify-between w-full">
            <h2 className="Actay text-1xl">Set Alarm</h2>
            <IoIosAddCircleOutline className="text-[1.5vw]" />

          </div>
          <div className="h-full w-full flex px-3 flex-col items-start gap-6 justify-start">
            <div className=" w-full mt-7 flex gap-10 items-center justify-center">
                <h2 className="Actay text-5xl mt-2">0:00</h2>
                <h2 className="Actay">AM <br />PM</h2>
            </div>
            {/* Upcomming ALarm */}
             <div className="h-full w-full ">
             <h3 className="Actay text-[1.1vw]">Upcomming Alarm</h3>

                {
                    upcommignalarm.map((elem,index)=>{
                        return(
                            <div key={index} className=" mt-4 w-full flex items-center justify-between overflow-hidden">
                            <h2 className="Actay font-bold">{elem.alarmtime}</h2>
                          
                            <label
                              className="scale-[0.7] origin-right cursor-pointer relative h-[2.3em] w-[5em] rounded-full bg-[hsl(0,0%,7%)]
                              shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)]"
                            >
                              {/* inner border */}
                              <span className="absolute inset-[0.1em] rounded-full border border-[hsl(0,0%,25%)]"></span>
                          
                              {/* left circle */}
                              <div
                                className="absolute left-[0.5em] top-1/2 flex h-[2em] w-[2em]
                                -translate-y-1/2 items-center justify-center rounded-full bg-white
                                shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]"
                              >
                                <div
                                  className="h-[1.5em] w-[1.5em] rounded-full bg-[hsl(0,0%,7%)]
                                  shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]"
                                ></div>
                              </div>
                          
                              {/* right bar */}
                              <div
                                className="absolute right-[0.5em] top-1/2 h-[0.21em] w-[1.5em]
                                -translate-y-1/2 rounded-full bg-[hsl(0,0%,50%)]
                                shadow-[inset_0px_2px_1px_0px_hsl(0,0%,40%)]"
                              ></div>
                          
                              {/* checkbox */}
                              <input type="checkbox" className="peer opacity-0" />
                          
                              {/* moving knob */}
                              <span
                                className="absolute left-[0.25em] top-1/2 flex h-[2.5em] w-[2.5em]
                                -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26)]
                                shadow-[inset_4px_4px_4px_0px_rgba(64,64,64,0.25),inset_-4px_-4px_4px_0px_rgba(16,16,16,0.5)]
                                duration-300 peer-checked:left-[calc(100%-2.75em)]"
                              >
                                <span className="relative h-full w-full rounded-full">
                                  <span className="absolute inset-[0.1em] rounded-full border border-[hsl(0,0%,50%)]"></span>
                                </span>
                              </span>
                            </label>
                          </div>
                        )
                    })
                }
   


             </div>

          </div>
        </div>
        <Bottombar />
      </div>

      
    </div>
    
  );
};

export default Alarm;
