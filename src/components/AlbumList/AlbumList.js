import classNames from "classnames/bind";
import AlbumItem from "./AlbumItem";
import styles from "./AlbumList.module.scss";
const cx = classNames.bind(styles);

function AlbumList({ title, data }) {
  return (
    <div className={cx("wrapper")}>
      {title && (
        <div className={cx("header")}>
          <span className={cx("title")}>{title}</span>
        </div>
      )}

      <div className={cx("album-list")}>
        {data?.map((item, index) => {
          return <AlbumItem key={index} data={item} />;
        })}
      </div>
    </div>
  );
}

export default AlbumList;
