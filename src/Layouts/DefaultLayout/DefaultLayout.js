import classNames from "classnames/bind";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import PlayingBar from "../components/PlayingBar/PlayingBar";
import styles from "./DefaultLayout.module.scss";
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("main")}>
      <div className={cx("wrapper")}>
        <NavBar />
        <div className={cx("container")}>
          <Header />
          {children}
          <Footer />
        </div>
      </div>
      <PlayingBar />
    </div>
  );
}

export default DefaultLayout;
