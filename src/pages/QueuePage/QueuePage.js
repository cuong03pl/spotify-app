import classNames from "classnames/bind";
import styles from "./QueuePage.module.scss";
import { useSelector } from "react-redux";
import PlaylistItem from "components/Playlist/PlaylistItem";
import Spinner from "components/Spinner/Spinner";
import { useEffect } from "react";
const cx = classNames.bind(styles);
function QueuePage() {
  const state = useSelector((state) => state.player);
  const currentTrack = state?.trackList[state.index];
  useEffect(() => {
    window.document.title = ` Spotify - Danh sách chờ phát`;
  }, []);
  return (
    <div className={cx("wrapper")}>
      {!state && !currentTrack && <Spinner />}
      {state && currentTrack && (
        <>
          <div className={cx("header")}>
            <span className={cx("title")}>Danh sách chờ</span>
          </div>
          <div className={cx("now-playing")}>
            <span className={cx("title")}>Bài hát hiện tại</span>
            <PlaylistItem
              durationTime={
                currentTrack?.track?.duration_ms || currentTrack?.duration_ms
              }
              imgURL={
                currentTrack?.track?.album?.images[0].url ||
                currentTrack?.album?.images[0].url
              }
              title={currentTrack?.track?.name || currentTrack?.name}
              albumId={currentTrack?.track?.album.id || currentTrack?.album?.id}
              trackId={currentTrack?.track?.id || currentTrack?.id}
              artistList={currentTrack?.track?.artists || currentTrack?.artists}
              albumName={
                currentTrack?.track?.album.name || currentTrack?.album?.name
              }
              uris={currentTrack?.track?.uri || currentTrack?.uri}
              preview_url={
                currentTrack?.track?.preview_url || currentTrack?.preview_url
              }
              queueTrack
            />
          </div>

          <div className={cx("next-list")}>
            <span className={cx("title")}>Danh sách phát tiếp theo </span>

            {state?.trackList?.slice(state.index + 1)?.map((item, index) => {
              return (
                <PlaylistItem
                  i={index}
                  key={index}
                  durationTime={item?.track?.duration_ms || item?.duration_ms}
                  imgURL={
                    item?.track?.album?.images[0]?.url ||
                    item?.album?.images[0]?.url
                  }
                  title={item?.track?.name || item?.name}
                  albumId={item?.track?.album?.id || item?.album?.id}
                  trackId={item?.track?.id || item?.id}
                  artistList={item?.track?.artists || item?.artists}
                  albumName={item?.track?.album?.name || item?.album?.name}
                  uris={item?.track?.uri || item?.uri}
                  preview_url={item?.track?.preview_url || item?.preview_url}
                  trackList={state?.trackList}
                  queueTrack
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default QueuePage;
