/* eslint-disable quotes */

"use client";

import { useState } from "react";
import { Menus } from "../constants";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ backgroundColor: "rgba(26, 35, 46,0.9)" }}
      className={` ${
        open ? "" : "translate-x-[100%]"
      } flex items-center w-50 h-screen duration-500 fixed right-0 top-0 z-50`}
    >
      <img
        src="/setting-sidebar.svg"
        className={`absolute cursor-pointer -left-4 top-[50%] w-[32px] h-[32px]
            rounded-full duration-500 ${!open && "rotate-[360deg] opacity-75"}`}
        onClick={() => setOpen(!open)}
      />

      <ul className="pt-6 flex gap-3 flex-col">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`rounded-md cursor-pointer hover:bg-slate-900 text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <a
              href={Menu.href}
              className="flex items-center gap-3 p-2 px-10"
              onClick={() => setOpen(!open)}
            >
              <img
                src={`${Menu.src}`}
                className="w-[24px] h-[24px]"
                alt="logo"
              />
              <span className="origin-left duration-200">{Menu.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SideBar;
