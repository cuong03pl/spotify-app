import classNames from "classnames/bind";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import PlayingBar from "../components/PlayingBar/PlayingBar";
import styles from "./DefaultLayout.module.scss";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const state = useSelector((state) => state.player);
  return (
    <div className={cx("main")}>
      <div className={cx("wrapper")}>
        <NavBar />
        <div
          style={state.id && { marginBottom: "80px" }}
          className={cx("container")}
        >
          <Header />
          {children}

          <Footer />
        </div>
        <PlayingBar />
      </div>
    </div>
  );
}

export default DefaultLayout;
