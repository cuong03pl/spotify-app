import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getList } from "../../Services/Services";
import styles from "./Thumbnails.module.scss";
import { Skeleton } from "@mui/material";
import ImageFallBack from "components/ImageFallBack/ImageFallBack";
import { image } from "assets/images";
const cx = classNames.bind(styles);

function ThumbnailsItem({ path, data }) {
  const token = localStorage.getItem("token");
  const [thumbnail, setThumbnail] = useState();
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
          setThumbnail(res);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchApi();
  }, [path]);
  useEffect(() => {
    if (path.includes("shows")) {
      setIsShow(true);
    } else setIsShow(false);
  }, [path]);
  return (
    <>
      {thumbnail?.images[0]?.url && (
        <Link
          to={isShow ? `/show/${thumbnail?.id}` : `/playlist/${thumbnail?.id}`}
          className={cx("thumbnail-item")}
        >
          <div className={cx("thumbnail-img")}>
            <ImageFallBack
              fallBack={image.fallback}
              src={thumbnail?.images[0]?.url}
              alt=""
            />
          </div>
          <div className={cx("content")}>
            <div className={cx("title")}>{thumbnail?.name}</div>
            <div className={cx("full-name")}>
              {thumbnail?.publisher || thumbnail?.description}
            </div>
          </div>
        </Link>
      )}
      {!thumbnail?.images[0]?.url && (
        <Skeleton
          sx={{ bgcolor: "#ffffff1a" }}
          variant="rounded"
          width={218}
          height={308}
          animation="wave"
          className={cx("skeleton")}
        />
      )}
    </>
  );
}

export default ThumbnailsItem;
