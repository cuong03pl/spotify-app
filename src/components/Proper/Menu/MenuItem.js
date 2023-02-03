import classNames from "classnames/bind";
import Button from "../../Button/Button";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);

function MenuItem({ item, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cx("menu-item", { separate: item.separate })}
    >
      <div className={cx("title")}>{item.title}</div>
      <div className={cx("icon")}>{item.icon}</div>
    </button>
  );
}

export default MenuItem;
