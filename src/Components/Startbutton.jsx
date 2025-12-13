import React, { useState } from "react";

const Startbutton = () => {
    const [Startstop, setStartstop] = useState("Start")

    const handleclick = () =>{
        setStartstop(prev =>(prev == "Start" ? "Stop" : "Start"));
    }
  return (
    <div>
      <button onClick={handleclick}
        className="Actay text-[1vw]  cursor-pointer transition-all bg-[#161616] text-white px-6 py-2 rounded-lg
 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        {Startstop}
      </button>
    </div>
  );
};

export default Startbutton;
