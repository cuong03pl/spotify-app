import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./EditDetails.module.scss";
import PropTypes from "prop-types";
import { CloseIcon, PenIcon, PlaylistFallBackIcon } from "components/Icon";
import Button from "components/Button/Button";
import { putNewPlaylistDetails } from "Services/Services";
import { useDispatch, useSelector } from "react-redux";
import { updateDetails } from "pages/PlayListPage/playlistSlice";
import FallBack from "components/FallBack/FallBack";
import ImageFallBack from "components/ImageFallBack/ImageFallBack";
import { image } from "assets/images";
const cx = classNames.bind(styles);

function EditDetails({ onClose, id, data }) {
  const [namePlaylist, setNamePlaylist] = useState(data?.name);
  const [des, setDes] = useState(data?.description);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist);

  const handleSubmit = async () => {
    await putNewPlaylistDetails(
      id,
      {
        name: namePlaylist,
        description: des,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {})
      .catch((error) => {
        console.error(error);
      });
    dispatch(updateDetails({ namePlaylist, des }));
    onClose();
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <span className={cx("title")}>Sửa thông tin chi tiết</span>
        <span onClick={onClose}>
          <CloseIcon height={32} width={32} fill={"#B3B3B3"} />
        </span>
      </div>

      <div className={cx("content")}>
        <div className={cx("image")}>
          {playlist?.images.length <= 0 ? (
            <ImageFallBack
              src={playlist?.images[0]?.url}
              fallBack={image.fallback}
              alt=""
            />
          ) : (
            <FallBack
              icon={
                <PlaylistFallBackIcon height={64} width={64} fill={"#b3b3b3"} />
              }
              playlist
            />
          )}
        </div>
        <div className={cx("fields")}>
          <input
            className={cx("name")}
            type=""
            name=""
            value={namePlaylist}
            onChange={(e) => setNamePlaylist(e.target.value)}
          />
          <textarea
            className={cx("des")}
            type=""
            name=""
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
        </div>
      </div>
      <div className={cx("btn")}>
        <Button signUpBtn onClick={handleSubmit}>
          Lưu
        </Button>
      </div>
    </div>
  );
}

EditDetails.propTypes = {};

export default EditDetails;
