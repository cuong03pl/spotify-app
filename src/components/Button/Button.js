import classNames from "classnames/bind";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

function Button(
  {
    transparentBtn,
    disableBtn,
    iconBtnSmall,
    mediumBtn,
    circleBtn,
    playPauseBtn,
    primaryBtn,

    signUpBtn,
    leftIcon,
    rightIcon,
    to,
    href,
    onClick,
    children,

    ...passProps
  },
  ref
) {
  let Comp = "button";
  const classes = cx("button", {
    iconBtnSmall,
    mediumBtn,
    disableBtn,
    circleBtn,
    transparentBtn,
    signUpBtn,
    playPauseBtn,
    primaryBtn,
  });
  const props = { onClick, ...passProps };
  if (to) {
    Comp = Link;
    props.to = to;
  }
  if (href) {
    Comp = "a";
    props.href = href;
  }
  return (
    <Comp {...props} className={classes} ref={ref}>
      <span className={cx("left-icon")}>{leftIcon}</span>
      <span className={cx("title")}>{children}</span>
      <span className={cx("right-icon")}>{rightIcon}</span>
    </Comp>
  );
}

export default forwardRef(Button);
