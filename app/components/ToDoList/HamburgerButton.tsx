import React, { useState } from 'react';

type HambrugerProps = {

}

const HamburgerButton = () => {
    

    // State to track if the menu is open or closed
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the state of the hamburger
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <button
            className="flex flex-col items-center justify-center space-y-1 w-8 h-8 bg-transparent border-none cursor-pointer"
            onMouseDown={toggleMenu}
        >
            {/* Top bar of the hamburger */}
            <div
                className={`w-6 h-1 bg-black transition-all duration-300 transform ${isOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
            />
            {/* Middle bar of the hamburger */}
            <div
                className={`w-6 h-1 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                    }`}
            />
            {/* Bottom bar of the hamburger */}
            <div
                className={`w-6 h-1 bg-black transition-all duration-300 transform ${isOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
            />
        </button>
    );
};

export default HamburgerButton;
