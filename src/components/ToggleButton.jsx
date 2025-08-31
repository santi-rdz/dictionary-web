import { useEffect } from "react";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";

export default function ToggleButton() {
  function handleTheme() {
    const isDark = document.body.classList.contains("dark");
    document.body.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  }

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    document.body.classList.toggle("dark", isDark);
  }, []);

  return (
    <div onClick={handleTheme} className="  flex gap-4 cursor-pointer items-center">
      <div className="w-10 h-6 bg-9 rounded-full relative">
        <div className="size-4 dark:right-full dark:translate-[100%] dark:-translate-y-1/2 transition-transform duration-300   rounded-full absolute left-1 top-1/2 -translate-y-1/2 bg-white"></div>
      </div>
      <img src={moonIcon} className="dark:hidden flex" />
      <img src={sunIcon} className="hidden dark:flex" />
    </div>
  );
}
