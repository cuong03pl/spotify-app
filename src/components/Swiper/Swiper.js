import React from "react";
import { FreeMode } from "swiper";
import { Swiper } from "swiper/react";
function SwiperList({ children }) {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={10}
      freeMode={true}
      modules={[FreeMode]}
      breakpoints={{
        480: {
          slidesPerView: 1,
        },
        740: { slidesPerView: 2, spaceBetween: 20 },

        840: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        970: {
          slidesPerView: 4,
          spaceBetween: 20,
        },

        1280: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
      }}
    >
      {children}
    </Swiper>
  );
}

SwiperList.propTypes = {};

export default SwiperList;
