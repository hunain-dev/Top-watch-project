import React from 'react'
import Stopwatch from './pages/Stopwatch/Stopwatch'
import { Route, Routes } from 'react-router-dom'
import Alarm from './pages/Alarm/Alarm'
import Clock from './pages/Clock/Clock'

const App = () => {
  return (
    <div className='h-screen w-full bg-[#151515]'>

      <Routes>
          <Route path="/" element={<Stopwatch />} />
          {/* <Route path="/Alarm" element={<Alarm />} /> */}
          <Route path="/Clock" element={<Clock />} />
        </Routes>


      
    </div>
  )
}

export default App
