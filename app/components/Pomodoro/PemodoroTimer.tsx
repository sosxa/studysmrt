/*
displays the state from centerbackground which comes from usersettings, this function hence the file name focuses on the timer itself
*/
'use client';
import React, { useState, useEffect } from 'react';
import Time from './Time';

const PemodoroTimer = ({ pomodoroTime, shortBreakTime, longBreakTime }: { 
  pomodoroTime: number, 
  shortBreakTime: number, 
  longBreakTime: number 
}) => {
  const [section, setSection] = useState<string>("Pomodoro");
  const [time, setTime] = useState(pomodoroTime); // Initialize with the prop value
  const [paused, setPaused] = useState(true);

  // Options for the timer
  const options = ["Pomodoro", "Short Break", "Long Break"];

  // Function to handle the selection of the timer option
  const selectedOption = (option: string) => {
    setSection(option); // Update the section when a new option is selected
  };

  // useEffect to update the time when the section changes
  useEffect(() => {
    if (section === "Pomodoro") setTime(pomodoroTime);   // Set time from prop
    if (section === "Short Break") setTime(shortBreakTime);  // Set time from prop
    if (section === "Long Break") setTime(longBreakTime);   // Set time from prop
  }, [section, pomodoroTime, shortBreakTime, longBreakTime]); // Dependency on prop values

  return (
    <section className="place-items-center min-w-screen mx-auto">
      <div className="flex flex-col items-center sm:flex-row w-full gap-4 xl:gap-2 2xl:gap-[-90rem]">
        {options.map((option, index) => (
          <div className="w-full text-center" key={index}>
            <h1
              onClick={() => selectedOption(option)}
              className={`
              ${section !== option ? 'text-textColor text-xl cursor-pointer transition-all rounded' : 'text-[--primary-color] text-xl cursor-pointer transition-all rounded'}`}
            >
              {option}
            </h1>
          </div>
        ))}
      </div>
      <div className="mt-8 w-full max-w-[300px] sm:max-w-[400px]">
        {/* Conditionally render the timer based on the section */}
        <Time userTime={time} pauseTime={paused} />
      </div>
    </section>
  );
};

export default PemodoroTimer;
