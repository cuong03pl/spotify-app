import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import BannerItem from "./BannerItem";
import { useEffect } from "react";
import { useState } from "react";
const cx = classNames.bind(styles);

const SESSION = {
  morning: "Chào buổi sáng",
  afternoon: "Chào buổi chiều",
  evening: "Chào buổi tối",
};
function Banner({ path }) {
  const [session, setSession] = useState("");
  useEffect(() => {
    let hours = new Date().getHours();
    if (hours >= 12 && hours <= 18) {
      setSession(SESSION.afternoon);
    } else if (hours > 18 && hours <= 24) {
      setSession(SESSION.evening);
    } else {
      setSession(SESSION.morning);
    }
  }, []);
  return (
    <div className={cx("wrapper")}>
      <span className={cx("welcome")}> {`${session}`}</span>
      <div className={cx("content")}>
        {path?.map((pathItem, index) => {
          return <BannerItem key={index} path={pathItem} />;
        })}
      </div>
    </div>
  );
}

export default Banner;
