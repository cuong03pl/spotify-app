import classNames from "classnames/bind";
import styles from "./Playlist.module.scss";
import PropTypes from "prop-types";
import { PauseIcon, PlayIcon } from "../Icon";
import { useState } from "react";
import { useConvertDate } from "../../hooks/useConvertDate";
import { useConvertTime } from "../../hooks/useConvertTime";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function PlaylistItem({
  i,
  durationTime,
  imgURL,
  albumId,
  title,
  datetime,
  artistList,
  albumName,
  style,
}) {
  const [playing, setPlaying] = useState(false);
  const [minute, second] = useConvertTime(durationTime);
  const [year, month, day] = useConvertDate(datetime);
  const handlePlay = () => {
    // audio.current.play();
    setPlaying(true);
  };
  const handlePause = () => {
    // audio.current.pause();
    setPlaying(false);
  };
  return (
    <div style={style} className={cx("playlist-item")}>
      <div className={cx("numerical-order")}>
        {<span className={cx("index")}>{i + 1}</span>}
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
        {imgURL && <img src={imgURL} alt="" />}

        <div>
          {title && <span className={cx("title")}>{title}</span>}
          {artistList && (
            <div className={cx("author")}>
              {artistList.map((item, index) => {
                return (
                  <Link
                    className={cx("artists")}
                    to={`/artists/${item?.id}`}
                    key={index}
                  >
                    {index < artistList.length - 1
                      ? `${item.name},`
                      : ` ${item.name}`}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {albumName && (
        <div>
          <Link to={`/albums/${albumId}`} className={cx("album-name")}>
            {albumName}
          </Link>
        </div>
      )}

      {datetime && (
        <span className={cx("release-date")}>{`${day}-${month}-${year}`}</span>
      )}
      {durationTime && (
        <span className={cx("total-time")}>{`${minute}:${
          second < 10 ? `0${second}` : second
        }`}</span>
      )}
    </div>
  );
}

PlaylistItem.propTypes = {};

export default PlaylistItem;
