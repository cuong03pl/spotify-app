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
import AlbumList from "../../components/Album/Album";
const cx = classNames.bind(styles);
function ArtistPage({}) {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [fontSize, setFontSize] = useState();
  const [topTracks, setTopTracks] = useState();
  const [artist, setArtist] = useState();
  const [relatedArtists, setRelatedArtists] = useState();
  const [seeAll, setSeeAll] = useState(false);
  const [size, setSize] = useState(5);
  // const top
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
        console.log(res);
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

  const handleSeeMore = () => {
    setSeeAll(true);
    setSize(10);
  };
  const handleSeeLess = () => {
    setSeeAll(false);
    setSize(5);
  };
  console.log(topTracks);
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
            {topTracks?.tracks.slice(0, size).map((item, index) => {
              console.log(item);
              return (
                <PlaylistItem
                  key={index}
                  i={index}
                  durationTime={item?.duration_ms}
                  title={item?.name}
                  artistList={item?.artists}
                  style={{ gridTemplateColumns: "5% 90% 5%" }}
                />
              );
            })}
            {seeAll ? (
              <span onClick={handleSeeLess} className={cx("see-more")}>
                Ẩn bớt
              </span>
            ) : (
              <span onClick={handleSeeMore} className={cx("see-more")}>
                Xem thêm
              </span>
            )}
          </div>

          <span className={cx("title")}>Fan cũng thích</span>
          <div className={cx("artist-list")}>
            {relatedArtists?.artists.slice(0, 5).map((item, index) => {
              console.log(item);
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

          <AlbumList
            id={id}
            title={`Album của  ${artist?.name}`}
            artistID={artist?.id}
          />
        </div>
      </div>
    </div>
  );
}

ArtistPage.propTypes = {};

export default ArtistPage;
