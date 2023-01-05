import classNames from "classnames/bind";
import styles from "./PlayingBar.module.scss";
const cx = classNames.bind(styles);

function PlayingBar() {
  return <div className={cx("wrapper")}>PlayingBar</div>;
}

export default PlayingBar;
