import classNames from "classnames/bind";
import Album from "./component/Albums";
import Artists from "./component/Artists";
import PlayList from "./component/PlayList";
import Tracks from "./component/Tracks";
import styles from "./SearchResultsPage.module.scss";
import Show from "./component/Shows";
import { useEffect } from "react";
const cx = classNames.bind(styles);

function SearchResultsPage() {
  useEffect(() => {
    window.document.title = `Spotify - Tìm kiếm`;
  }, []);
  return (
    <div className={cx("wrapper")}>
      <Tracks />
      <Show />
      <Artists />
      <Album />
      <PlayList />
    </div>
  );
}

export default SearchResultsPage;
