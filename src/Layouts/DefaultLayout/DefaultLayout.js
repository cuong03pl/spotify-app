import classNames from "classnames/bind";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import PlayingBar from "../components/PlayingBar/PlayingBar";
import styles from "./DefaultLayout.module.scss";
import { useSelector } from "react-redux";
import LoginRequired from "components/LoginRequired/LoginRequired";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const state = useSelector((state) => state.player);
  const user = useSelector((state) => state.user);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return (
    <div className={cx("main")}>
      <div className={cx("wrapper")}>
        <NavBar />
        <div
          style={state.id && { marginBottom: "80px" }}
          className={cx("container")}
        >
          <Header />
          {user && children}
          {!user && <LoginRequired />}
          {user && <Footer />}
        </div>
        <PlayingBar />
      </div>
    </div>
  );
}

export default DefaultLayout;
