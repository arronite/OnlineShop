import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import axios from "axios";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  const [data, setData] = useState();
  const [controlledSwiper, setControlledSwiper] = useState(null);
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
      <SwiperSlide
        style={{ backgroundImage: `url(${item.img}) ` }}
        className="flex flex-col  bg-cover Image  "
      ></SwiperSlide>
    );
  });
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      controller={{ control: controlledSwiper }}
      className="flex flex-col h-2/3"
      spaceBetween={0}
      slidesPerView={7}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {ShowSlides}
    </Swiper>
  );
};
