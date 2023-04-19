import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { getArtistAlbum } from "../../Services/Services";

import styles from "./Album.module.scss";
import AlbumItem from "./AlbumItem";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const cx = classNames.bind(styles);

function AlbumList({ id, title = "", artistID }) {
  const [artistAlbum, setArtistAlbum] = useState();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchApi = async () => {
      await getArtistAlbum(artistID, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setArtistAlbum(res?.items.slice(2, 7));
      });
    };
    fetchApi();
  }, [token, artistID, id]);
  return (
    <div className={cx("wrapper")}>
      {title && (
        <div className={cx("header")}>
          <span className={cx("title")}>{title}</span>
        </div>
      )}

      <div className={cx("album-list")}>
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
          {artistAlbum?.map((item, index) => {
            return (
              <SwiperSlide>
                <AlbumItem
                  id={item?.id}
                  title={item?.name}
                  datetime={item?.release_date.slice(0, 10).split("-")}
                  imgUrl={item?.images[0].url}
                  key={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default AlbumList;
