import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCurrentUserAlbums } from "Services/Services";
import classNames from "classnames/bind";

import styles from "./../LibraryPage.module.scss";
import AlbumItem from "../../../components/Album/AlbumItem";
import NoAlbumsFound from "../components/NoAlbumsFound";

const cx = classNames.bind(styles);
function LibraryPlayListPage(props) {
  const [albums, setAlbums] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchApi = async () => {
      await getCurrentUserAlbums({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => setAlbums(res?.items));
    };
    fetchApi();
  }, [token]);
  return (
    <div style={{ minHeight: "100vh" }} className={cx("wrapper")}>
      {albums.length === 0 ? (
        <NoAlbumsFound
          title={"Theo dõi album đầu tiên của bạn"}
          des={"Lưu album bằng cách nhấn vào biểu tượng trái tim."}
          titleBtn={"Tìm album"}
          to={"/search"}
        />
      ) : (
        <>
          <div className={cx("header")}>
            <span className={cx("title")}>Nghệ sĩ</span>
          </div>
          <div className={cx("list")}>
            {albums?.map((item, index) => {
              return (
                <AlbumItem
                  key={index}
                  id={item?.album?.id}
                  title={item?.album?.name}
                  description={item?.album?.artists?.map((item, index) => {
                    return index < albums.length - 1
                      ? `${item.name},`
                      : ` ${item.name}`;
                  })}
                  imgUrl={item?.album?.images[0]?.url}
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
