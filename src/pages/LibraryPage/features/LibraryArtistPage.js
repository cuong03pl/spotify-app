import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCurrentUserArists } from "Services/Services";
import classNames from "classnames/bind";

import styles from "./../LibraryPage.module.scss";
import AlbumItem from "../../../components/Album/AlbumItem";
import NoAlbumsFound from "../components/NoAlbumsFound";
import Spinner from "components/Spinner/Spinner";

const cx = classNames.bind(styles);
function LibraryPlayListPage(props) {
  const [artists, setArtists] = useState([]);
  const token = localStorage.getItem("token");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      await getCurrentUserArists({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          type: "artist",
        },
      }).then((res) => {
        setLoading(false);
        setArtists(res.artists.items);
      });
    };
    fetchApi();
  }, [token]);
  return (
    <div style={{ minHeight: "100vh" }} className={cx("wrapper")}>
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          {artists.length === 0 ? (
            <NoAlbumsFound
              title={"Theo dõi nghệ sĩ đầu tiên của bạn"}
              des={
                "Theo dõi nghệ sĩ bạn yêu thích bằng cách nhấn vào nút theo dõi."
              }
              titleBtn={"Tìm nghệ sĩ"}
              to={"/search"}
            />
          ) : (
            <>
              <div className={cx("header")}>
                <span className={cx("title")}>Nghệ sĩ</span>
              </div>

              <div className={cx("list")}>
                {artists?.map((item, index) => {
                  return (
                    <AlbumItem
                      key={index}
                      id={item?.id}
                      title={item?.name}
                      description={item?.type}
                      imgUrl={item?.images[0]?.url}
                      artistItem
                    />
                  );
                })}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

LibraryPlayListPage.propTypes = {};

export default LibraryPlayListPage;
