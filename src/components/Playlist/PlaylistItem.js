import classNames from "classnames/bind";
import styles from "./Playlist.module.scss";
import PropTypes from "prop-types";
import { LoveSolidIcon, PauseIcon, PlayIcon } from "../Icon";
import { useEffect, useState } from "react";
import { useConvertDate } from "../../hooks/useConvertDate";
import { useConvertTime } from "../../hooks/useConvertTime";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentIndex,
  setPlayingTrack,
  setPlayPause,
  setTrackList,
  setType,
  setUrlCurrentTrack,
} from "Layouts/components/PlayingBar/playerSlice";
import ImageFallBack from "components/ImageFallBack/ImageFallBack";
import { image } from "assets/images";

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
  preview_url,
  addTrack,
  onAdd,
  onDelete,
  uris,
  trackList,
  isUserPlaylist,
  onUnlike,
  isFavourite,
  style,
}) {
  const [playing, setPlaying] = useState(false);
  const [minute, second] = useConvertTime(durationTime);
  const [year, month, day] = useConvertDate(datetime);
  const state = useSelector((state) => state.player);

  const dispatch = useDispatch();
  const handlePlay = () => {
    dispatch(setPlayPause(true));
    dispatch(setPlayingTrack(trackId));
    dispatch(setType("track"));
    dispatch(setUrlCurrentTrack(preview_url));
    dispatch(setTrackList(trackList));
    dispatch(setCurrentIndex(i));
  };
  const handlePause = () => {
    dispatch(setPlayPause(false));
  };

  useEffect(() => {
    if (state.id === trackId) {
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  }, [trackId, state.id, state.index]);
  return (
    <div style={style} className={cx("playlist-item")}>
      <div className={cx("numerical-order")}>
        {<span className={cx("index")}>{i + 1}</span>}
        <span className={cx("btn")}>
          {state?.isPlay && playing ? (
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
        {imgURL && (
          <ImageFallBack fallBack={image.fallback} src={imgURL} alt="" />
        )}

        <div>
          {playing ? (
            <span style={{ color: "#1db954" }} className={cx("title")}>
              {title}
            </span>
          ) : (
            <span className={cx("title")}>{title}</span>
          )}
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
