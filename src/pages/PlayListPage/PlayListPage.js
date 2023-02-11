import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Action from "../../components/Action/Action";
import Button from "../../components/Button/Button";
import { ClockIcon } from "../../components/Icon";
import Intro from "../../components/Intro/Intro";
import Playlist from "../../components/Playlist/Playlist";
import { getPlaylist } from "../../Services/Services";
import styles from "./PlayListPage.module.scss";
const cx = classNames.bind(styles);

function PlayListPage() {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [playlist, setPlaylist] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      await getPlaylist(`playlists/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setPlaylist(res);
      });
    };
    fetchApi();
  }, [id, token]);

  return (
    <div className={cx("wrapper")}>
      <Intro data={playlist} />
      <Action />
      <div className={cx("content")}>
        <div className={cx("header")}>
          <span>#</span>
          <span>TIÊU ĐỀ</span>
          <span>ALBUM</span>
          <span>NGÀY THÊM</span>
          <span>
            <ClockIcon height={16} width={16} fill={"#b3b3b3"} />{" "}
          </span>
        </div>
        <Playlist data={playlist?.tracks.items} />
      </div>
    </div>
  );
}

export default PlayListPage;
