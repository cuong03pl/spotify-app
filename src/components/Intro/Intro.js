import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Intro.module.scss";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);

function Intro({ show, data }) {
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
        <span className={cx("category")}>{show ? "PODCAST" : "Playlist"}</span>
        <span style={{ fontSize: fontSize + "px" }} className={cx("title")}>
          {data?.name}
        </span>
        {!show ? (
          <>
            <span className={cx("description")}>
              Những nghệ sĩ Việt có lượt nghe nhiều nhất năm 2022. Ảnh bìa: Đen
            </span>
            <div className={cx("sub")}>
              <span className={cx("total")}>108.845 lượt thích </span>
              <span className={cx("total")}>100 bài hát </span>
            </div>
          </>
        ) : (
          <span className={cx("author")}>{data?.publisher}</span>
        )}
      </div>
    </div>
  );
}

Intro.propTypes = {};

export default Intro;
