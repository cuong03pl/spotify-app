import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./../SearchResultsPage.module.scss";
import AlbumItem from "../../../components/Album/AlbumItem";
import { getSearch } from "../../../Services/Services";
import { ArtistFallBackIcon } from "components/Icon";
import FallBack from "components/FallBack/FallBack";
import SwiperList from "components/Swiper/Swiper";
import { SwiperSlide } from "swiper/react";
const cx = classNames.bind(styles);
function Artists(props) {
  const [artist, setArtist] = useState([]);
  const searchValue = useSelector((state) => state.search);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchApi = async () => {
      await getSearch(`search`, {
        params: {
          q: searchValue,
          type: "artist",
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setArtist(res);
      });
    };
    fetchApi();
  }, [searchValue]);

  return (
    <div className={cx("item")}>
      <div className={cx("header")}>
        <span className={cx("title")}>Nghệ sĩ</span>
      </div>
      <div className={cx("list")}>
        <SwiperList>
          {artist?.artists?.items.slice(0, 10).map((item, index) => {
            return (
              <SwiperSlide>
                <AlbumItem
                  key={index}
                  id={item?.id}
                  title={item?.name}
                  description={item?.type}
                  imgUrl={item?.images[0]?.url}
                  artistItem
                  fallback={
                    <FallBack
                      icon={
                        <ArtistFallBackIcon
                          height={64}
                          width={64}
                          fill={"#b3b3b3"}
                        />
                      }
                      artist
                    />
                  }
                />
              </SwiperSlide>
            );
          })}
        </SwiperList>
      </div>
    </div>
  );
}

Artists.propTypes = {};

export default Artists;
