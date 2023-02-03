import classNames from "classnames/bind";
import { useRef } from "react";
import styles from "./PlayBackBar.module.scss";
const cx = classNames.bind(styles);

function PlayBackBar({ currentTime, totalTime, onSeek, timeProgress }) {
  const progressRef = useRef();
  return (
    <div className={cx("wrapper")}>
      {currentTime && <div className={cx("current-time")}>{currentTime}</div>}
      <div className={cx("progress-bar")}>
        <div
          className={cx("progress-total")}
          ref={progressRef}
          onClick={(e) => onSeek(e, progressRef)}
        >
          <div
            className={cx("progress-transform")}
            style={{ width: `${timeProgress}%` }}
          ></div>
          <div className={cx("progress-scrubber")}>
            <div
              className={cx("progress-scrubber-item")}
              style={{ left: `${timeProgress}%` }}
            ></div>
          </div>
          <div className={cx("progress-hover")}></div>
        </div>
      </div>
      {totalTime && <div className={cx("total-time")}>{totalTime}</div>}
    </div>
  );
}

export default PlayBackBar;
