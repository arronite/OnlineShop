import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Image from "next/image";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import LoadingSkeleton from "./LoadingSkeleton";
import Link from "next/link";
import { fetchData } from "../app/redux/dataSlice/dataSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default () => {
  const rawData = useSelector((state) => state.data.data);
  const stats = useSelector((state) => state.data.loading);
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const swiperRef = useRef();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  useEffect(() => {
    setData(rawData);
  }, [rawData]);

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

  const ShowSlides = data?.map((item) => {
    return (
      <SwiperSlide className="flex flex-col w-full   ">
        <Image
          className=" h-2/3 w-full flex  "
          src={item.img}
          width={10000}
          height={10000}
        ></Image>

        <div className="flex flex-col h-1/3 bg-zinc-900">
          <div className="text-slate-100 my-3 text-4xl uppercase">
            {item.name}
          </div>
          <div className="text-slate-100 flex my-5">
            <span className="text-3xl ml-2">{item.offprice}</span>
            <span className="text-xl mx-6 text-orange-400 line-through">
              {item.price}
            </span>
          </div>
          <Link href={`/${item.id}`}>
            <button class="relative mx-2 w-36 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium   group ">
              <span class="text-green-500 relative text-2xl px-2 py-2.5 transition-all ease-in duration-75 group-hover:bg-opacity-0">
                BUY NOW
              </span>
            </button>
          </Link>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div className="flex overflow-hidden  w-full h-full">
      {data && (
        <Swiper
          ref={swiperRef}
          className="flex flex-col h-full"
          modules={[Navigation, Pagination, A11y, Autoplay]}
          autoplay
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1500: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            2000: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          spaceBetween={10}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <style>{`
          .swiper-button-next
          {
            display:flex;
            justify-content:center;
            align-items:center;
            top:3%;
            height:66.6%;
            width:50px;
            right:0px;
            
            background: rgba(209, 209, 209, 0.08);

            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(9.1px);
            -webkit-backdrop-filter: blur(9.1px);
          }
          .swiper-button-prev{
             display:flex;
            justify-content:center;
            align-items:center;
             top:3%;
            height:66.6%;
             width:50px;
            left:0px;
            background: rgba(209, 209, 209, 0.08);

            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(9.1px);
            -webkit-backdrop-filter: blur(9.1px);
          }
          .swiper-button-next:after{
                color: aliceblue;
          }
          .swiper-button-prev:after{
                color: aliceblue;
          }
        `}</style>
          {ShowSlides}
          ...
        </Swiper>
      )}
      {!data && <LoadingSkeleton />}
    </div>
  );
};
