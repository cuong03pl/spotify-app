import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./../SearchResultsPage.module.scss";
import { getSearch } from "../../../Services/Services";
import PlaylistItem from "../../../components/Playlist/PlaylistItem";
const cx = classNames.bind(styles);
function Tracks(props) {
  const [tracks, setTracks] = useState([]);
  const searchValue = useSelector((state) => state.search);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchApi = async () => {
      await getSearch(`search`, {
        params: {
          q: searchValue,
          type: "track",
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setTracks(res);
      });
    };
    fetchApi();
  }, [searchValue]);

  return (
    <div className={cx("item")}>
      <div className={cx("header")}>
        <span className={cx("title")}>Bài hát</span>
      </div>
      <div className={cx("")}>
        {tracks?.tracks?.items.slice(0, 5).map((item, index) => {
          return (
            <PlaylistItem
              i={index}
              key={index}
              durationTime={item?.duration_ms}
              imgURL={item?.album.images[0].url}
              title={item?.name}
              albumId={item?.album?.id}
              artistList={item?.artists}
              albumName={item?.album?.name}
              preview_url={item?.preview_url}
              trackId={item?.id}
            />
          );
        })}
      </div>
    </div>
  );
}

Tracks.propTypes = {};

export default Tracks;
