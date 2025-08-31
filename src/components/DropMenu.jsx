import { useState } from "react";
import { fontClasses } from "../utils";
import ArrowDown from "../svgs/ArrowDown";
import CheckMark from "../svgs/CheckMark";

const fonts = ["Sans Serif", "Serif", "Mono"];

export default function DropMenu({ font: activeFont, onSetFont, className }) {
  const [show, setShow] = useState(false);
  return (
    <div className={`relative min-w-40  ${className}`}>
      <button
        onClick={() => setShow((c) => !c)}
        className="gap-4 w-full font-bold justify-end flex txt-4 items-center cursor-pointer"
      >
        {activeFont}
        <ArrowDown className={`${show ? "rotate-180" : ""} mr-4 transition-transform duration-300`} />
      </button>
      <ul
        className={`${
          show ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
        } z-10 transition-[opacity_scale] top-10 duration-200 bg-white absolute leading-none  space-y-1 dark:bg-2 right-0  rounded-2xl shadow-lg dark:shadow-[0px_5px_20px_#a445ed] w-46 p-4`}
      >
        {fonts.map((font) => (
          <MenuItem key={font} onSetShow={setShow} onSetFont={onSetFont} activeFont={activeFont}>
            {font}
          </MenuItem>
        ))}
      </ul>
    </div>
  );
}

function MenuItem({ children, onSetFont, activeFont, onSetShow }) {
  const isSelected = children === activeFont;
  return (
    <li
      onClick={() => {
        onSetFont(children);
        onSetShow(false);
      }}
      className={`${
        isSelected ? "pointer-events-none text-9 bg-gray-200 dark:bg-blue-900" : ""
      } txt-4 rounded-md dark:text-white font-bold flex justify-between text-3 dark:hover:bg-blue-900 dark:hover:text-white hover:text-9 cursor-pointer p-2 px-4 hover:bg-gray-200 ${
        fontClasses[children]
      }`}
    >
      {children} {isSelected && <CheckMark className="size-5 " />}
    </li>
  );
}
