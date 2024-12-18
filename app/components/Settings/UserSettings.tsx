/*
passing the settings the user inputs here into the centerbackground which than updates the state
*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ColorPicker from '../ColorPicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const UserSettings = ({ updateTimes }: { updateTimes: (pomodoroTime: number, shortBreakTime: number, longBreakTime: number) => void }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State to store user input times (in minutes)
    const [pomodoroTime, setPomodoroTime] = useState<number>(25);
    const [shortBreakTime, setShortBreakTime] = useState<number>(5);
    const [longBreakTime, setLongBreakTime] = useState<number>(10);

    // State for error message if input is invalid
    const [error, setError] = useState<string>('');

    // Open the modal
    const openModal = () => setIsModalOpen(true);

    // Close the modal
    const closeModal = () => setIsModalOpen(false);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto'; // Cleanup in case the component unmounts
        };
    }, [isModalOpen]);

    // Close the modal if the user clicks outside the modal content
    const handleClickOutside = (e: React.MouseEvent) => {
        const modalContent = e.target as HTMLElement;
        if (modalContent.classList.contains('modal-overlay')) {
            closeModal();
        }
    };

    // Handle input change and validation
    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<number>>) => {
        const value = parseInt(event.target.value);

        if (value <= 0 || value === null || value === undefined || value.toString() === "NaN") {
            setError('Time must be greater than zero');
            setter(25)
        } else if (value >= 100) {
            setError('Minutes must be less than 100');
            setter(25)
        } else {
            setError('');
            setter(value);
            console.log("value");
            console.log(value);
        }
    };

    // Call the update function to propagate the new times
    useEffect(() => {
        // Convert times to seconds before updating the parent state
        updateTimes(pomodoroTime * 60, shortBreakTime * 60, longBreakTime * 60);
    }, [pomodoroTime, shortBreakTime, longBreakTime, updateTimes]);

    return (
        <div className=''>
            {/* Gear icon that triggers the modal */}
            <div>
                <FontAwesomeIcon
                    className="text-4xl text-white font-bold cursor-pointer mx-2 z-40"
                    icon={faGear}
                    onClick={openModal}
                />
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="z-50 fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 modal-overlay"
                    onClick={handleClickOutside}
                >
                    <div className="bg-white p-6 rounded-lg w-full max-w-md h-[80%] overflow-y-scroll">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Settings</h2>
                            <button onClick={closeModal} className="text-gray-500 hover:text-gray-800">
                                <span className="text-2xl">x</span>
                            </button>
                        </div>

                        <div className="mt-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Pomodoro Time (minutes)</label>
                                <input
                                    type="number"
                                    value={pomodoroTime}
                                    onChange={(e) => handleTimeChange(e, setPomodoroTime)}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    min="1"
                                />
                            </div>

                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-700">Short Break Time (minutes)</label>
                                <input
                                    type="number"
                                    value={shortBreakTime}
                                    onChange={(e) => handleTimeChange(e, setShortBreakTime)}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    min="1"
                                />
                            </div>

                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-700">Long Break Time (minutes)</label>
                                <input
                                    type="number"
                                    value={longBreakTime}
                                    onChange={(e) => handleTimeChange(e, setLongBreakTime)}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    min="1"
                                />
                            </div>

                            {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
                        </div>
                        <div className='pt-4'>
                            <h2 className="text-xl font-semibold">Theme</h2>
                            <ColorPicker />
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={closeModal}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserSettings;
