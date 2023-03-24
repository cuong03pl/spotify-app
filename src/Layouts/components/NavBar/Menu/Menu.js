import classNames from "classnames/bind";

import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
const cx = classNames.bind(styles);

function Menu({ data }) {
  return (
    <div className={cx("menu")}>
      {data.map((item, index) => {
        return (
          <MenuItem
            key={index}
            to={item.to}
            title={item.title}
            icon={item.icon}
            activeIcon={item.activeIcon}
            onClick={item.onClick}
          />
        );
      })}
    </div>
  );
}

export default Menu;
