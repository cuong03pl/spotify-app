import classNames from "classnames/bind";

import styles from "./Thumbnails.module.scss";
import ThumbnailsItem from "./ThumbnailsItem";
const cx = classNames.bind(styles);

function Thumbnails({ title, path, data }) {
  // console.log(data);
  return (
    <div className={cx("wrapper")}>
      {title && (
        <div className={cx("header")}>
          <span className={cx("title")}>{title}</span>
        </div>
      )}

      <div className={cx("thumbnail-list")}>
        {path?.map((item, index) => {
          return <ThumbnailsItem data={data} key={index} path={item} />;
        })}
      </div>
    </div>
  );
}

export default Thumbnails;
