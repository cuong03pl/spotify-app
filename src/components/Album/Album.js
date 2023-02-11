import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtistAlbum } from "../../Services/Services";

import styles from "./Album.module.scss";
import AlbumItem from "./AlbumItem";
const cx = classNames.bind(styles);

function AlbumList({ id, title, artistID }) {
  const [artistAlbum, setArtistAlbum] = useState();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchApi = async () => {
      await getArtistAlbum(`artists/${artistID}/albums`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setArtistAlbum(res.items.splice(2, 7));
      });
    };
    fetchApi();
  }, [token, artistID, id]);
  return (
    <div className={cx("wrapper")}>
      {title && (
        <div className={cx("header")}>
          <span className={cx("title")}>{title}</span>
        </div>
      )}

      <div className={cx("album-list")}>
        {artistAlbum?.map((item, index) => {
          return <AlbumItem data={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default AlbumList;
