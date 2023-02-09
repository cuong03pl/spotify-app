import classNames from "classnames/bind";
import styles from "./Playlist.module.scss";
import PropTypes from "prop-types";
import PlaylistItem from "./PlaylistItem";

const cx = classNames.bind(styles);

function Playlist({ data }) {
  return (
    <div className={cx("wrapper")}>
      {data?.map((item, index) => {
        return <PlaylistItem data={item} i={index} key={index} />;
      })}
    </div>
  );
}

Playlist.propTypes = {};

export default Playlist;
