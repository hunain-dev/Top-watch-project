import { useEffect, useState } from "react";
import Bottombar from "../../Components/Bottombar";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io";
const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new date())
    }, 1000);

    return () => clearInterval(interval);
  }, [])
  

  const formatTime  = (date) =>{
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const minStr = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minStr} ${ampm}`;
  }

  const formatDate = (date) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };


  
  return (
    <div className="h-screen w-full   text-black flex items-center justify-center">
 
 <div className="max-h-[85vh] min-w-[21%] rounded-2xl bg-linear-to-b from-yellow-50 to-white overflow-hidden">
        <div className="min-h-[76vh] flex items-start flex-col justify-start w-full ">
          {/* <div className="py-2 px-2 relative  w-full  flex items-end justify-end">
          <IoMdAddCircle className="text-2xl cursor-pointer" />

        


          </div> */}
          <div className="flex-col mt-15 Actay t flex px-2  items-center justify-center w-full">
            <div className="flex mt-3 items-center justify-center gap-2">
            <CiLocationArrow1 />
            <h3>Pakistan.</h3>
            </div>

            <h5 className="Actay mt-2 text-[2vh] opacity-60">{formatDate(date)}</h5>
            <h5 className="Actay  font-semibold text-4xl mt-5">{formatTime(date)}</h5>
          
          </div>
       
        </div>
        <Bottombar />
      
    </div>
      
    </div>
  );
};

export default Clock;
