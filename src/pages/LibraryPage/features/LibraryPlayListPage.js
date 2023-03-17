import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  getCurrentUserPlaylists,
  getUser,
  postNewPlaylist,
} from "Services/Services";
import classNames from "classnames/bind";

import styles from "./../LibraryPage.module.scss";
import AlbumItem from "../../../components/Album/AlbumItem";
import NoAlbumsFound from "../components/NoAlbumsFound";
import { useLocation, useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);
function LibraryPlayListPage(props) {
  const [playlist, setPlaylist] = useState([]);
  const token = localStorage.getItem("token");
  const [user, setUser] = useState();
  const [newPlaylist, setNewPlaylist] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      await getCurrentUserPlaylists({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => setPlaylist(res));
    };
    fetchApi();
  }, [token]);
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

  const handleCreatePlaylist = async () => {
    await postNewPlaylist(
      user?.id,
      {
        name: "New Playlist",
        description: `Của ${user?.id}`,
        public: true,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",

          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        setNewPlaylist(res);
        navigate(`/playlist/${res?.id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(newPlaylist);
  return (
    <div style={{ minHeight: "100vh" }} className={cx("wrapper")}>
      {playlist?.items?.filter((item) => item.images?.length !== 0).length ===
      0 ? (
        <NoAlbumsFound
          title={"Tạo playlist đầu tiên của bạn"}
          des={"Thật dễ dàng, chúng tôi sẽ giúp bạn."}
          titleBtn={"Tạo playlist"}
          onClick={handleCreatePlaylist}
        />
      ) : (
        <>
          <div className={cx("header")}>
            <span className={cx("title")}>Playlist</span>
          </div>

          <div className={cx("list")}>
            {playlist?.items
              ?.filter((item) => item.images?.length !== 0)
              .map((item, index) => {
                return (
                  <AlbumItem
                    key={index}
                    id={item?.id}
                    title={item?.name}
                    description={`Của ${item?.owner.display_name} `}
                    imgUrl={item?.images[0]?.url}
                    playlist
                  />
                );
              })}
          </div>
        </>
      )}
    </div>
  );
}

LibraryPlayListPage.propTypes = {};

export default LibraryPlayListPage;
