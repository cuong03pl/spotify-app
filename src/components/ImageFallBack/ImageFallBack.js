import React, { forwardRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./ImageFallBack.module.scss";
import LazyLoad from "react-lazyload";
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
    <LazyLoad once offset={200}>
      <img src={fallBackSrc ? fallBack : src} alt="" onError={handleFallback} />
    </LazyLoad>
  );
}

ImageFallBack.propTypes = {};

export default ImageFallBack;
