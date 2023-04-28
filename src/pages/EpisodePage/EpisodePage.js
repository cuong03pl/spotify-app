import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./EpisodePage.module.scss";
import Intro from "../../components/Intro/Intro";
import ShowIntro from "../../components/ShowIntro/ShowIntro";
import Button from "../../components/Button/Button";
import { getEpisode } from "../../Services/Services";
import { useParams } from "react-router-dom";
import Spinner from "components/Spinner/Spinner";
const cx = classNames.bind(styles);
function EpisodePage({}) {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [episodes, setEpisodes] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      await getEpisode(id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setEpisodes(res);
        setLoading(false);
      });
    };
    fetchApi();
  }, []);
  useEffect(() => {
    window.document.title = `${episodes?.name} - ${episodes?.show?.name} | Podcast on Spotify `;
  }, [episodes?.name, episodes?.show?.name]);
  return (
    <div style={{ minHeight: "100vh" }} className={cx("wrapper")}>
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <Intro
            category={episodes?.type == "show" ? "podcast" : episodes?.type}
            data={episodes}
            imgUrl={episodes?.images[0]?.url}
            title={episodes?.name}
            publisher={episodes?.show?.name}
            description={episodes?.description}
            followers={episodes?.followers}
            totalTracks={episodes?.tracks?.total}
            show
          />
          <div className={cx("content")}>
            <div style={{ maxWidth: "672px" }}>
              <ShowIntro data={episodes} title={"Mô tả tập"} />
            </div>
            <div className={cx("btn")}>
              <Button
                to={`/show/${episodes?.show.id}`}
                style={{ width: "160px" }}
                transparentBtn
              >
                Xem tất cả các tập
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

EpisodePage.propTypes = {};

export default EpisodePage;
