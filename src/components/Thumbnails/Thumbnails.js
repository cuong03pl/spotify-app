import classNames from "classnames/bind";

import styles from "./Thumbnails.module.scss";
import ThumbnailsItem from "./ThumbnailsItem";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const cx = classNames.bind(styles);

function Thumbnails({ title, path, data }) {
  return (
    <div className={cx("wrapper")}>
      {title && (
        <div className={cx("header")}>
          <span className={cx("title")}>{title}</span>
        </div>
      )}
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
        className={cx("thumbnail-list")}
      >
        {path?.map((item, index) => {
          return (
            <SwiperSlide>
              <ThumbnailsItem data={data} key={index} path={item} />;
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Thumbnails;
