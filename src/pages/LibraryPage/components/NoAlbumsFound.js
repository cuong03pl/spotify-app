import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./NoAlbumsFound.module.scss";
import Button from "components/Button/Button";

const cx = classNames.bind(styles);
function NoAlbumsFound({ title, des, titleBtn, to, onClick, ...props }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>{title}</div>
      <span className={cx("des")}>{des}</span>
      <Button to={to} onClick={onClick} signUpBtn {...props}>
        {titleBtn}
      </Button>
    </div>
  );
}

NoAlbumsFound.propTypes = {};

export default NoAlbumsFound;
