import React from "react";
import "./Slider.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);
const Slider = () => {
  return (
    <Swiper
      navigation
      autoplay
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="slide">
        <img
          src="https://static.gadgetandgear.com/tmp/slider/20200823_1598166505_793115.jpeg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <img
          src="https://static.gadgetandgear.com/tmp/slider/20200923_1600856962_955273.jpeg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <img
          src="https://static.gadgetandgear.com/tmp/slider/20200808_1596864796_966584.jpeg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <img
          src="https://static.gadgetandgear.com/tmp/slider/20200824_1598259044_328413.jpeg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
