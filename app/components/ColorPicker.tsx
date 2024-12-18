'use client';
// components/ColorPicker.tsx
import { useState, useEffect } from 'react';

const ColorPicker: React.FC = () => {
  const [primaryColor, setPrimaryColor] = useState<string>('#1e40af'); // Default primary color
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff'); // Default background color
  const [textColor, setTextColor] = useState<string>('#333333'); // Default text color

  // Handle primary color change
  const handlePrimaryColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setPrimaryColor(newColor);
    document.documentElement.style.setProperty('--primary-color', newColor); // Update CSS variable
    localStorage.setItem('primaryColor', newColor); // Save color to localStorage
  };

  // Handle background color change
  const handleBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setBackgroundColor(newColor);
    document.documentElement.style.setProperty('--background-color', newColor); // Update CSS variable
    localStorage.setItem('backgroundColor', newColor); // Save color to localStorage
  };

  // Handle text color change
  const handleTextColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setTextColor(newColor);
    document.documentElement.style.setProperty('--text-color', newColor); // Update CSS variable
    localStorage.setItem('textColor', newColor); // Save color to localStorage
  };

  // Load saved colors from localStorage on component mount
  useEffect(() => {
    const savedPrimaryColor = localStorage.getItem('primaryColor');
    const savedBackgroundColor = localStorage.getItem('backgroundColor');
    const savedTextColor = localStorage.getItem('textColor');

    if (savedPrimaryColor) {
      setPrimaryColor(savedPrimaryColor);
      document.documentElement.style.setProperty('--primary-color', savedPrimaryColor);
    }

    if (savedBackgroundColor) {
      setBackgroundColor(savedBackgroundColor);
      document.documentElement.style.setProperty('--background-color', savedBackgroundColor);
    }

    if (savedTextColor) {
      setTextColor(savedTextColor);
      document.documentElement.style.setProperty('--text-color', savedTextColor);
    }
  }, []);

  return (
    <div className="space-y-6 p-6 rounded-lg pb-4">
      {/* Primary Color Section */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-700">Primary Color</label>
        <input
          type="color"
          value={primaryColor}
          onChange={handlePrimaryColorChange}
          className="w-full h-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      {/* Background Color Section */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-700">Background Color</label>
        <input
          type="color"
          value={backgroundColor}
          onChange={handleBackgroundColorChange}
          className="w-full h-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      {/* Text Color Section */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-700">Text Color</label>
        <input
          type="color"
          value={textColor}
          onChange={handleTextColorChange}
          className="w-full h-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
    </div>
  );
};

export default ColorPicker;
