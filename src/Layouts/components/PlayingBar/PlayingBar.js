import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";

import PlayerControl from "../../../components/PlayerControl/PlayerControl";
import PlayingBarInfo from "../../../components/PlayingBarInfo/PlayingBarInfo";
import PlayingBarRight from "../../../components/PlayingBarRight/PlayingBarRight";
import styles from "./PlayingBar.module.scss";
const cx = classNames.bind(styles);

function PlayingBar() {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const [timeProgress, setTimeProgress] = useState("0");
  const [totalTime, setTotalTime] = useState("00:00:00");
  const [durationTime, setDurationTime] = useState();
  const audio = useRef(null);
  const handlePlay = () => {
    audio.current.play();
    setPlaying(true);
  };
  const handlePause = () => {
    audio.current.pause();
    setPlaying(false);
  };
  const handleSeekBar = () => {
    setTimeProgress((audio.current?.currentTime * 100) / durationTime);
  };
  const handleLoadedMetadata = () => {
    setDurationTime(audio.current.duration);
  };
  useEffect(() => {
    const hours =
      Math.floor(durationTime / 3600) < 10
        ? "0" + Math.floor(durationTime / 3600)
        : Math.floor(durationTime / 3600);

    const minutes =
      Math.floor(durationTime / 60) < 10
        ? "0" + Math.floor(durationTime / 60)
        : Math.floor(durationTime / 60);

    const seconds =
      Math.floor(durationTime % 60) < 10
        ? "0" + Math.floor(durationTime % 60)
        : Math.floor(durationTime % 60);
    setTotalTime(`${hours}:${minutes}:${seconds}`);
  }, [durationTime]);
  useEffect(() => {
    setTimeout(() => {
      const hoursCurrent =
        Math.floor(audio.current?.currentTime / 3600) < 10
          ? "0" + Math.floor(audio.current?.currentTime / 3600)
          : Math.floor(audio.current?.currentTime / 3600);

      const minutesCurrent =
        Math.floor(audio.current?.currentTime / 60) < 10
          ? "0" + Math.floor(audio.current?.currentTime / 60)
          : Math.floor(audio.current?.currentTime / 60);

      const secondsCurrent =
        Math.floor(audio.current?.currentTime % 60) < 10
          ? "0" + Math.floor(audio.current?.currentTime % 60)
          : Math.floor(audio.current?.currentTime % 60);
      setCurrentTime(`${hoursCurrent}:${minutesCurrent}:${secondsCurrent}`);
    }, [1000]);
  });
  return (
    <div className={cx("wrapper")}>
      <PlayingBarInfo />
      <PlayerControl
        currentTime={currentTime}
        totalTime={totalTime}
        playing={playing}
        onPause={handlePause}
        onPlay={handlePlay}
        timeProgress={timeProgress}
        audio={audio}
      />
      <PlayingBarRight audio={audio} />
      <audio
        ref={audio}
        src="https://p.scdn.co/mp3-preview/4df38b27b145e6e2d180a0790e991af3eef99d86?cid=e5ad9e10b9b342db80cc06db790359f7"
        controls
        onTimeUpdate={handleSeekBar}
        onLoadedMetadata={handleLoadedMetadata}
      ></audio>
    </div>
  );
}

export default PlayingBar;
