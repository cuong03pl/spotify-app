import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useConvertDate } from "../../hooks/useConvertDate";
import styles from "./Album.module.scss";
const cx = classNames.bind(styles);

function AlbumItem({
  id,
  title,
  description,
  datetime,
  imgUrl,
  artistItem,
  playlist,
}) {
  const [year, month, day] = useConvertDate(datetime);
  if (artistItem) {
    var path = `/artists/${id}`;
  }
  if (playlist) {
    var path = `/playlist/${id}`;
  }

  return (
    <Link to={path || `/albums/${id}`} className={cx("album-item")}>
      <div className={cx("album-img")}>
        {imgUrl && (
          <img
            style={artistItem && { borderRadius: "50%" }}
            src={imgUrl}
            alt=""
          />
        )}
      </div>
      <div className={cx("content")}>
        {title && <div className={cx("title")}>{title}</div>}
        {description && <div className={cx("des")}>{description}</div>}
        {datetime && <div className={cx("des")}>{year}</div>}
      </div>
    </Link>
  );
}

export default AlbumItem;
