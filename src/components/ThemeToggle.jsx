import React, { useEffect, useState } from "react";
import { IoIosSunny } from "react-icons/io";
import { RiMoonClearFill } from "react-icons/ri";

const ThemeToggle = () => {
  // State to track dark mode, initialized from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Effect to update the document class and localStorage when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    // Button to toggle dark mode state
    <button onClick={() => setDarkMode((prev) => !prev)} className="">
      {darkMode ? (
        <IoIosSunny className="text-white h-7 w-7 " /> // Sun icon for light mode
      ) : (
        <RiMoonClearFill className="text-[#444] h-7 w-7" /> // Moon icon for dark mode
      )}
    </button>
  );
};

export default ThemeToggle;
