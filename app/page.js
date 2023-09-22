"use client";

import Nav from "./components/Nav";
import Image from "next/image";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export default function Home() {
  const [data, setData] = useState();
  const Slider = useRef();
  const ImagesRef = useRef();
  const [currentX, setCurrentX] = useState(0);
  const transformLeft = () => {
    if (currentX < 0) setCurrentX(currentX + 200);
  };
  const transformRight = () => {
    if (ImagesRef.current) {
      ImagesRef.current.style.animation =
        "myanimation 2s ease-in-out 0.5s infinite";
    }
    setCurrentX(currentX - 200);
  };

  useEffect(() => {
    Slider.current.style.transform = `translateX(${currentX}px)`;
  }, [currentX]);

  const ShowItems = data?.map((item) => {
    return (
      <div className="flex flex-col">
        <div
          ref={ImagesRef}
          style={{ backgroundImage: `url(${item.img}) ` }}
          className="flex flex-col  h-2/3 bg-cover Image  "
        ></div>
        <div className="flex flex-col h-1/3 uppercase bg-neutral-900  ">
          <div className=" text-slate-50 text-4xl my-8">{item.name}</div>
          <div className="flex ">
            <span className="text-slate-50  text-xl mr-10">
              {item.offprice}
            </span>
            <span className="text-orange-400 line-through  ">{item.price}</span>
          </div>
          <div className="my-6">
            <div className="text-green-400 text-xl">BUY NOW</div>
          </div>
        </div>
      </div>
    );
  });

  useEffect(() => {
    axios.get("http://localhost:3000/api/items").then((res) => {
      setData([...res.data]);
    });
  }, []);
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <main className="flex h-screen w-full   ">
      <div className="flex flex-col w-full overflow-hidden m-8 bg-neutral-200">
        <div
          id="topsection"
          className="flex flex-col overflow-hidden w-full h-1/2 relative"
        >
          <Nav />
          <div className=" mx-36 h-96 my-20 flex flex-col ">
            <span id="title" className="h-48 text-6xl font-bold">
              BIGGEST DEALS ON TOP BRANDS
            </span>
            <span className="mt-14 text-lg text-neutral-500 font-bold">
              Updated the language of comfort with these
            </span>
            <button className="w-40 h-20 mt-10 bg-slate-900 text-white ">
              <div className="text-md">EXPLORE NOW</div>
            </button>
          </div>
          <div id="MainImage" className="absolute">
            <Image
              src="/mainPicE.png"
              width={1000}
              height={1000}
              className=""
            ></Image>
          </div>
        </div>

        <div
          id="bottomsection"
          className="flex overflow-hidden  w-full h-1/2 bg-gray-900"
        >
          <div className=" flex w-full h-full relative  ">
            <div className="absolute flex justify-center items-center w-full h-2/3 z-10 ">
              <div className="flex w-1/2 justify-start h-full">
                <button
                  onClick={() => transformLeft()}
                  id="l-btn"
                  className="w-10 ice"
                >{`<`}</button>
              </div>

              <div className="flex w-1/2 justify-end h-full">
                <button
                  onClick={() => transformRight()}
                  id="r-btn"
                  className="w-10 ice "
                >{`>`}</button>
              </div>
            </div>
            <div ref={Slider} id="slider" className="flex w-full relative z-0">
              {ShowItems}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
