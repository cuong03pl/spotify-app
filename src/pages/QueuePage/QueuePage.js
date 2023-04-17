import classNames from "classnames/bind";
import styles from "./QueuePage.module.scss";
import { useSelector } from "react-redux";
import PlaylistItem from "components/Playlist/PlaylistItem";
const cx = classNames.bind(styles);
function QueuePage() {
  const state = useSelector((state) => state.player);
  const currentTrack = state.trackList[state.index];
  return (
    <div className={cx("wrapper")}>
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
            "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
          }
          title={currentTrack?.track?.name || currentTrack?.name}
          albumId={currentTrack?.track?.album.id || currentTrack?.album?.id}
          trackId={currentTrack?.track?.id || currentTrack?.id}
          artistList={currentTrack?.track?.artists || currentTrack?.artists}
          albumName={currentTrack?.track?.album || currentTrack?.album?.name}
          uris={currentTrack?.track?.uri || currentTrack?.uri}
          preview_url={
            currentTrack?.track?.preview_url || currentTrack?.preview_url
          }
          style={{ gridTemplateColumns: "0% 40% 40% 20% " }}
        />
      </div>

      <div className={cx("next-list")}>
        <span className={cx("title")}>Danh sách phát tiếp theo </span>

        {state?.trackList?.slice(state.index + 1)?.map((item, index) => {
          return (
            <PlaylistItem
              style={{ gridTemplateColumns: "0% 40% 40% 20%  " }}
              i={index}
              key={index}
              durationTime={item?.track.duration_ms}
              imgURL={item?.track.album.images[0].url}
              title={item?.track.name}
              albumId={item?.track.album.id}
              trackId={item?.track?.id}
              artistList={item?.track.artists}
              albumName={item?.track.album.name}
              uris={item?.track?.uri}
              preview_url={item?.track?.preview_url}
              trackList={state?.trackList}
            />
          );
        })}
      </div>
    </div>
  );
}

export default QueuePage;
