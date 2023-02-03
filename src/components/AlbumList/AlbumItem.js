import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPlayList } from "../../Services/Services";
import styles from "./AlbumList.module.scss";
const cx = classNames.bind(styles);

function AlbumItem({ data }) {
  const token = localStorage.getItem("token");
  const [album, setAlbum] = useState();
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      await getPlayList(data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setAlbum(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchApi();
  }, []);
  useEffect(() => {
    if (data.includes("shows")) {
      setIsShow(true);
    } else setIsShow(false);
  }, [data]);
  console.log(isShow);
  return (
    <Link
      to={isShow ? `/show/${album?.id}` : `/playlist/${album?.id}`}
      className={cx("album-item")}
    >
      <div className={cx("album-img")}>
        <img src={album?.images[0].url} alt="" />
      </div>
      <div className={cx("content")}>
        <div className={cx("title")}>{album?.name}</div>
        <div className={cx("full-name")}>
          {album?.publisher || album?.description}
        </div>
      </div>
    </Link>
  );
}

export default AlbumItem;
