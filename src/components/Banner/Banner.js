import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import BannerItem from "./BannerItem";
const cx = classNames.bind(styles);

function Banner({ path }) {
  return (
    <div className={cx("wrapper")}>
      <span className={cx("welcome")}>Chào buổi chiều</span>
      <div className={cx("content")}>
        {path?.map((pathItem, index) => {
          return <BannerItem key={index} path={pathItem} />;
        })}
      </div>
    </div>
  );
}

export default Banner;
