import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./../SearchResultsPage.module.scss";
import AlbumItem from "../../../components/Album/AlbumItem";
import { getSearch } from "../../../Services/Services";
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
    <>
      <div className={cx("header")}>
        <span className={cx("title")}>Nghệ sĩ</span>
      </div>
      <div className={cx("list")}>
        {artist?.artists?.items.slice(0, 5).map((item, index) => {
          return (
            <AlbumItem
              key={index}
              id={item?.id}
              title={item?.name}
              description={item?.type}
              imgUrl={item?.images[0]?.url}
              artistItem
            />
          );
        })}
      </div>
    </>
  );
}

Artists.propTypes = {};

export default Artists;
