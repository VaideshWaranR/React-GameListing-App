import React, { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMoonSharp } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { Themecontext } from "../Context/Context";
function Header() {
  
   const {theme,settheme} = useContext(Themecontext)
  return (
    <div className='flex justify-between mb-5'>
      <h1 className="bg-slate-800 text-white dark:bg-slate-100 dark:text-black  w-[12%] lg:w-[4%] text-center py-1  rounded-md">
        Logo
      </h1>
      <div className="ml-6 mr-2 flex justify-evenly w-full   bg-slate-400 dark:bg-slate-200 rounded-full">
        <div className="text-black dark:text-black cursor-pointer ml-2 mr-1 flex justify-center items-center">
          <BsSearch size="1em" />
        </div>
        <input
          type="text"
          placeholder="Enter the game name"
          className="font-semibold tracking-tight text-black outline-none rounded-full w-full  dark:bg-slate-200 p-1 dark:text-black bg-slate-400  text-sm"
        />
      </div>
      <button
        className="  cursor-pointer ml-1 p-1 rounded-[50%] bg-slate-100"
      >
        {theme==='light' ? (
          <>
            <IoMoonSharp 
            onClick={() => {console.log(theme);localStorage.setItem('theme','dark');settheme('dark')}}size="2em" />
          </>
        ) : (
          <>
            <MdSunny 
            onClick={() => {console.log(theme);localStorage.setItem('theme','light');settheme('light')}}size="2em" />
          </>
        )}
      </button>
    </div>
  );
}

export default Header;
