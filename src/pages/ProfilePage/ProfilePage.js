import classNames from "classnames/bind";
import styles from "./ProfilePage.module.scss";
import Intro from "components/Intro/Intro";
import ImageFallBack from "components/FallBack/ImageFallBack";
import { ArtistFallBackIcon } from "components/Icon";
import { getProfile, getProfileTopArtists } from "Services/Services";
import { useEffect, useState } from "react";
import AlbumItem from "components/Album/AlbumItem";
import { getProfileTopTracks } from "Services/Services";
import PlaylistItem from "components/Playlist/PlaylistItem";
const cx = classNames.bind(styles);

function ProfilePage(props) {
  const token = localStorage.getItem("token");
  const [profile, setProfile] = useState({});
  const [topArtists, setTopArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      await getProfile({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setProfile(res);
      });
    };
    fetchApi();
  }, [token]);

  useEffect(() => {
    const fetchApi = async () => {
      await getProfileTopArtists({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setTopArtists(res?.items?.slice(0, 5));
      });
    };
    fetchApi();
  }, [token]);
  useEffect(() => {
    const fetchApi = async () => {
      await getProfileTopTracks({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        // console.log(res);
        setTopTracks(res?.items?.slice(0, 5));
      });
    };
    fetchApi();
  }, [token]);
  console.log(topTracks);
  return (
    <div className={cx("wrapper")}>
      <Intro
        category={"Hồ sơ"}
        title={profile?.display_name}
        fallback={
          <ImageFallBack
            icon={
              <ArtistFallBackIcon height={64} width={64} fill={"#b3b3b3"} />
            }
            artist
          />
        }
      />
      <div className={cx("content")}>
        <span className={cx("title")}>Nghệ sĩ hàng đầu tháng này</span>
        <div className={cx("list")}>
          {topArtists?.map((item, index) => {
            return (
              <AlbumItem
                key={index}
                id={item?.id}
                title={item?.name}
                description={item?.type}
                imgUrl={item?.images[1]?.url}
                artistItem
              />
            );
          })}
        </div>

        <span className={cx("title")}>Bản nhạc hàng đầu tháng này</span>
        {topTracks?.map((item, index) => {
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
              trackList={topTracks}
            />
          );
        })}
      </div>
    </div>
  );
}

ProfilePage.propTypes = {};

export default ProfilePage;
