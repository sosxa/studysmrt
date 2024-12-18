'use client';
import React, { useState } from 'react';
import ToDoListFE from '../ToDoList/ToDoListFE';
import PemodoroTimer from '../Pomodoro/PemodoroTimer';
import UserSettings from '../Settings/UserSettings';

const CenterBackground = () => {
    // State to hold the times (in seconds) for Pomodoro, Short Break, and Long Break
    const [pomodoroTime, setPomodoroTime] = useState(1500); // 25 minutes in seconds
    const [shortBreakTime, setShortBreakTime] = useState(300); // 5 minutes in seconds
    const [longBreakTime, setLongBreakTime] = useState(600); // 10 minutes in seconds

    // Function to update the times from UserSettings
    const updateTimes = (pomodoroTimeInSeconds: number, shortBreakTimeInSeconds: number, longBreakTimeInSeconds: number) => {
        setPomodoroTime(pomodoroTimeInSeconds);
        setShortBreakTime(shortBreakTimeInSeconds);
        setLongBreakTime(longBreakTimeInSeconds);
    };

    return (
        <div className="w-full flex justify-center flex-col lg:flex-row bg-primary px-4 lg:px-16 xl:px-[7rem] 2xl:px-[15rem]">
            {/* Sidebar for UserSettings */}
            <aside className="bg-primary shadow-lg w-full lg:w-min p-4">
                {/* Pass the updateTimes function as a prop */}
                <UserSettings updateTimes={updateTimes} />
            </aside>

            {/* Main content area */}
            <div className="flex flex-col lg:flex-row flex-grow space-y-8 md:space-y-0 md:space-x-8 p-7 bg-secondary">
                {/* ToDoListFE */}
                <div className="flex-1">
                    <ToDoListFE />
                </div>

                {/* PemodoroTimer */}
                <div className="flex-1">
                    {/* Pass the current times (in seconds) to PemodoroTimer */}
                    <PemodoroTimer
                        pomodoroTime={pomodoroTime}
                        shortBreakTime={shortBreakTime}
                        longBreakTime={longBreakTime}
                    />
                </div>
            </div>
        </div>
    );
}

export default CenterBackground;
