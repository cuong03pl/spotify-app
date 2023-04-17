import classNames from "classnames/bind";
import styles from "./NotFoundPage.module.scss";
import Button from "components/Button/Button";
const cx = classNames.bind(styles);

function NotFoundPage(props) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>404</div>
      <div className={cx("sub")}>Oops! That page can’t be found</div>
      <div className={cx("btn")}>
        <Button goHomeBtn to="/">
          Về Trang Chủ
        </Button>
      </div>
    </div>
  );
}

NotFoundPage.propTypes = {};

export default NotFoundPage;
