import React from "react";
import classNames from "classnames/bind";
import styles from "./Intro.module.scss";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);

function Intro() {
  const show = true;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("intro-img")}>
        <img
          src="https://i.scdn.co/image/ab67706f00000002dd689db01730e0325d16bd7b"
          alt=""
        />
      </div>
      <div className={cx("content")}>
        <span className={cx("category")}>playlist</span>
        <span className={cx("title")}>Thiên Hạ Nghe Gì</span>
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
          <span className={cx("author")}>Hieu Nguyen</span>
        )}
      </div>
    </div>
  );
}

Intro.propTypes = {};

export default Intro;
