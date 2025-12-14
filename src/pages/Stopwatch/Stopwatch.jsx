import React, { useRef, useState } from "react";
import Bottombar from "../../Components/Bottombar";

const Stopwatch = () => {
  const [time, settime] = useState(0);
  const [isRunning, setisRunning] = useState(false);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
      setisRunning(true);
      intervalRef.current = setInterval(() => {
        settime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setisRunning(false);
    }
  };

  const ResetStopbutton = () => {
    clearInterval(intervalRef.current);
    setisRunning(false);
    settime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="h-screen   gap-20 flex items-center justify-center">
      <div className="max-h-[85vh] min-w-[21%] rounded-2xl   bg-linear-to-b from-yellow-50 to-white overflow-hidden">
        <div className="min-h-[76vh] w-full ">
          <div className=" flex px-2 mt-1 items-end justify-end w-full">
          <button 
          onClick={ResetStopbutton}
        className="Actay text-[1.1vw]  cursor-pointer transition-all bg-[#161616] text-white px-6 py-2 rounded-lg
 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        Reset
      </button>
          </div>
          <div className="h-full py-14  w-full flex px-3 items-center justify-center">
            <div className=" flex-col gap-13 w-full flex  items-center justify-center">
              <div className="bg-[#151515] w-fit px-16 py-21 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                <h4 className="Actay text-4xl text-white">
                  {formatTime(time)}
                </h4>
              </div>

              <button
                onClick={isRunning ? stopStopwatch : startStopwatch}
                className="Actay text-[1vw]  cursor-pointer transition-all bg-[#161616] text-white px-6 py-2 rounded-lg
 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                  {isRunning ? "Stop" : "Start"}

              </button>
            </div>
          </div>
        </div>
        <Bottombar />
      </div>
    </div>
  );
};

export default Stopwatch;
