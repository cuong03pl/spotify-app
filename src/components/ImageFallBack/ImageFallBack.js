import React, { forwardRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./ImageFallBack.module.scss";
const cx = classNames.bind(styles);
function ImageFallBack({ src, fallBack }) {
  const [fallBackSrc, setFallBackSrc] = useState("");
  useEffect(() => {
    if (!src) {
      handleFallback();
    }
  }, [src]);
  const handleFallback = () => {
    setFallBackSrc(fallBack);
  };
  return (
    <img src={fallBackSrc ? fallBack : src} alt="" onError={handleFallback} />
  );
}

ImageFallBack.propTypes = {};

export default ImageFallBack;
