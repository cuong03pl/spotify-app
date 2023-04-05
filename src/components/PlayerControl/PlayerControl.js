import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import {
  NextPlayIcon,
  PauseIcon,
  PlayIcon,
  PrevPlayIcon,
  RepeatPlayIcon,
  ShuffleIcon,
} from "../Icon";
import PlayBackBar from "../PlayBackBar/PlayBackBar";

import styles from "./PlayerControl.module.scss";
const cx = classNames.bind(styles);

function PlayerControl({
  currentTime,
  totalTime,
  timeProgress,
  onPause,
  onPlay,
  onPrev,
  onNext,
  audio,
}) {
  const state = useSelector((state) => state.player);
  const handleSeek = (e, progressRef) => {
    const progressTransform = e.nativeEvent.offsetX;
    const totalWidth = progressRef.current.clientWidth;
    audio.current.currentTime =
      (progressTransform / totalWidth) * audio.current.duration;
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("player-btn")}>
        <Tippy content="Trộn bài">
          <div className={cx("player-btn-icon")}>
            <Button
              iconBtnSmall
              leftIcon={<ShuffleIcon height={16} width={16} fill={"#fff"} />}
            ></Button>
          </div>
        </Tippy>
        <Tippy content="Trước">
          <div className={cx("player-btn-icon")}>
            <Button
              iconBtnSmall
              onClick={onPrev}
              leftIcon={<PrevPlayIcon height={16} width={16} fill={"#fff"} />}
            ></Button>
          </div>
        </Tippy>
        {state.isPlay ? (
          <Tippy content="Tạm dừng">
            <div>
              <Button
                iconBtnSmall
                circleBtn
                playPauseBtn
                onClick={onPause}
                leftIcon={
                  <PlayIcon height={16} width={16} fill={"currentcolor"} />
                }
              ></Button>
            </div>
          </Tippy>
        ) : (
          <Tippy content="Phát">
            <div>
              <Button
                onClick={onPlay}
                iconBtnSmall
                circleBtn
                playPauseBtn
                leftIcon={
                  <PauseIcon height={16} width={16} fill={"currentcolor"} />
                }
              ></Button>
            </div>
          </Tippy>
        )}
        <Tippy content="Tiếp">
          <div className={cx("player-btn-icon")}>
            <Button
              iconBtnSmall
              onClick={onNext}
              leftIcon={<NextPlayIcon height={16} width={16} fill={"#fff"} />}
            ></Button>
          </div>
        </Tippy>
        <Tippy content="Kích hoạt chế độ lặp lại">
          <div className={cx("player-btn-icon")}>
            <Button
              iconBtnSmall
              leftIcon={<RepeatPlayIcon height={16} width={16} fill={"#fff"} />}
            ></Button>
          </div>
        </Tippy>
      </div>
      <PlayBackBar
        timeProgress={timeProgress}
        currentTime={currentTime}
        totalTime={totalTime}
        onSeek={handleSeek}
      />
    </div>
  );
}

export default PlayerControl;
