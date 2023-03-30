import axios from "axios";
import classNames from "classnames/bind";
import { addTracksThunk } from "pages/FavouritePage/favouriteSlice";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisode, getShow, getTrack } from "Services/Services";

import PlayerControl from "../../../components/PlayerControl/PlayerControl";
import PlayingBarInfo from "../../../components/PlayingBarInfo/PlayingBarInfo";
import PlayingBarRight from "../../../components/PlayingBarRight/PlayingBarRight";
import { setPlayPause } from "./playerSlice";
import styles from "./PlayingBar.module.scss";
const cx = classNames.bind(styles);

function PlayingBar() {
  const [currentTrack, setCurrentTrack] = useState();
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const [timeProgress, setTimeProgress] = useState("0");
  const [totalTime, setTotalTime] = useState("00:00:00");
  const [durationTime, setDurationTime] = useState();
  const token = localStorage.getItem("token");
  const state = useSelector((state) => state.player);
  const audio = useRef(null);
  const dispatch = useDispatch();
  const handlePlay = () => {
    dispatch(setPlayPause(true));
    audio?.current?.play();
  };
  const handlePause = () => {
    dispatch(setPlayPause(false));
    audio?.current?.pause();
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
  useEffect(() => {
    if (state.isPlay) {
      audio?.current?.play();
    } else {
      audio?.current?.pause();
    }
  }, [state?.isPlay, state?.id, state.url, currentTrack]);
  useEffect(() => {
    const fetchApi = async () => {
      if (state.type === "track") {
        await getTrack(state?.id, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",

            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            setCurrentTrack(res);
          })
          .catch((err) => console.log(err));
      } else {
        await getEpisode(state?.id, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",

            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            setCurrentTrack(res);
          })
          .catch((err) => console.log(err));
      }
    };
    fetchApi();
  }, [state?.id, state?.isPlay, state.type]);
  return (
    <div className={cx("wrapper")}>
      {currentTrack ? (
        <>
          <PlayingBarInfo data={currentTrack} />
          <PlayerControl
            currentTime={currentTime}
            totalTime={totalTime}
            playing={state.isPlay}
            onPause={handlePause}
            onPlay={handlePlay}
            timeProgress={timeProgress}
            audio={audio}
          />
          <PlayingBarRight audio={audio} />
          <audio
            ref={audio}
            src={state.url || currentTrack?.preview_url || ""}
            controls
            onTimeUpdate={handleSeekBar}
            onLoadedMetadata={handleLoadedMetadata}
          ></audio>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default PlayingBar;
