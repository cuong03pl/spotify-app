import React, { useState } from "react";
import classNames from "classnames/bind";
import parse from "html-react-parser";
import styles from "./ShowIntro.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function ShowIntro({ data }) {
  const [seeAll, setSeeAll] = useState(false);
  const handleSeeMore = () => {
    setSeeAll(true);
  };
  const handleSeeLess = () => {
    setSeeAll(false);
  };
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("header")}>Giới thiệu</h3>
      <div
        style={
          seeAll
            ? {}
            : {
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "8",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }
        }
        className={cx("des")}
      >
        {parse(data?.html_description || "")}
      </div>
      {seeAll ? (
        <span onClick={handleSeeLess} className={cx("action")}>
          hiển thị ít hơn
        </span>
      ) : (
        <span onClick={handleSeeMore} className={cx("action")}>
          Xem thêm
        </span>
      )}
    </div>
  );
}

ShowIntro.propTypes = {};

export default ShowIntro;
