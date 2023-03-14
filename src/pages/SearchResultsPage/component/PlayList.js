import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./../SearchResultsPage.module.scss";
import AlbumItem from "../../../components/Album/AlbumItem";
import { getSearch, getUser } from "../../../Services/Services";
const cx = classNames.bind(styles);
function PlayList(props) {
  const [playlist, setPlaylist] = useState([]);
  const searchValue = useSelector((state) => state.search);
  const token = localStorage.getItem("token");
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      await getSearch(`search`, {
        params: {
          q: searchValue,
          type: "playlist",
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setPlaylist(res);
      });
    };
    fetchApi();
  }, [searchValue]);
  useEffect(() => {
    const fetchApi = async () => {
      await getUser("me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => setUser(res));
    };
    fetchApi();
  }, [token]);

  return (
    <>
      <div className={cx("header")}>
        <span className={cx("title")}>Playlist</span>
      </div>
      <div className={cx("list")}>
        {playlist?.playlists?.items
          ?.filter((item) => item?.owner?.display_name !== user?.display_name)
          ?.slice(0, 5)
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
  );
}

PlayList.propTypes = {};

export default PlayList;
