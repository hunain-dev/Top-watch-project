import React, { useEffect, useState } from "react";
import Bottombar from "../../Components/Bottombar";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";

const Alarm = () => {
  const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  const ampm = ["AM", "PM"];
  const [Alarmcontain, setAlarmcontain] = useState(false);

  // alarm contain close

  const handleClose = () => {
    setAlarmcontain(false);
  };

  // alarm contain open

  const handleOpen = () => {
    setAlarmcontain(true);
  };

  const calculateAlarmDiff = () => {
    const now = new Date();

    let alarmHour = selectedHour % 12;
    if (selectedAmPm === "PM") alarmHour += 12;

    const alarmTime = new Date();
    alarmTime.setHours(alarmHour);
    alarmTime.setMinutes(selectedMinute);
    alarmTime.setSeconds(0);

    // Agar alarm ka time guzar chuka hai → next day
    if (alarmTime <= now) {
      alarmTime.setDate(alarmTime.getDate() + 1);
    }

    const diffMs = alarmTime - now;
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;

    setRingText(`Alarm will ring in ${hours} h ${minutes} min`);
  };

  // all state of alarm page

  const [selectedHour, setSelectedHour] = useState(4);
  const [selectedMinute, setSelectedMinute] = useState(57);
  const [selectedAmPm, setSelectedAmPm] = useState("PM");
  const [ringText, setRingText] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  //  upcomming alarms
  const upcommignalarm = [
    {
      alarmtime: "05:00",
    },
  ];

  // alarms-numbers-scrolling
  const handleWheel = (e, type) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 1 : -1; // scroll down +1, scroll up -1

    if (type === "hour") {
      setSelectedHour((prev) => {
        let next = prev + delta;
        if (next > 12) next = 1;
        if (next < 1) next = 12;
        return next;
      });
    } else if (type === "minute") {
      setSelectedMinute((prev) => {
        let next = prev + delta;
        if (next > 59) next = 0;
        if (next < 0) next = 59;
        return next;
      });
    } else if (type === "ampm") {
      setSelectedAmPm((prev) => (prev === "AM" ? "PM" : "AM"));
    }
  };

  // alarm set time horus and min after ringing

  useEffect(() => {
    calculateAlarmDiff();
  }, [selectedHour, selectedMinute, selectedAmPm]);

  // for updaiting a alarm page is un-development

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full    flex items-center justify-center">
      <div className="h-[85vh] w-[21%] relative rounded-2xl bg-linear-to-b from-yellow-50 to-white overflow-hidden">
        {/* Blur Overlay */}
        {showPopup && (
          <div
            className="absolute inset-0 z-[999] backdrop-blur-md bg-black/40 
                  flex items-center justify-center px-4
                  animate-popup"
          >
            <div
              className="w-full rounded-2xl bg-white px-3 py-10
                    shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <h2 className="Actay text-[2.2vh] text-center text-gray-800">
                The alarm page is under development. Please wait a while
              </h2>
            </div>
          </div>
        )}

        <div className="py-3 min-h-[76vh] w-full  ">
          <div className=" flex px-4 py-4 items-start relative  justify-between w-full">
            <h2 className="Actay text-1xl">Set Alarm</h2>
            <IoIosAddCircleOutline
              className="text-[1.5vw] cursor-pointer"
              onClick={handleOpen}
            />

            {Alarmcontain && (
              <div className=" z-99 w-full absolute top-0 left-0   bg-linear-to-b from-yellow-50 to-white ">
                <div className=" flex items-center justify-between py-4 px-2 w-full ">
                  <RxCross1 onClick={handleClose} className="cursor-pointer" />
                  <h3 className="Actay">New Alarm</h3>
                  <FaCheck
                    className="opacity-55 cursor-pointer"
                    onClick={handleClose}
                  />
                </div>
                <div className=" w-full py-2 flex items-center justify-center">
                  <h2 className="Actay text-[1.9vh]">{ringText}</h2>
                </div>

                <div className="flex gap-4  py-4  items-center justify-center">
                  <div
                    className="h-[5vh]  overflow-hidden relative"
                    onWheel={(e) => handleWheel(e, "hour")}
                  >
                    <div
                      className="flex flex-col items-center transition-transform duration-200"
                      style={{
                        transform: `translateY(-${(selectedHour - 1) * 3}rem)`,
                      }}
                    >
                      {hours.map((h) => (
                        <h2
                          key={h}
                          className={`h-[3rem] ${
                            h === selectedHour
                              ? "text-black Actay text-2xl"
                              : ""
                          }`}
                        >
                          {h}
                        </h2>
                      ))}
                    </div>
                  </div>

                  {/* Minutes */}
                  <div
                    className="h-[5vh]  overflow-hidden relative"
                    onWheel={(e) => handleWheel(e, "minute")}
                  >
                    <div
                      className="flex flex-col items-center transition-transform duration-200"
                      style={{
                        transform: `translateY(-${selectedMinute * 3}rem)`,
                      }}
                    >
                      {minutes.map((m) => (
                        <h2
                          key={m}
                          className={`h-[3rem] ${
                            m === selectedMinute
                              ? "text-black Actay text-2xl"
                              : ""
                          }`}
                        >
                          {m < 10 ? `0${m}` : m}
                        </h2>
                      ))}
                    </div>
                  </div>

                  {/* AM/PM */}
                  <div
                    className="h-[5vh]  overflow-hidden relative"
                    onWheel={(e) => handleWheel(e, "ampm")}
                  >
                    <div
                      className="flex flex-col items-center transition-transform duration-200"
                      style={{
                        transform: `translateY(${
                          selectedAmPm === "AM" ? 0 : -3
                        }rem)`,
                      }}
                    >
                      {ampm.map((ap) => (
                        <h2
                          key={ap}
                          className={`h-[3rem] ${
                            ap === selectedAmPm
                              ? "text-black Actay text-2xl"
                              : ""
                          }`}
                        >
                          {ap}
                        </h2>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="h-full w-full py-5 flex px-3 flex-col items-start gap-6 justify-start">
            {/* Upcomming ALarm */}
            <div className="h-full w-full ">
              <h3 className="Actay text-[1.1vw]">Upcomming Alarm</h3>

              {upcommignalarm.map((elem, index) => {
                return (
                  <div
                    key={index}
                    className=" mt-4 w-full flex items-center justify-between overflow-hidden"
                  >
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
                );
              })}
            </div>
          </div>
        </div>
        <Bottombar />
      </div>
    </div>
  );
};

export default Alarm;
