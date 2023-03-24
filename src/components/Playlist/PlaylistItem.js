import classNames from "classnames/bind";
import styles from "./Playlist.module.scss";
import PropTypes from "prop-types";
import { LoveSolidIcon, PauseIcon, PlayIcon } from "../Icon";
import { useState } from "react";
import { useConvertDate } from "../../hooks/useConvertDate";
import { useConvertTime } from "../../hooks/useConvertTime";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function PlaylistItem({
  i,
  durationTime,
  imgURL,
  albumId,
  trackId,
  title,
  datetime,
  artistList,
  albumName,
  addTrack,
  onAdd,
  onDelete,
  uris,
  isUserPlaylist,
  onUnlike,
  isFavourite,
  style,
}) {
  const [playing, setPlaying] = useState(false);
  const [minute, second] = useConvertTime(durationTime);
  const [year, month, day] = useConvertDate(datetime);

  const handlePlay = () => {
    setPlaying(true);
  };
  const handlePause = () => {
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
        <span className={cx("release-date")}>
          {`${day}-${month}-${year}`}

          {!isUserPlaylist && (
            <div className={cx("icon")}>
              {isFavourite && (
                <span onClick={() => onUnlike(trackId)}>
                  <LoveSolidIcon fill={"#1ed760"} />
                </span>
              )}
            </div>
          )}
        </span>
      )}

      {durationTime && (
        <div className={cx("durationTime")}>
          <span className={cx("total-time")}>{`${minute}:${
            second < 10 ? `0${second}` : second
          }`}</span>
          {isUserPlaylist && (
            <span onClick={() => onDelete(uris)} className={cx("icon")}>
              <DeleteIcon sx={{ fontSize: "20px" }} />
            </span>
          )}
        </div>
      )}
      {addTrack && (
        <div className={cx("add-track")}>
          <Button onClick={() => onAdd(uris)} transparentBtn>
            Thêm
          </Button>
        </div>
      )}
    </div>
  );
}

PlaylistItem.propTypes = {};

export default PlaylistItem;
