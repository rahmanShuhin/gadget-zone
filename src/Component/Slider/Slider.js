import React from "react";
import "./Slider.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/swiper.css";
// import "swiper/components/navigation/navigation.css";
// import "swiper/components/pagination/pagination.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);
const Slider = () => {
  return (
    <div className="slider__container">
      <Swiper navigation autoplay spaceBetween={0} slidesPerView={1}>
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
    </div>
  );
};

export default Slider;
