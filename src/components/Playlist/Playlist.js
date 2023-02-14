import classNames from "classnames/bind";
import styles from "./Playlist.module.scss";
import PropTypes from "prop-types";
import PlaylistItem from "./PlaylistItem";

const cx = classNames.bind(styles);

function Playlist({ data }) {
  return (
    <div className={cx("wrapper")}>
      {data?.map((item, index) => {
        return (
          <PlaylistItem
            i={index}
            key={index}
            durationTime={item?.track.duration_ms}
            imgURL={item?.track.album.images[0].url}
            title={item?.track.name}
            albumId={item?.track.album.id}
            datetime={item?.added_at.slice(0, 10).split("-")}
            artistList={item?.track.artists}
            albumName={item?.track.album.name}
          />
        );
      })}
    </div>
  );
}

Playlist.propTypes = {};

export default Playlist;
