import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCurrentUserShows } from "Services/Services";
import classNames from "classnames/bind";

import styles from "./../LibraryPage.module.scss";
import AlbumItem from "../../../components/Album/AlbumItem";
import NoAlbumsFound from "../components/NoAlbumsFound";

const cx = classNames.bind(styles);
function LibraryPlayListPage(props) {
  const [shows, setShows] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchApi = async () => {
      await getCurrentUserShows({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => setShows(res?.items));
    };
    fetchApi();
  }, [token]);
  return (
    <div style={{ minHeight: "100vh" }} className={cx("wrapper")}>
      {shows?.length === 0 ? (
        <NoAlbumsFound
          title={"Theo dõi podcast đầu tiên của bạn"}
          des={
            "Theo dõi podcast bạn yêu thích bằng cách nhấn vào nút theo dõi."
          }
          titleBtn={"Tìm podcast"}
          to={"/search"}
        />
      ) : (
        <>
          <div className={cx("header")}>
            <span className={cx("title")}>Podcast</span>
          </div>

          <div className={cx("list")}>
            {shows?.map((item, index) => {
              return (
                <AlbumItem
                  key={index}
                  id={item?.show?.id}
                  title={item?.show?.name}
                  description={item?.show?.publisher}
                  imgUrl={item?.show?.images[0]?.url}
                  show
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

LibraryPlayListPage.propTypes = {};

export default LibraryPlayListPage;
