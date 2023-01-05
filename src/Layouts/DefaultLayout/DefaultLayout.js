import classNames from "classnames/bind";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import PlayingBar from "../components/PlayingBar/PlayingBar";
import styles from "./DefaultLayout.module.scss";
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  console.log(children);
  return (
    <div className={cx("main")}>
      <div className={cx("wrapper")}>
        <NavBar />
        <div className={cx("container")}>
          <Header />
          {children}
        </div>
      </div>

      <PlayingBar />
    </div>
  );
}

export default DefaultLayout;
