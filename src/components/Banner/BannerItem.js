import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getList } from "../../Services/Services";

import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);

function BannerItem({ data }) {
  const token = localStorage.getItem("token");
  const [album, setAlbum] = useState();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      await getList(data, {
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
    if (data.includes("shows")) {
      setIsShow(true);
    } else setIsShow(false);
  }, [data]);
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
