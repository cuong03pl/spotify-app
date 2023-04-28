import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./ArtistPage.module.scss";
import {
  CheckUsersFollowsArtists,
  getArtist,
  getRelatedArtists,
  getTopTracks,
  putFollowArtists,
  unfollowArtists,
} from "../../Services/Services";
import { useParams } from "react-router-dom";
import PlaylistItem from "../../components/Playlist/PlaylistItem";
import AlbumItem from "../../components/Album/AlbumItem";
import AlbumList from "../../components/Album/Album";
import Button from "components/Button/Button";
import Spinner from "components/Spinner/Spinner";
import SwiperList from "components/Swiper/Swiper";
import { SwiperSlide } from "swiper/react";
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
  const [followed, setFollowed] = useState(false);
  const [isLoading, setLoading] = useState(true);

  // const top
  // useEffect(() => {
  //   if (name.length > 20) {
  //     setFontSize(32);
  //   }
  // }, [name]);
  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      await getTopTracks(id, {
        params: {
          market: "VN",
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setTopTracks(res);
        setLoading(false);
      });
    };
    fetchApi();
  }, [id, token]);
  useEffect(() => {
    setLoading(true);

    const fetchApi = async () => {
      await getArtist(id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setArtist(res);
        setLoading(false);
      });
    };
    fetchApi();
  }, [id, token]);
  useEffect(() => {
    setLoading(true);

    const fetchApi = async () => {
      await getRelatedArtists(id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setRelatedArtists(res);
        setLoading(false);
      });
    };
    fetchApi();
  }, [id]);
  useEffect(() => {
    window.document.title = `${artist?.name} | Spotify `;
  }, [artist?.name]);
  const handleSeeMore = () => {
    setSeeAll(true);
    setSize(10);
  };
  const handleSeeLess = () => {
    setSeeAll(false);
    setSize(5);
  };
  useEffect(() => {
    const fetchApi = async () => {
      await CheckUsersFollowsArtists({
        params: {
          type: "artist",
          ids: id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => setFollowed(res[0]));
    };
    fetchApi();
  }, []);
  const handleFollow = async () => {
    await putFollowArtists("", {
      params: {
        type: "artist",
        ids: id,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setFollowed(true);
    });
  };

  const handleUnFollow = async () => {
    await unfollowArtists({
      params: {
        type: "artist",
        ids: id,
      },
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
          <div
            style={{ backgroundImage: `url(${artist?.images[0]?.url})` }}
            className={cx("bg-img")}
          ></div>
          <div className={cx("main")}>
            <div className={cx("header")}>
              <span
                style={{ fontSize: fontSize + "px" }}
                className={cx("title")}
              >
                {artist?.name}
              </span>

              <div className={cx("sub")}>
                <span className={cx("total")}>
                  {artist?.followers?.total
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  người theo dõi
                </span>
              </div>
            </div>

            <div className={cx("content")}>
              <div className={cx("action")}>
                <div className={cx("action-btn")}>
                  {followed ? (
                    <Button onClick={handleUnFollow} unfollowBtn>
                      ĐANG THEO DÕI
                    </Button>
                  ) : (
                    <Button onClick={handleFollow} followBtn>
                      THEO DÕI
                    </Button>
                  )}
                </div>
              </div>

              <div className={cx("track")}>
                {topTracks?.tracks?.length > 0 && (
                  <>
                    <span className={cx("track-title")}>Phổ biến</span>
                    {topTracks?.tracks?.slice(0, size).map((item, index) => {
                      return (
                        <PlaylistItem
                          key={index}
                          i={index}
                          durationTime={item?.duration_ms}
                          title={item?.name}
                          artistList={item?.artists}
                          style={{ gridTemplateColumns: "5% 90% 5%" }}
                          preview_url={item?.preview_url}
                          trackId={item?.id}
                          trackList={topTracks?.tracks}
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
                  </>
                )}
              </div>

              {relatedArtists?.artists?.length > 0 && (
                <>
                  <span className={cx("title")}>Fan cũng thích</span>

                  <div className={cx("artist-list")}>
                    <SwiperList>
                      {relatedArtists?.artists
                        .slice(0, 10)
                        .map((item, index) => {
                          return (
                            <SwiperSlide>
                              <AlbumItem
                                key={index}
                                id={item?.id}
                                title={item?.name}
                                description={item?.type}
                                imgUrl={item?.images[0]?.url}
                                artistItem
                              />
                            </SwiperSlide>
                          );
                        })}
                    </SwiperList>
                  </div>
                </>
              )}

              <AlbumList
                id={id}
                title={`Album của  ${artist?.name}`}
                artistID={artist?.id}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

ArtistPage.propTypes = {};

export default ArtistPage;
