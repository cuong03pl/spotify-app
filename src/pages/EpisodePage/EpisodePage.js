import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./EpisodePage.module.scss";
import Intro from "../../components/Intro/Intro";
import Action from "../../components/Action/Action";
import ShowIntro from "../../components/ShowIntro/ShowIntro";
import Button from "../../components/Button/Button";
import { getEpisode } from "../../Services/Services";
import { useParams } from "react-router-dom";
const cx = classNames.bind(styles);
function EpisodePage({}) {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [episodes, setEpisodes, setPlaylist] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      await getEpisode(`episodes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setEpisodes(res);
      });
    };
    fetchApi();
  }, []);

  return (
    <div className={cx("wrapper")}>
      <Intro show data={episodes} />
      <Action />
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
    </div>
  );
}

EpisodePage.propTypes = {};

export default EpisodePage;
