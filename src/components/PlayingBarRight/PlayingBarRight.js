import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { useState } from "react";
import Button from "../Button/Button";
import { LyricsIcon, MinVolumeIcon, QueueIcon, VolumeIcon } from "../Icon";
import PlayBackBar from "../PlayBackBar/PlayBackBar";
import styles from "./PlayingBarRight.module.scss";
const cx = classNames.bind(styles);

function PlayingBarRight({ audio }) {
  const [volumeProgress, setVolumeProgress] = useState("50");
  const [minVolume, setMinVolume] = useState(true);
  const [currentVolume, setCurrentVolume] = useState("0.5");
  const handleSeek = (e, progressRef) => {
    const progressTransform = e.nativeEvent.offsetX;
    const totalWidth = progressRef.current.clientWidth;
    audio.current.volume = progressTransform / totalWidth;
    setCurrentVolume(progressTransform / totalWidth);
    setVolumeProgress((progressTransform * 100) / totalWidth);
  };
  const handleMute = () => {
    setMinVolume(false);
    audio.current.volume = 0;
    setVolumeProgress(0);
  };
  const handleUnMute = () => {
    setMinVolume(true);
    console.log(currentVolume);
    audio.current.volume = currentVolume;
    setVolumeProgress(currentVolume * 100);
  };
  return (
    <div className={cx("playing-bar-right")}>
      <Tippy content="Lời bài hát">
        <div className={cx("player-btn-icon")}>
          <Button
            iconBtnSmall
            leftIcon={<LyricsIcon height={16} width={16} fill={"#fff"} />}
            to={"/lyrics"}
          ></Button>
        </div>
      </Tippy>
      <Tippy content="Danh sách chờ">
        <div className={cx("player-btn-icon")}>
          <Button
            iconBtnSmall
            leftIcon={<QueueIcon height={16} width={16} fill={"#fff"} />}
            to={"/queue"}
          ></Button>
        </div>
      </Tippy>
      {minVolume ? (
        <Tippy content="Tắt tiếng">
          <div className={cx("player-btn-icon")} onClick={handleMute}>
            <Button
              iconBtnSmall
              leftIcon={<VolumeIcon height={16} width={16} fill={"#fff"} />}
            ></Button>
          </div>
        </Tippy>
      ) : (
        <Tippy content="Hủy tắt tiếng">
          <div className={cx("player-btn-icon")} onClick={handleUnMute}>
            <Button
              iconBtnSmall
              leftIcon={<MinVolumeIcon height={16} width={16} fill={"#fff"} />}
            ></Button>
          </div>
        </Tippy>
      )}
      <PlayBackBar onSeek={handleSeek} timeProgress={volumeProgress} />
    </div>
  );
}

export default PlayingBarRight;
