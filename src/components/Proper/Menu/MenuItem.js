import classNames from "classnames/bind";
import Button from "../../Button/Button";
import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function MenuItem({ item, onClick }) {
  return (
    <Link
      onClick={onClick}
      to={item.to}
      className={cx("menu-item", { separate: item.separate })}
    >
      <div className={cx("title")}>{item.title}</div>
      <div className={cx("icon")}>{item.icon}</div>
    </Link>
  );
}

export default MenuItem;
