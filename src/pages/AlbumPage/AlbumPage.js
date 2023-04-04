import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./AlbumPage.module.scss";
import Intro from "../../components/Intro/Intro";
import Action from "../../components/Action/Action";
import { ClockIcon } from "../../components/Icon";
import {
  CheckUsersFollowsAlbums,
  getAlbum,
  putFollowAlbums,
  unfollowAlbums,
} from "../../Services/Services";
import { useParams } from "react-router-dom";
import AlbumList from "../../components/Album/Album";
import PlaylistItem from "../../components/Playlist/PlaylistItem";
const cx = classNames.bind(styles);
function AlbumPage({}) {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [album, setAlbum] = useState();
  const [albumTracks, setAlbumTracks] = useState();
  const [followed, setFollowed] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      await getAlbum(id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setAlbum(res);
        setAlbumTracks(res.tracks.items);
      });
    };
    fetchApi();
  }, [id]);

  useEffect(() => {
    const fetchApi = async () => {
      await CheckUsersFollowsAlbums({
        params: {
          ids: id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setFollowed(res[0]);
      });
    };
    fetchApi();
  }, [id, token]);
  const handleFollow = async () => {
    await putFollowAlbums("", {
      params: {
        ids: id,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => setFollowed(true));
  };
  const handleUnfollow = async () => {
    await unfollowAlbums({
      params: {
        ids: id,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => setFollowed(false));
  };

  return (
    <div className={cx("wrapper")}>
      <Intro
        category={album?.album_type}
        data={album}
        imgUrl={album?.images[0]?.url}
        title={album?.name}
        publisher={album?.publisher}
        description={album?.description}
        followers={album?.followers}
        totalTracks={album?.total_tracks}
      />
      <Action
        isFollow={followed}
        onFollow={handleFollow}
        onUnfollow={handleUnfollow}
      />
      <div className={cx("content")}>
        <div className={cx("header")}>
          <span>#</span>
          <span>TIÊU ĐỀ</span>
          <span>
            <ClockIcon height={16} width={16} fill={"#b3b3b3"} />{" "}
          </span>
        </div>
        {/* <AlbumTrack data={albumTracks} /> */}
        {albumTracks?.map((item, index) => {
          return (
            <PlaylistItem
              style={{ gridTemplateColumns: "5% 90% 5%" }}
              durationTime={item?.duration_ms}
              title={item?.name}
              artistList={item?.artists}
              i={index}
              key={index}
              preview_url={item?.preview_url}
              trackId={item?.id}
            />
          );
        })}

        <AlbumList
          id={id}
          artistID={album?.artists[0].id}
          title={`Album khác của ${album?.artists[0].name} `}
        />
      </div>
    </div>
  );
}

AlbumPage.propTypes = {};

export default AlbumPage;
