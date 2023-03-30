import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import {
  addTrack,
  addTracksThunk,
  deleteTracksThunk,
} from "pages/FavouritePage/favouriteSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CheckUsersSavedTracks } from "Services/Services";
import { LikeIcon, LoveSolidIcon, PictureInPictureIcon } from "../Icon";
import styles from "./PlayingBarInfo.module.scss";
const cx = classNames.bind(styles);

function PlayingBarInfo({ data }) {
  const token = localStorage.getItem("token");
  const [isLiked, setIsLiked] = useState();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.favourite);
  useEffect(() => {
    const fetchApi = async () => {
      await CheckUsersSavedTracks({
        params: {
          ids: data?.id,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => setIsLiked(res[0]));
    };
    fetchApi();
  }, [data?.id, dispatch, state]);

  const handleAddFavouriteTrack = async (id, token) => {
    await dispatch(addTracksThunk({ id, token }))
      .unwrap()
      .then((res) => {
        dispatch(addTrack(id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteFavouriteTrack = async (id, token) => {
    await dispatch(deleteTracksThunk({ id, token }))
      .unwrap()
      .then((res) => {
        // setTracks(res?.items);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("content-img")}
        src={data?.album?.images[0].url}
        alt=""
      />
      <div className={cx("content")}>
        <Link to={"/"} className={cx("title")}>
          {data?.name}
        </Link>
        <div className={cx("author")}>
          {data?.artists.map((item, index) => {
            return (
              <Link
                className={cx("author-item")}
                to={`/artists/${item?.id}`}
                key={index}
              >
                {index < data?.artists.length - 1
                  ? `${item.name},`
                  : ` ${item.name}`}
              </Link>
            );
          })}
        </div>
      </div>
      <div className={cx("icon")}>
        {isLiked && (
          <Tippy content="Xóa khỏi thư viện" arrow={false}>
            <span
              onClick={() => handleDeleteFavouriteTrack(data?.id, token)}
              className={cx("icon-item")}
            >
              <LoveSolidIcon height={16} width={16} fill={"#1ed760"} />
            </span>
          </Tippy>
        )}

        {!isLiked && (
          <Tippy content="Lưu vào thư viện" arrow={false}>
            <span
              onClick={() => handleAddFavouriteTrack(data?.id, token)}
              className={cx("icon-item")}
            >
              <LikeIcon height={16} width={16} fill={"currentcolor"} />
            </span>
          </Tippy>
        )}

        <Tippy content="Hình trong hình" arrow={false}>
          <span className={cx("icon-item")}>
            <PictureInPictureIcon height={16} width={16} />
          </span>
        </Tippy>
      </div>
    </div>
  );
}

export default PlayingBarInfo;
