import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useConvertDate } from "../../hooks/useConvertDate";
import styles from "./Album.module.scss";
import ImageFallBack from "components/ImageFallBack/ImageFallBack";
import { image } from "assets/images";
const cx = classNames.bind(styles);

function AlbumItem({
  id,
  title,
  description,
  datetime,
  imgUrl,
  artistItem,
  playlist,
  show,
  fallback,
}) {
  const [year, month, day] = useConvertDate(datetime);
  if (artistItem) {
    var path = `/artists/${id}`;
  }
  if (playlist) {
    var path = `/playlist/${id}`;
  }
  if (show) {
    var path = `/show/${id}`;
  }

  return (
    <Link to={path || `/albums/${id}`} className={cx("album-item")}>
      <div className={cx("album-img")}>
        <ImageFallBack
          style={artistItem && { borderRadius: "50%" }}
          src={imgUrl}
          fallBack={image?.fallback}
          alt=""
        />
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
