import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./ShowList.module.scss";
import PropTypes from "prop-types";
import ShowItem from "./ShowItem";

const cx = classNames.bind(styles);

function ShowList({ data }) {
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("header")}>Tất cả các tập</h3>
      {data?.map((item, index) => {
        return (
          <ShowItem data={item} key={index} index={index} showList={data} />
        );
      })}
    </div>
  );
}

ShowList.propTypes = {};

export default ShowList;
