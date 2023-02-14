import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./ArtistPage.module.scss";
import Action from "../../components/Action/Action";
import {
  getArtist,
  getRelatedArtists,
  getTopTracks,
} from "../../Services/Services";
import { useParams } from "react-router-dom";
import PlaylistItem from "../../components/Playlist/PlaylistItem";
import AlbumItem from "../../components/Album/AlbumItem";
const cx = classNames.bind(styles);
function ArtistPage({}) {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [fontSize, setFontSize] = useState();
  const [topTracks, setTopTracks] = useState();
  const [artist, setArtist] = useState();
  const [relatedArtists, setRelatedArtists] = useState();

  // useEffect(() => {
  //   if (name.length > 20) {
  //     setFontSize(32);
  //   }
  // }, [name]);
  useEffect(() => {
    const fetchApi = async () => {
      await getTopTracks(`artists/${id}/top-tracks`, {
        params: {
          market: "VN",
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setTopTracks(res);
      });
    };
    fetchApi();
  }, [id, token]);
  useEffect(() => {
    const fetchApi = async () => {
      await getArtist(`artists/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setArtist(res);
      });
    };
    fetchApi();
  }, [id, token]);

  useEffect(() => {
    const fetchApi = async () => {
      await getRelatedArtists(`artists/${id}/related-artists`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setRelatedArtists(res);
      });
    };
    fetchApi();
  }, [id]);
  return (
    <div className={cx("wrapper")}>
      <div
        style={{ backgroundImage: `url(${artist?.images[0].url})` }}
        className={cx("bg-img")}
      ></div>
      <div className={cx("main")}>
        <div className={cx("header")}>
          <span style={{ fontSize: fontSize + "px" }} className={cx("title")}>
            {artist?.name}
          </span>

          <div className={cx("sub")}>
            <span className={cx("total")}>
              {artist?.followers.total
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
              người theo dõi
            </span>
          </div>
        </div>

        <div className={cx("content")}>
          <Action />
          <div className={cx("track")}>
            <span className={cx("track-title")}>Phổ biến</span>
            {topTracks?.tracks.map((item, index) => {
              return (
                <PlaylistItem
                  i={index}
                  durationTime={item?.duration_ms}
                  title={item?.name}
                  artistList={item?.artists}
                  style={{ gridTemplateColumns: "5% 90% 5%" }}
                />
              );
            })}
          </div>
          <span className={cx("title")}>Fan cũng thích</span>
          <div className={cx("artist-list")}>
            {relatedArtists?.artists.splice(0, 5).map((item, index) => {
              return (
                <AlbumItem
                  id={item?.id}
                  title={item?.name}
                  description={item?.type}
                  imgUrl={item?.images[0].url}
                  artistItem
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

ArtistPage.propTypes = {};

export default ArtistPage;
