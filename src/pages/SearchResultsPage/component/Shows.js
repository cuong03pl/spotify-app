import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./../SearchResultsPage.module.scss";
import AlbumItem from "../../../components/Album/AlbumItem";
import { getSearch } from "../../../Services/Services";
import { ArtistFallBackIcon } from "components/Icon";
import ImageFallBack from "components/FallBack/ImageFallBack";

const cx = classNames.bind(styles);
function Show(props) {
  const [shows, setShows] = useState([]);
  const searchValue = useSelector((state) => state.search);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchApi = async () => {
      await getSearch(`search`, {
        params: {
          q: searchValue,
          type: "show",
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setShows(res);
      });
    };
    fetchApi();
  }, [searchValue]);

  return (
    <div className={cx("item")}>
      <div className={cx("header")}>
        <span className={cx("title")}>Podcast và chương trình</span>
      </div>
      <div className={cx("list")}>
        {shows?.shows?.items.slice(0, 5).map((item, index) => {
          return (
            <AlbumItem
              key={index}
              id={item?.id}
              title={item?.name}
              description={item?.publisher}
              imgUrl={item?.images[0]?.url}
              show
              fallback={
                <ImageFallBack
                  icon={
                    <ArtistFallBackIcon
                      height={64}
                      width={64}
                      fill={"#b3b3b3"}
                    />
                  }
                  artist
                />
              }
            />
          );
        })}
      </div>
    </div>
  );
}

Show.propTypes = {};

export default Show;