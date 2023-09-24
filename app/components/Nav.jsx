import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Nav = ({ btnRef }) => {
  const darkMode = useRef();

  const ShowSearches = (e) => {};
  const handleChange = (e) => {
    if (e.target.checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <nav
      id="navBar"
      className="flex w-full absolute text-2xl font-bold h-20 uppercase justify-center items-center dark:text-slate-50 "
    >
      <div className="flex w-3/4 h-full items-center justify-start ">
        <div className="flex justify-center items-center w-full mx-2 ">
          <span className="dark:after:bg-white">Man</span>
        </div>
        <div className="flex justify-center items-center w-full mx-2 ">
          <span className="dark:after:bg-white">Home</span>
        </div>
        <div className="flex justify-center items-center w-full mx-2 ">
          <span className="dark:after:bg-white">Categories</span>
        </div>
        <div className="flex justify-center items-center w-full mx-2 ">
          <span className="dark:after:bg-white">Winter Sale</span>
        </div>
        <div className="flex justify-center items-center w-full mx-2  mr-14">
          <span className="dark:after:bg-white">Offers</span>
        </div>
        <div className="flex justify-center dark:text-slate-50 items-center border border-2 h-10  border-slate-700 w-full">
          <Image
            src="/search.svg"
            width={30}
            height={30}
            className="w-20 h-full"
          ></Image>
          <input
            onChange={ShowSearches}
            id="searchBox"
            type="text"
            className="w-full text-lg placeholder:dark:text-slate-50 placeholder:text-slate-950 h-full border-none focus:border-none  bg-inherit  text-sm "
            placeholder="Search"
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              ref={darkMode}
              onChange={handleChange}
              type="checkbox"
              class=" sr-only peer"
            />
            <div class="w-16 h-9 mx-6  bg-gray-900 relative flex items-center   rounded-full peer dark:bg-gray-100 peer-checked:after:translate-x-7 peer-checked:after:border-white after:content-[''] after:absolute after:top-1.5 after:left-[7px] after:bg-white dark:after:bg-slate-800 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-slate-50">
              <Image
                src="/light.svg"
                className="flex right-1 absolute "
                width={25}
                height={25}
              ></Image>
              <Image
                src="/dark.svg"
                className="flex left-1 absolute "
                width={25}
                height={25}
              ></Image>
            </div>
          </label>
        </div>
      </div>

      <div className="flex w-1/4 justify-end items-center mx-14 ">
        <div
          onClick={() => {
            btnRef.classList.toggle("activeSideBar");
          }}
          className="border border-gray-900  h-9 w-9 z-20  relative"
        >
          <div className=" ButtonCover w-full h-full active">
            <div className="bg-slate-600 w-3 h-3 absolute top-1 left-1"></div>
            <div className="bg-slate-600 w-3 h-3 absolute top-1 right-1"></div>
            <div className="bg-slate-600 w-3 h-3 absolute bottom-1 left-1"></div>
            <div className="bg-slate-600 w-3 h-3 absolute bottom-1 right-1"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
