import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./../SearchResultsPage.module.scss";
import AlbumItem from "../../../components/Album/AlbumItem";
import { getSearch, getUser } from "../../../Services/Services";
import ImageFallBack from "components/FallBack/FallBack";
import { PlaylistFallBackIcon } from "components/Icon";
import FallBack from "components/FallBack/FallBack";
import SwiperList from "components/Swiper/Swiper";
import { SwiperSlide } from "swiper/react";
const cx = classNames.bind(styles);
function PlayList(props) {
  const [playlist, setPlaylist] = useState([]);
  const searchValue = useSelector((state) => state.search);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchApi = async () => {
      await getSearch(`search`, {
        params: {
          q: searchValue,
          type: "playlist",
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setPlaylist(res);
      });
    };
    fetchApi();
  }, [searchValue]);

  return (
    <>
      {playlist?.playlists?.items.length >= 5 && (
        <div className={cx("item")}>
          <div className={cx("header")}>
            <span className={cx("title")}>Playlist</span>
          </div>
          <div className={cx("list")}>
            <SwiperList>
              {playlist?.playlists?.items?.map((item, index) => {
                return (
                  <SwiperSlide>
                    <AlbumItem
                      key={index}
                      id={item?.id}
                      title={item?.name}
                      description={`Của ${item?.owner.display_name} `}
                      imgUrl={item?.images[0]?.url}
                      playlist
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

PlayList.propTypes = {};

export default PlayList;
