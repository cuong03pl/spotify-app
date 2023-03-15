import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getList } from "../../Services/Services";

import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);

function BannerItem({ path }) {
  const token = localStorage.getItem("token");
  const [album, setAlbum] = useState();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      await getList(path, {
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
  }, [token]);
  useEffect(() => {
    if (path.includes("shows")) {
      setIsShow(true);
    } else setIsShow(false);
  }, [path]);
  return (
    <Link
      to={isShow ? `/show/${album?.id}` : `/playlist/${album?.id}`}
      className={cx("banner-item")}
    >
      <div className={cx("banner-img")}>
        <img src={album?.images[0].url} />
      </div>
      <div className={cx("banner-content")}>
        <span>{album?.name}</span>
      </div>
    </Link>
  );
}

export default BannerItem;
