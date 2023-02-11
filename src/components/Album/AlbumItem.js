import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useConvertDate } from "../../hooks/useConvertDate";
import { getArtistAlbum, getList } from "../../Services/Services";
import styles from "./Album.module.scss";
const cx = classNames.bind(styles);

function AlbumItem({ data }) {
  const [year, month, day] = useConvertDate(
    data?.release_date.slice(0, 10).split("-")
  );
  return (
    <Link to={`/albums/${data?.id}`} className={cx("album-item")}>
      <div className={cx("album-img")}>
        <img src={data?.images[0].url} alt="" />
      </div>
      <div className={cx("content")}>
        <div className={cx("title")}>{data?.name}</div>
        <div className={cx("full-name")}>
          {data?.publisher || data?.description || year}
        </div>
      </div>
    </Link>
  );
}

export default AlbumItem;
