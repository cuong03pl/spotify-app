import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getList } from "../../Services/Services";
import styles from "./Thumbnails.module.scss";
const cx = classNames.bind(styles);

function ThumbnailsItem({ path, data }) {
  const token = localStorage.getItem("token");
  const [thumbnail, setThumbnail] = useState();
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      await getList(path, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setThumbnail(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchApi();
  }, []);
  useEffect(() => {
    if (path.includes("shows")) {
      setIsShow(true);
    } else setIsShow(false);
  }, [path]);
  return (
    <Link
      to={isShow ? `/show/${thumbnail?.id}` : `/playlist/${thumbnail?.id}`}
      className={cx("thumbnail-item")}
    >
      <div className={cx("thumbnail-img")}>
        <img src={thumbnail?.images[0].url} alt="" />
      </div>
      <div className={cx("content")}>
        <div className={cx("title")}>{thumbnail?.name}</div>
        <div className={cx("full-name")}>
          {thumbnail?.publisher || thumbnail?.description}
        </div>
      </div>
    </Link>
  );
}

export default ThumbnailsItem;
