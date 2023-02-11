import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./AlbumPage.module.scss";
import Intro from "../../components/Intro/Intro";
import Action from "../../components/Action/Action";
import { ClockIcon, PauseIcon, PlayIcon } from "../../components/Icon";
import { getAlbum, getArtistAlbum } from "../../Services/Services";
import { useParams } from "react-router-dom";
import AlbumTrack from "../../components/AlbumTrack/AlbumTrack";
import AlbumList from "../../components/Album/Album";
const cx = classNames.bind(styles);
function AlbumPage({}) {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [album, setAlbum] = useState();
  const [albumTracks, setAlbumTracks] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      await getAlbum(`albums/${id}`, {
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
  console.log(album);
  return (
    <div className={cx("wrapper")}>
      <Intro category={album?.album_type} show data={album} />
      <Action />
      <div className={cx("content")}>
        <div className={cx("header")}>
          <span>#</span>
          <span>TIÊU ĐỀ</span>
          <span>
            <ClockIcon height={16} width={16} fill={"#b3b3b3"} />{" "}
          </span>
        </div>
        <AlbumTrack data={albumTracks} />
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
