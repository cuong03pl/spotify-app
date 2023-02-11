import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Intro.module.scss";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);

function Intro({ show, data, category }) {
  const [fontSize, setFontSize] = useState();

  useEffect(() => {
    if (data?.name.length > 20) {
      setFontSize(32);
    }
  }, [data]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("intro-img")}>
        <img src={data?.images[0].url} alt="" />
      </div>
      <div className={cx("content")}>
        {category ? (
          <span className={cx("category")}>{category}</span>
        ) : (
          <span className={cx("category")}>
            {show ? "PODCAST" : "Playlist"}
          </span>
        )}

        <span style={{ fontSize: fontSize + "px" }} className={cx("title")}>
          {data?.name}
        </span>
        {show ? (
          <span className={cx("author")}>{data?.publisher}</span>
        ) : (
          <>
            <span className={cx("description")}>{data?.description}</span>
            <div className={cx("sub")}>
              <span className={cx("total")}>
                {data?.followers.total
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                lượt thích
              </span>
              <span className={cx("total")}>{data?.tracks.total} bài hát </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

Intro.propTypes = {};

export default Intro;
