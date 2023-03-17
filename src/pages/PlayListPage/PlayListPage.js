import classNames from "classnames/bind";
import AlertDialog from "components/Dialog/Dialog";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Action from "../../components/Action/Action";
import { ClockIcon } from "../../components/Icon";
import Intro from "../../components/Intro/Intro";
import Playlist from "../../components/Playlist/Playlist";
import { getPlaylist, getUser } from "../../Services/Services";
import styles from "./PlayListPage.module.scss";
const cx = classNames.bind(styles);

function PlayListPage() {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [playlist, setPlaylist] = useState();
  const [user, setUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      await getPlaylist(id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setPlaylist(res);
      });
    };
    fetchApi();
  }, [id, token]);
  useEffect(() => {
    const fetchApi = async () => {
      await getUser({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => setUser(res));
    };
    fetchApi();
  }, [token]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className={cx("wrapper")}>
      <Intro
        onClick={handleOpenModal}
        data={playlist}
        isUserPlaylist={playlist?.owner?.display_name?.includes(user?.id)}
      />
      <AlertDialog
        data={playlist}
        id={id}
        isOpen={isOpen}
        onClick={handleCloseModal}
      />
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
        <Playlist data={playlist?.tracks?.items} />
      </div>
    </div>
  );
}

export default PlayListPage;
