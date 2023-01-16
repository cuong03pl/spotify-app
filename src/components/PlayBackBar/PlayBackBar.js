import classNames from "classnames/bind";
import styles from "./PlayBackBar.module.scss";
const cx = classNames.bind(styles);

function PlayBackBar({ currentTime, totalTime }) {
  return (
    <div className={cx("playback-bar")}>
      {currentTime && <div className={cx("current-time")}>2:20</div>}
      <div className={cx("progress-bar")}>
        <div className={cx("progress-total")}>
          <div
            className={cx("progress-transform")}
            // style={{ width: `${timeProgress}%` }}
          ></div>
          <div className={cx("progress-hover")}></div>
        </div>
      </div>
      {totalTime && <div className={cx("total-time")}>4:00</div>}
    </div>
  );
}

export default PlayBackBar;
