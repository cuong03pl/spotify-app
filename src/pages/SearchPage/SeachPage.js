import classNames from "classnames/bind";
import styles from "./SearchPage.module.scss";
const cx = classNames.bind(styles);
function SearchPage() {
  return (
    <div className={cx("wrapper")}>
      <span>Mời bạn tìm kiếm</span>
    </div>
  );
}

export default SearchPage;
