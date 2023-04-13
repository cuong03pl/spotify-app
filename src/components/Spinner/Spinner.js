import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./Spinner.module.scss";
import { BeatLoader } from "react-spinners";
const cx = classNames.bind(styles);
function Spinner(props) {
  return (
    <div className={cx("wrapper")}>
      <BeatLoader color="#36d7b7" />
    </div>
  );
}

Spinner.propTypes = {};

export default Spinner;
