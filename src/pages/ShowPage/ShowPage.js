import classNames from "classnames/bind";
import Intro from "../../components/Intro/Intro";
import styles from "./ShowPage.module.scss";
const cx = classNames.bind(styles);

function ShowPage() {
  return (
    <div className={cx("wrapper")}>
      <Intro />
    </div>
  );
}

export default ShowPage;
