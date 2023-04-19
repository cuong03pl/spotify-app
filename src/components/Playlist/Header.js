import classNames from "classnames/bind";
import styles from "./Playlist.module.scss";
import PropTypes from "prop-types";
import { ClockIcon } from "components/Icon";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("header")}>
      <span>#</span>
      <span>TIÊU ĐỀ</span>
      <span className={cx("album")}>ALBUM</span>
      <span className={cx("release-date")}>NGÀY THÊM</span>
      <span className={cx("clock-icon")}>
        <ClockIcon height={16} width={16} fill={"#b3b3b3"} />{" "}
      </span>
    </div>
  );
}

Header.propTypes = {};

export default Header;
