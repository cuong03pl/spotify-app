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
import { useNavigate } from "react-router-dom";
import { PlaylistFallBackIcon } from "components/Icon";
import Spinner from "components/Spinner/Spinner";
import FallBack from "components/FallBack/FallBack";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);
function LibraryPlayListPage(props) {
  const [playlist, setPlaylist] = useState([]);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      await getCurrentUserPlaylists({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setLoading(false);
        setPlaylist(res);
      });
    };
    fetchApi();
  }, []);

  useEffect(() => {
    window.document.title = `Spotify thư viện`;
  }, []);
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
        navigate(`/playlist/${res?.id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div style={{ minHeight: "100vh" }} className={cx("wrapper")}>
      {isLoading && <Spinner />}

      {!isLoading && (
        <>
          {playlist?.items?.length === 0 ? (
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
                {playlist?.items?.map((item, index) => {
                  return (
                    <AlbumItem
                      key={index}
                      id={item?.id}
                      title={item?.name}
                      description={`Của ${item?.owner.display_name} `}
                      imgUrl={item?.images[0]?.url}
                      playlist
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
                  );
                })}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

LibraryPlayListPage.propTypes = {};

export default LibraryPlayListPage;
