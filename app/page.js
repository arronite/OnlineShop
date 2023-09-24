"use client";

import Nav from "./components/Nav";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import CustomSwiper from "./components/CustomSwiper";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setRef } from "./redux/sideBarSlice/sideBarSlice";

export default function Home() {
  const sideBarRef = useRef();
  const dispatch = useDispatch();
  const ref = useSelector((state) => state.ref.ref);
  useEffect(() => {
    dispatch(setRef(sideBarRef));
    console.log("ref set");
  }, sideBarRef);

  return (
    <main className="flex h-screen w-full dark:bg-slate-900  ">
      <div className="flex flex-col w-full overflow-hidden m-8 bg-neutral-200 dark:bg-slate-800">
        <div
          id="topsection"
          className="flex flex-col overflow-hidden w-full h-1/2 relative"
        >
          {ref && <Nav btnRef={ref.current} />}
          <div className=" mx-28 h-full py-10  my-20 flex flex-col ">
            <span
              id="title"
              className="h-48 w-36  text-6xl font-bold dark:text-slate-50"
            >
              BIGGEST DEALS ON TOP BRANDS
            </span>
            <span className="mt-14 w-1/2 text-xl text-neutral-500 dark:text-neutral-200 font-bold">
              Updated the language of comfort with these
            </span>
            <button className="w-56 p-6 h-28 mt-10 bg-slate-900 dark:bg-white dark:text-slate-900 text-white ">
              <div className="text-lg font-bold">EXPLORE NOW</div>
            </button>
          </div>
          <div id="MainImage" className="absolute">
            <Image
              src="/mainPicE.png"
              width={3000}
              height={3000}
              className=""
            ></Image>
          </div>
        </div>

        <div
          id="bottomsection"
          className="flex overflow-hidden  w-full h-1/2 relative bg-gray-900"
        >
          <CustomSwiper />
        </div>
      </div>
      <div ref={sideBarRef} className=" sideBar h-screen"></div>
    </main>
  );
}
