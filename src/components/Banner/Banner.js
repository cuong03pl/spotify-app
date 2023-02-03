import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import BannerItem from "./BannerItem";
const cx = classNames.bind(styles);

function Banner({ data }) {
  return (
    <div className={cx("wrapper")}>
      <span className={cx("welcome")}>Chào buổi chiều</span>
      <div className={cx("content")}>
        {data?.map((item, index) => {
          return <BannerItem key={index} data={item} />;
        })}
      </div>
    </div>
  );
}

export default Banner;
