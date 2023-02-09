import classNames from "classnames/bind";
import styles from "./Playlist.module.scss";
import PropTypes from "prop-types";
import { PauseIcon, PlayIcon } from "../Icon";
import { useState } from "react";
import { useConvertDate } from "../../hooks/useConvertDate";
import { useConvertTime } from "../../hooks/useConvertTime";
import Button from "../Button/Button";

const cx = classNames.bind(styles);

function PlaylistItem({ data, i }) {
  const [playing, setPlaying] = useState(false);
  const [minute, second] = useConvertTime(data?.track.duration_ms);
  const handlePlay = () => {
    // audio.current.play();
    setPlaying(true);
  };
  const handlePause = () => {
    // audio.current.pause();
    setPlaying(false);
  };
  return (
    <div className={cx("playlist-item")}>
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
        <img src={data?.track.album.images[0].url} alt="" />
        <div>
          <span className={cx("title")}>{data?.track.name}</span>
          <div className={cx("author")}>
            {data?.track.artists.map((item, index) => {
              return (
                <span key={index}>
                  {index < data?.track.artists.length - 1
                    ? `${item.name},`
                    : ` ${item.name}`}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <span className={cx("album-name")}>{data?.track.album.name}</span>
      </div>
      <span className={cx("release-date")}>
        {useConvertDate(data?.added_at.slice(0, 10).split("-"))}
      </span>
      <span className={cx("total-time")}>{`${minute}:${
        second < 10 ? `0${second}` : second
      }`}</span>
    </div>
  );
}

PlaylistItem.propTypes = {};

export default PlaylistItem;
