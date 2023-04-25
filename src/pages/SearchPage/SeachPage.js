import classNames from "classnames/bind";
import styles from "./SearchPage.module.scss";
import { useEffect } from "react";
const cx = classNames.bind(styles);
function SearchPage() {
  useEffect(() => {
    window.document.title = `Spotify - Tìm kiếm`;
  }, []);
  return (
    <div className={cx("wrapper")}>
      <span>Mời bạn tìm kiếm</span>
    </div>
  );
}

export default SearchPage;
