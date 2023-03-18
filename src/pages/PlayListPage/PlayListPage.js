import classNames from "classnames/bind";
import AlertDialog from "components/Dialog/Dialog";
import ImageFallBack from "components/FallBack/ImageFallBack";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "Services/Services";
import Action from "../../components/Action/Action";
import { ClockIcon, PlaylistFallBackIcon } from "../../components/Icon";
import Intro from "../../components/Intro/Intro";
import Playlist from "../../components/Playlist/Playlist";
import styles from "./PlayListPage.module.scss";
import { getPlaylistThunk } from "./playlistSlice";
const cx = classNames.bind(styles);

function PlayListPage() {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [playlist, setPlaylist] = useState();
  const [user, setUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.playlist);
  useEffect(() => {
    const fetchApi = async () => {
      await dispatch(getPlaylistThunk(id))
        .unwrap()
        .then((res) => {
          setPlaylist(res);
        });
    };
    fetchApi();
  }, [state.description, state.name]);
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
        fallback={
          <ImageFallBack
            icon={
              <PlaylistFallBackIcon height={64} width={64} fill={"#b3b3b3"} />
            }
            playlist
          />
        }
      />
      <AlertDialog
        data={playlist}
        id={id}
        isOpen={isOpen}
        onClick={handleCloseModal}
      />
      <Action />
      <div className={cx("content")}>
        {playlist?.tracks.items.length > 0 && (
          <div className={cx("header")}>
            <span>#</span>
            <span>TIÊU ĐỀ</span>
            <span>ALBUM</span>
            <span>NGÀY THÊM</span>
            <span>
              <ClockIcon height={16} width={16} fill={"#b3b3b3"} />{" "}
            </span>
          </div>
        )}

        <Playlist data={playlist?.tracks?.items} />
      </div>
    </div>
  );
}

export default PlayListPage;
