import axios from "axios";
import classNames from "classnames/bind";
import AlertDialog from "components/Dialog/Dialog";
import PlaylistItem from "components/Playlist/PlaylistItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  CheckUsersFollowsPlaylists,
  getRecommendations,
  getUser,
  putFollowPlaylists,
  unfollowPlaylists,
} from "Services/Services";
import Action from "../../components/Action/Action";
import { ClockIcon, PlaylistFallBackIcon } from "../../components/Icon";
import Intro from "../../components/Intro/Intro";
import Playlist from "../../components/Playlist/Playlist";
import styles from "./PlayListPage.module.scss";
import {
  addPlaylistThunk,
  deletePlaylistThunk,
  getPlaylistThunk,
} from "./playlistSlice";
import FallBack from "components/FallBack/FallBack";
import Header from "components/Playlist/Header";
import Spinner from "components/Spinner/Spinner";
const cx = classNames.bind(styles);

function PlayListPage() {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [playlist, setPlaylist] = useState();
  const [user, setUser] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [trackRecommendations, setTrackRecommendations] = useState([]);
  const [followed, setFollowed] = useState();
  const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.playlist);

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      await dispatch(getPlaylistThunk({ id, token }))
        .unwrap()
        .then((res) => {
          setPlaylist(res);
          setLoading(false);
        });
    };
    fetchApi();
  }, [state.description, state.name, id]);
  useEffect(() => {
    const fetchApi = async () => {
      await getUser({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => setUser(res));
    };
    fetchApi();
  }, [token, id]);

  useEffect(() => {
    const fetchApi = async () => {
      await getRecommendations({
        params: {
          seed_artists: "5dfZ5uSmzR7VQK0udbAVpf",
          seed_tracks: "17iGUekw5nFt5mIRJcUm3R",
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setTrackRecommendations(res?.tracks);
      });
    };
    fetchApi();
  }, []);
  useEffect(() => {
    window.document.title = `${playlist?.name} | Spotify Playlist`;
  }, [playlist?.name, id]);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleAddTrack = async (uris) => {
    await dispatch(addPlaylistThunk({ id, uris, token }))
      .then((res) => {
        setTrackRecommendations(
          trackRecommendations.filter((item) => item.uri !== uris)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteTrack = async (uris) => {
    await dispatch(deletePlaylistThunk({ id, uris, token }))
      .then((res) => {})
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const fetchApi = async () => {
      await CheckUsersFollowsPlaylists(id, {
        params: {
          ids: user?.id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setFollowed(res[0]);
      });
    };
    fetchApi();
  }, [id, token, user]);
  const handleFollow = async () => {
    await putFollowPlaylists(id, "", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => setFollowed(true));
  };
  const handleUnfollow = async () => {
    await unfollowPlaylists(id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => setFollowed(false));
  };
  return (
    <div style={{ minHeight: "100vh" }} className={cx("wrapper")}>
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <Intro
            category={playlist?.type}
            imgUrl={playlist?.images[0]?.url}
            title={playlist?.name}
            publisher={playlist?.publisher}
            description={playlist?.description}
            followers={playlist?.followers?.total}
            totalTracks={playlist?.tracks?.total}
            onClick={handleOpenModal}
            isUserPlaylist={playlist?.owner?.display_name?.includes(user?.id)}
            fallback={
              <FallBack
                icon={
                  <PlaylistFallBackIcon
                    height={64}
                    width={64}
                    fill={"#b3b3b3"}
                  />
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
          <Action
            isUserPlaylist={playlist?.owner?.display_name?.includes(user?.id)}
            isFollow={followed}
            onFollow={handleFollow}
            onUnfollow={handleUnfollow}
          />
          <div className={cx("content")}>
            {playlist?.tracks.items.length > 0 && <Header />}

            <Playlist
              data={playlist?.tracks?.items}
              onDelete={handleDeleteTrack}
              isUserPlaylist={playlist?.owner?.display_name?.includes(user?.id)}
            />
            {playlist?.owner?.display_name?.includes(user?.id) && (
              <div className={cx("recommend")}>
                <div className={cx("recommend-header")}>Đề xuất</div>
                {trackRecommendations?.map((item, index) => {
                  return (
                    <PlaylistItem
                      key={index}
                      imgURL={item?.album?.images[0]?.url}
                      title={item?.name}
                      albumId={item?.album?.id}
                      artistList={item?.artists}
                      albumName={item?.album?.name}
                      uris={item?.uri}
                      onAdd={handleAddTrack}
                      addTrack
                    />
                  );
                })}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default PlayListPage;
