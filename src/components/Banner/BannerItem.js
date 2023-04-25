import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getList } from "../../Services/Services";

import styles from "./Banner.module.scss";
import { Skeleton } from "@mui/material";
import ImageFallBack from "components/ImageFallBack/ImageFallBack";
import { image } from "assets/images";

const cx = classNames.bind(styles);

function BannerItem({ path }) {
  const token = localStorage.getItem("token");
  const [album, setAlbum] = useState();
  const [isShow, setIsShow] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchApi = async () => {
      await getList(path, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setAlbum(res);
          setLoading(false);
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
    <>
      {isLoading && (
        <Skeleton
          sx={{ bgcolor: "#ffffff1a" }}
          variant="rounded"
          width={368}
          height={80}
          animation="wave"
          className={cx("skeleton")}
        />
      )}
      {!isLoading && (
        <Link
          to={isShow ? `/show/${album?.id}` : `/playlist/${album?.id}`}
          className={cx("banner-item")}
        >
          <div className={cx("banner-img")}>
            <ImageFallBack
              src={album?.images[0].url}
              fallBack={image.fallback}
            />
          </div>
          <div className={cx("banner-content")}>
            <span>{album?.name}</span>
          </div>
        </Link>
      )}
    </>
  );
}

export default BannerItem;
