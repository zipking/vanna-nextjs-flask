import { useRoot } from "@/context/ContextProvider";
import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Sidebar() {
  const { showSideBar, handleShowSideBar } = useRoot();
  const handleShow = () => {
    handleShowSideBar(!showSideBar);
  };

  return (
    <div
      className={`z-50 min-h-screen transition-colors duration-300 ease-linear ${
        showSideBar ? "w-3/4 sm:w-1/4 bg-black" : "w-18 bg-slate-700"
      } flex justify-start items-start px-2 ${
        showSideBar ? "shadow-right" : ""
      }`}
    >
      <p
        className={`${showSideBar ? "my-3 mx-2 p-2 font-extrabold" : "hidden"}`}
      >
        Proj AI
      </p>
      <button
        className={`transition p-2 my-4 mx-2 rounded hover:-translate-y-1 hover:scale-110 duration-300 border ${
          showSideBar ? "ml-auto" : ""
        }`}
        onClick={handleShow}
      >
        <HiMenuAlt3 />
      </button>
    </div>
  );
}
