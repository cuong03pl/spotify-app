import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import { HomeIcon } from "../../../../components/Icon";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);

function MenuItem({ to, icon, activeIcon, title, onClick }) {
  return (
    <NavLink
      onClick={onClick}
      to={to}
      className={({ isActive }) =>
        cx("menu-item", isActive && to ? "active" : undefined)
      }
    >
      <span className={cx("icon")}>{icon}</span>
      <span className={cx("active-icon")}>{activeIcon}</span>
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
}

export default MenuItem;
