import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./../SearchResultsPage.module.scss";
import AlbumItem from "../../../components/Album/AlbumItem";
import { getSearch } from "../../../Services/Services";
import SwiperList from "components/Swiper/Swiper";
import { SwiperSlide } from "swiper/react";
const cx = classNames.bind(styles);
function Album(props) {
  const [albums, setAlbums] = useState([]);
  const searchValue = useSelector((state) => state.search);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchApi = async () => {
      await getSearch(`search`, {
        params: {
          q: searchValue,
          type: "album",
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setAlbums(res);
      });
    };
    fetchApi();
  }, [searchValue]);
  return (
    <>
      {albums?.albums?.items?.length >= 5 && (
        <div className={cx("item")}>
          <div className={cx("header")}>
            <span className={cx("title")}>Album</span>
          </div>
          <div className={cx("list")}>
            <SwiperList>
              {albums?.albums?.items.map((item, index) => {
                return (
                  <SwiperSlide>
                    <AlbumItem
                      key={index}
                      id={item?.id}
                      title={item?.name}
                      datetime={item?.release_date.slice(0, 10).split("-")}
                      imgUrl={item?.images[0].url}
                    />
                  </SwiperSlide>
                );
              })}
            </SwiperList>
          </div>
        </div>
      )}
    </>
  );
}

Album.propTypes = {};

export default Album;
