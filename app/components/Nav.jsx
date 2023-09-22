import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <nav
      id="navBar"
      className="flex w-full text-xl font-bold h-14 uppercase justify-center items-center "
    >
      <div className="flex w-3/5 justify-start">
        <div className="flex justify-center items-center w-full">
          <span>Man</span>
        </div>
        <div className="flex justify-center items-center w-full">
          <span>Home</span>
        </div>
        <div className="flex justify-center items-center w-full">
          <span>Categories</span>
        </div>
        <div className="flex justify-center items-center w-full">
          <span>Winter Sale</span>
        </div>
        <div className="flex justify-center items-center w-full mr-14">
          <span>Offers</span>
        </div>
        <div className="flex justify-center items-center border border-2 h-10  border-slate-700 w-full">
          <Image
            src="/search.svg"
            width={20}
            height={20}
            className="ml-5"
          ></Image>
          <input
            id="searchBox"
            type="text"
            className="w-full h-full bg-inherit mx-2 text-sm "
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex w-2/5 justify-end items-center mx-14 ">
        <div className="border border-gray-900 p-1 h-9 w-9  relative">
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
