"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

import Nav from "../../components/Nav";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchData } from "../redux/dataSlice/dataSlice";
import { Autoplay } from "swiper/modules";

import { useEffect, useRef, useState } from "react";
import BreadCrump from "@/components/BreadCrump";
import { Rating, Typography } from "@mui/material";

export default function Item({ params }) {
  const [pageData, setPageData] = useState();
  const rawData = useSelector((state) => state.data.data);
  const sideBarRef = useRef();
  const [ref, setRef] = useState();
  const dispatch = useDispatch();

  //fetchData
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    if (rawData.length > 0) {
      rawData.map((item) => {
        item.map((info) => {
          if (info.id == params.id) {
            setPageData(info);
          }
        });
      });
    }
  }, [rawData]);

  useEffect(() => {}, [pageData]);

  useEffect(() => {
    setRef(sideBarRef);
    console.log("ref set");
  }, sideBarRef);

  const ShowSlides = pageData?.images?.map((image, index) => (
    <SwiperSlide className="h-full w-full flex" key={index}>
      <Image
        className="h-full w-full flex"
        src={image} // Use the actual image URL from your data
        width={3000}
        height={3000}
      />
    </SwiperSlide>
  ));

  AOS.init();
  console.log(pageData);
  return (
    <main className="flex  h-full w-full  dark:bg-slate-900  ">
      <div className="flex flex-col w-full overflow-hidden  m-8 bg-neutral-200 dark:bg-slate-800">
        {ref && <Nav btnRef={ref.current} />}

        {pageData && (
          <div id="itemContainer" className="flex flex-col   w-full">
            <div className="flex w-full ">
              <div
                data-aos="fade-right"
                data-aos-duration="300"
                id="backPanel"
                className=" h-full  pr-44 bg-neutral-700 dark:bg-slate-700"
              >
                <Swiper
                  grabCursor={true}
                  effect={"creative"}
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: ["-20%", 0, -1],
                    },
                    next: {
                      translate: ["100%", 0, 0],
                    },
                  }}
                  modules={[EffectCreative, Autoplay]}
                  autoplay
                  className="h-full w-auto"
                >
                  {ShowSlides}
                  <SwiperSlide className="h-full text-2xl text-neutral-100  w-full flex bg-neutral-700 dark:bg-slate-700">
                    <span className=" flex h-full justify-center items-center mx-3">
                      StellarTech Manufacturing is a fictitious factory that
                      weaves a captivating story through the realms of
                      imagination. Founded in an alternate universe where the
                      extraordinary becomes ordinary, this factory has a history
                      filled with remarkable events, innovations, and twists
                      that are beyond the bounds of reality.
                    </span>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="flex flex-col  h-full mx-10 ">
                <BreadCrump />

                <span className="text-4xl font-semibold">{pageData.name}</span>
                <span className=" mb-10">
                  <Typography
                    className="text-base text-slate-500"
                    component="legend"
                  >
                    <span className="after:content-[''] after:mx-2 after:inline-block after:rounded after:w-2  after:h-2  after:bg-slate-400 ">
                      {pageData.rating}
                    </span>
                    <span className="after:content-[''] after:mx-2 after:inline-block after:rounded after:w-2  after:h-2  after:bg-slate-400 ">
                      {pageData.totalReviews} Total Reviews
                    </span>
                  </Typography>

                  <Rating name="read-only" value={pageData.rating} readOnly />
                </span>
                <span className="text-xl ">Color</span>
              </div>
            </div>
            <div className="flex my-96">
              <div data-aos="fade-up" data-aos-duration="3000">
                adsasdsadsda
              </div>
            </div>
          </div>
        )}
      </div>

      <div ref={sideBarRef} className=" sideBar h-screen"></div>
    </main>
  );
}
