import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { LikeIcon, PictureInPictureIcon } from "../Icon";
import styles from "./PlayingBarInfo.module.scss";
const cx = classNames.bind(styles);

function PlayingBarInfo() {
  return (
    <div className={cx("content-info")}>
      <img
        className={cx("content-img")}
        src="https://i.scdn.co/image/ab67616d00004851f909731198469e69f5809083"
        alt=""
      />
      <div className={cx("content")}>
        <Link to={"/"} className={cx("title")}>
          Chạy Khỏi Thế Giới Nàyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
        </Link>
        <div className={cx("author")}>
          <Link to={"/"} className={cx("author-item")}>
            MONO
          </Link>
          <span>, </span>
          <Link to={"/"} className={cx("author-item")}>
            Onionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
          </Link>
        </div>
      </div>
      <div className={cx("icon")}>
        <Tippy content="Lưu vào thư viện" arrow={false}>
          <span className={cx("icon-item")}>
            <LikeIcon height={16} width={16} fill={"currentcolor"} />
          </span>
        </Tippy>
        <Tippy content="Hình trong hình" arrow={false}>
          <span className={cx("icon-item")}>
            <PictureInPictureIcon height={16} width={16} />
          </span>
        </Tippy>
      </div>
    </div>
  );
}

export default PlayingBarInfo;
