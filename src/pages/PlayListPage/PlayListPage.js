import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import {
  ClockIcon,
  FavouriteIcon,
  LikeIcon,
  LikeThinIcon,
  MoreIcon,
  PauseIcon,
  PlayIcon,
} from "../../components/Icon";
import Intro from "../../components/Intro/Intro";
import Playlist from "../../components/Playlist/Playlist";
import Menu from "../../components/Proper/Menu/Menu";
import { getPlaylist } from "../../Services/Services";
import styles from "./PlayListPage.module.scss";
const cx = classNames.bind(styles);
const MENU_ITEMS_1 = [
  {
    title: "Sao chép liên kết chương trình ",
  },
  {
    title: "Mở trong ứng dụng máy tính",
  },
];
const MENU_ITEMS_2 = [
  {
    title: "Sao chép liên kết chương trình ",
  },
  {
    title: "Mở trong ứng dụng máy tính",
  },
];
function PlayListPage() {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [playlist, setPlaylist] = useState();
  const [playing, setPlaying] = useState(true);
  const [liked, setLiked] = useState(true);
  useEffect(() => {
    const fetchApi = async () => {
      await getPlaylist(`playlists/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res);
        setPlaylist(res);
      });
    };
    fetchApi();
  }, [id, token]);
  const handlePlay = () => {
    // audio.current.play();
    setPlaying(true);
  };
  const handlePause = () => {
    // audio.current.pause();
    setPlaying(false);
  };
  const handleLike = () => {
    // audio.current.pause();
    setLiked(true);
  };
  const handleDislike = () => {
    // audio.current.pause();
    setLiked(false);
  };
  return (
    <div className={cx("wrapper")}>
      <Intro data={playlist} />
      <div className={cx("action")}>
        {playing ? (
          <Tippy content="Tạm dừng">
            <div>
              <Button
                bigBtn
                iconBtnSmall
                circleBtn
                playPauseBtn
                onClick={handlePause}
                leftIcon={
                  <PlayIcon height={16} width={16} fill={"currentcolor"} />
                }
              ></Button>
            </div>
          </Tippy>
        ) : (
          <Tippy content="Phát">
            <div>
              <Button
                onClick={handlePlay}
                iconBtnSmall
                circleBtn
                playPauseBtn
                bigBtn
                leftIcon={
                  <PauseIcon height={16} width={16} fill={"currentcolor"} />
                }
              ></Button>
            </div>
          </Tippy>
        )}

        {liked ? (
          <>
            <Button
              onClick={handleDislike}
              leftIcon={
                <FavouriteIcon fill={"#1ed760"} height={32} width={32} />
              }
            ></Button>
          </>
        ) : (
          <Button
            onClick={handleLike}
            leftIcon={<LikeThinIcon fill={"#fff"} height={32} width={32} />}
          ></Button>
        )}
        <Menu moreMenu placement={"bottom-start"} data={MENU_ITEMS_2}>
          <Button
            leftIcon={<MoreIcon height={32} width={32} fill={"#ffffff99"} />}
          ></Button>
        </Menu>
      </div>
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
