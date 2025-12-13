import React from 'react'
import { CiAlarmOff } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { GoStopwatch } from "react-icons/go";

const Bottombar = () => {
  return (
<div className="min-h-screen flex flex-col">


  <div className=" text-black w-full px-3  flex items-center justify-around">
    <div className='h-full'>
    <CiAlarmOff   className='text-2xl m-auto' />
  <h4 className='Actay text-[0.8vw] mt-1'>Alarm</h4>

    </div>
    <div className='h-full'>
    <CiClock2  className='text-2xl m-auto' />
    <h4 className='Actay text-[0.8vw] mt-1'>Clock</h4>

    </div>
    <div className='h-full  '>
    <GoStopwatch  className='text-2xl m-auto' />
    <h4 className='Actay text-[0.8vw] mt-1'>Stopwatch</h4>

    </div>


  </div>
</div>

  )
}

export default Bottombar
