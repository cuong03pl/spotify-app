import classNames from "classnames/bind";
import FallBack from "components/FallBack/FallBack";
import { ClockIcon, PlaylistFallBackIcon } from "components/Icon";
import Intro from "components/Intro/Intro";
import Playlist from "components/Playlist/Playlist";
import NoAlbumsFound from "pages/LibraryPage/components/NoAlbumsFound";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "Services/Services";
import styles from "./FavouritePage.module.scss";
import { deleteTracksThunk, getTracksThunk } from "./favouriteSlice";
import Header from "components/Playlist/Header";
const cx = classNames.bind(styles);
function FavouritePage() {
  const [user, setUser] = useState();
  const [tracks, setTracks] = useState([]);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.favourite);
  useEffect(() => {
    const fetchApi = async () => {
      await dispatch(getTracksThunk(token))
        .unwrap()
        .then((res) => {
          setTracks(res?.items);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchApi();
  }, [state.total, token]);

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
  const handleUnlike = async (trackId) => {
    await dispatch(deleteTracksThunk({ trackId, token }))
      .unwrap()
      .then((res) => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div style={{ minHeight: "100vh" }} className={cx("wrapper")}>
      <Intro
        category={"playlist"}
        title={"Bài hát đã thích"}
        description={user?.display_name}
        fallback={
          <FallBack
            icon={
              <PlaylistFallBackIcon height={64} width={64} fill={"#b3b3b3"} />
            }
            playlist
          />
        }
      />
      {tracks?.length > 0 ? (
        <div className={cx("content")}>
          <Header />
          <Playlist onUnlike={handleUnlike} data={tracks} isFavourite={true} />
        </div>
      ) : (
        <NoAlbumsFound
          title={"Bài hát bạn yêu thích sẽ xuất hiện ở đây"}
          des={"Lưu bài hát bằng cách nhấn vào biểu tượng trái tim."}
          titleBtn={"Tìm bài hát"}
          to={"/search"}
        />
      )}
    </div>
  );
}

export default FavouritePage;
