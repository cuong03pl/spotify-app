import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Intro.module.scss";
import PropTypes from "prop-types";
import ImageFallBack from "components/ImageFallBack/ImageFallBack";
import { image } from "assets/images";
const cx = classNames.bind(styles);

function Intro({
  show,
  imgUrl,
  category,
  title,
  publisher,
  followers,
  description,
  totalTracks,
  isUserPlaylist,
  onClick,
  fallback,
}) {
  const [fontSize, setFontSize] = useState();

  useEffect(() => {
    if (title?.length > 20) {
      setFontSize(36);
    }
  }, [title]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("intro-img")}>
        {imgUrl ? (
          <ImageFallBack src={imgUrl} fallBack={image.fallback} alt="" />
        ) : (
          fallback
        )}
      </div>
      <div className={cx("content")}>
        {category && <span className={cx("category")}>{category}</span>}
        {isUserPlaylist ? (
          <span
            onClick={onClick}
            style={{ fontSize: fontSize + "px", cursor: "pointer" }}
            className={cx("title")}
          >
            {title}
          </span>
        ) : (
          <span style={{ fontSize: fontSize + "px" }} className={cx("title")}>
            {title}
          </span>
        )}

        {show ? (
          <span className={cx("author")}>{publisher}</span>
        ) : (
          <>
            <span className={cx("description")}>{description}</span>
            <div className={cx("sub")}>
              {followers && (
                <span className={cx("total")}>
                  {followers?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  lượt thích
                </span>
              )}
              {totalTracks && (
                <span className={cx("total")}>{totalTracks} bài hát </span>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

Intro.propTypes = {};

export default Intro;
