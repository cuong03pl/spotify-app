import classNames from "classnames/bind";
import { useState } from "react";
import { useConvertTime } from "../../hooks/useConvertTime";
import Button from "../Button/Button";
import { PauseIcon, PlayIcon } from "../Icon";
import styles from "./AlbumTrack.module.scss";
const cx = classNames.bind(styles);

function AlbumTrackItem({ data, i }) {
  const [playing, setPlaying] = useState(false);

  const [minute, second] = useConvertTime(data?.duration_ms);
  const handlePlay = () => {
    // audio.current.play();
    setPlaying(true);
  };
  const handlePause = () => {
    // audio.current.pause();
    setPlaying(false);
  };
  return (
    <div className={cx("album-track-item")}>
      <div className={cx("numerical-order")}>
        <span className={cx("index")}>{i + 1}</span>
        <span className={cx("btn")}>
          {playing ? (
            <Button
              onClick={handlePause}
              leftIcon={<PlayIcon height={16} width={16} fill={"#fff"} />}
            ></Button>
          ) : (
            <Button
              onClick={handlePlay}
              leftIcon={<PauseIcon height={16} width={16} fill={"#fff"} />}
            />
          )}
        </span>
      </div>
      <div className={cx("info")}>
        <div>
          <span className={cx("title")}>{data.name}</span>
          <div className={cx("author")}>
            {data?.artists.map((item, index) => {
              return (
                <span key={index}>
                  {index < item?.artists?.length - 1
                    ? `${item.name},`
                    : ` ${item.name}`}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <span className={cx("total-time")}>{`${minute}:${
        second < 10 ? `0${second}` : second
      }`}</span>
    </div>
  );
}

AlbumTrackItem.propTypes = {};

export default AlbumTrackItem;
