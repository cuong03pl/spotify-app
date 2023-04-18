import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./FallBack.module.scss";
const cx = classNames.bind(styles);
function FallBack({ icon, artist, playlist }) {
  let classes = cx("wrapper", { artist, playlist });
  return <div className={classes}>{icon}</div>;
}

FallBack.propTypes = {};

export default FallBack;
