import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./LoginRequired.module.scss";

const cx = classNames.bind(styles);

function LoginRequired(props) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>Bạn chưa đăng nhập.</div>
      <span className={cx("des")}>
        Hãy đăng nhập để sử dụng dịch vụ của chúng tôi.
      </span>
    </div>
  );
}

LoginRequired.propTypes = {};

export default LoginRequired;
