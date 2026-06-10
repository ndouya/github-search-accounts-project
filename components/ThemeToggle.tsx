"use client";

import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="flex items-center gap-3 text-xs font-bold tracking-[2.5px] text-[#697C9A] hover:text-[#222731] dark:text-white dark:hover:text-[#90A4AE] transition-colors"
    >
      {darkMode ? (
        <>
          LIGHT <Sun size={20} className="text-white" />
        </>
      ) : (
        <>
          DARK <Moon size={20} className="text-[#697C9A]" />
        </>
      )}
    </button>
  );
}