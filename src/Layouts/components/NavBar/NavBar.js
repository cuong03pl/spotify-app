import classNames from "classnames/bind";
import styles from "./NavBar.module.scss";
const cx = classNames.bind(styles);

function NavBar() {
  return <div className={cx("wrapper")}>NavBar</div>;
}

export default NavBar;
