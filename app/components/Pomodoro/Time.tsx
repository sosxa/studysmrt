import React, { useEffect, useState } from "react";

interface TimeProps {
    userTime: number; // userTime should be a number, not 'any'
    pauseTime: boolean;
}

const Time: React.FC<TimeProps> = ({ userTime, pauseTime }) => {
    const [time, setTime] = useState(userTime); // Initialize the state with userTime
    const [paused, setPaused] = useState(pauseTime); // Control if the timer is paused

    // Timer effect
    useEffect(() => {
        // If the timer is paused or time is 0, don't start the interval
        if (paused || time === 0) return;

        const timer = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(timer); // Clear interval when time runs out
                    return 0;
                }
                return prevTime - 1; // Decrease the time by 1 second
            });
        }, 1000);

        // Cleanup the timer when the component unmounts or when paused
        return () => clearInterval(timer);
    }, [paused]); // Only depend on `paused`, so timer only starts/stops when paused changes

    // Toggle pause and resume
    const togglePause = () => {
        setPaused((prevPaused) => !prevPaused); // Toggle paused state
    };

    // Reset the timer to initial userTime
    const restart = () => {
        setTime(userTime); // Reset to the original userTime
    };

    // Effect to handle when userTime changes (reset the time when userTime is updated)
    useEffect(() => {
        setTime(userTime); // When userTime changes, reset the time state
    }, [userTime]); // This hook runs whenever userTime changes

    return (
        <div className="App flex flex-col items-center justify-center">
            <p className="text-6xl font-bold text-primary mb-4">
                {`${Math.floor(time / 60)}`.padStart(2, "0")}:
                {`${time % 60}`.padStart(2, "0")}
            </p>
            <div className="flex gap-4">
                <button
                    onClick={togglePause}
                    className="text-textColor text-xl py-3 px-6 rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    {paused ? "Resume" : "Pause"}
                </button>
                <button
                    onClick={restart}
                    className="text-textColor text-xl py-3 px-6 rounded-md bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                    Reset
                </button>
            </div>
        </div>
    );

};

export default Time;
