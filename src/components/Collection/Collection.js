import classNames from "classnames/bind";
import { config } from "../../config";
import { NavLink } from "react-router-dom";
import styles from "./Collection.module.scss";

const cx = classNames.bind(styles);

function Collection(props) {
  return (
    <div className={cx("wrapper")}>
      <NavLink
        to={config.routes.library.playlist}
        className={({ isActive }) =>
          cx("collection-item", isActive ? "active" : undefined)
        }
      >
        <span className={cx("title")}>Playlist</span>
      </NavLink>
      <NavLink
        to={config.routes.library.podcast}
        className={({ isActive }) =>
          cx("collection-item", isActive ? "active" : undefined)
        }
      >
        <span className={cx("title")}>Podcast</span>
      </NavLink>
      <NavLink
        to={config.routes.library.artists}
        className={({ isActive }) =>
          cx("collection-item", isActive ? "active" : undefined)
        }
      >
        <span className={cx("title")}>Nghệ sĩ</span>
      </NavLink>
      <NavLink
        to={config.routes.library.albums}
        className={({ isActive }) =>
          cx("collection-item", isActive ? "active" : undefined)
        }
      >
        <span className={cx("title")}>Album</span>
      </NavLink>
    </div>
  );
}

Collection.propTypes = {};

export default Collection;
