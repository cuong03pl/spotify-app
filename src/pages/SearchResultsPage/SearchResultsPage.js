import classNames from "classnames/bind";
import Album from "./component/Albums";
import Artists from "./component/Artists";
import PlayList from "./component/PlayList";
import Tracks from "./component/Tracks";
import styles from "./SearchResultsPage.module.scss";
const cx = classNames.bind(styles);

function SearchResultsPage() {
  return (
    <div className={cx("wrapper")}>
      <Tracks />
      <Artists />
      <Album />
      <PlayList />
    </div>
  );
}

export default SearchResultsPage;
