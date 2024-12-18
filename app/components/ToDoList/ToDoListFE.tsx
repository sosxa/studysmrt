'use client';
import React, { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import HamburgerButton from "./HamburgerButton";

const ToDoListFE = () => {
    // Tracks input of the user's task
    const [typingTask, setTypingTask] = useState<string>("");

    // Tracks the list of tasks
    const [tasks, setTasks] = useState<{ id: number, task: string, completed: boolean }[]>([]);

    // Function to add a new task
    const addTask = () => {
        if (typingTask.trim() === "") return;

        const newTask = {
            id: tasks.length + 1,
            task: typingTask,
            completed: false,
        };

        // Update tasks state by adding the new task
        setTasks([...tasks, newTask]);
        setTypingTask(""); // Clear the input field
    };

    // Function to toggle the completed status of a task
    const toggleTaskCompleted = (taskId: number) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks); // Update the tasks state
    };

    const removeTask = (taskId: number) => {
        const remove = tasks.filter(task => task.id !== taskId);
        setTasks(remove);
    };

    return (
        <div className="w-full Auto">
            <div className="w-full">
                <h1 className="text-textColor font-semibold text-[2rem] w-full py-4">ToDo List</h1>

                <div className="mx-auto z-10">
                    <div className="relative z-10">
                        {/* <div className="w-full absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> */}
                            <input
                                type="text"
                                id="text"
                                className={"z-10 block w-full p-4 ps-10 text-textColor border border-gray-300 rounded-lg bg-secondary text-textColor pr-[7rem] overflow-x-auto whitespace-nowrap scroll-smooth lg:hidden"}
                                placeholder="Tasks..."
                                value={typingTask}
                                onChange={(e) => setTypingTask(e.target.value)}
                            />
                            <textarea
                                dir="ltr" // Keep text input direction LTR
                                className={"z-10 lg:block lg:w-full lg:p-4 ps-10 lg:text-textColor lg:border lg:border-gray-300 lg:rounded-lg lg:bg-secondary lg:text-textColor lg:pr-[7rem] lg:resize-none lg:scroll-smooth hidden"}
                                rows={1}
                                placeholder="Tasks..."
                                value={typingTask}
                                onChange={(e) => setTypingTask(e.target.value)}
                            />
                            <button
                                onClick={addTask}
                                className="bg-primary text-textColor absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                            >
                                Add Task
                            </button>
                        {/* </div> */}
                    </div>
                </div>

                <ul className="py-3">
                    {tasks.map((task) => (
                        <div key={task.id} className="flex items-center space-x-4 mb-2">
                            {/* Task checkbox */}
                            <li className="px-2 inline-flex items-center">
                                <label className="flex items-center cursor-pointer relative">
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[--primary-color] checked:border-[--primary-color]"
                                        id="check"
                                        onChange={() => toggleTaskCompleted(task.id)} // Toggle task completion
                                    />
                                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </label>
                            </li>

                            {/* Task text */}
                            <li
                                className={`text-textColor hover:cursor-pointer text-xl py-1 flex-1 break-all ${task.completed ? 'line-through' : ''}`}
                                onClick={() => toggleTaskCompleted(task.id)} // Toggle completion on click
                            >
                                {task.task}
                            </li>

                            {/* Hamburger slider when clicked transforms into a button with an "X" */}
                            {/* <HamburgerButton /> */}

                            {/* Trash can icon */}
                            <li
                                className="w-auto h-auto text-textColor hover:cursor-pointer mt-1 text-xl py-1"
                                onClick={() => removeTask(task.id)}
                            >
                                <FaTrashCan />
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDoListFE;
