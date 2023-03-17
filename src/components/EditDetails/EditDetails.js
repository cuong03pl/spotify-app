import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./EditDetails.module.scss";
import PropTypes from "prop-types";
import { CloseIcon, PenIcon } from "components/Icon";
import { TextField } from "@mui/material";
import Button from "components/Button/Button";
import { putNewPlaylistDetails } from "Services/Services";
const cx = classNames.bind(styles);

function EditDetails({ onClick, id, data }) {
  const [namePlaylist, setNamePlaylist] = useState(data?.name);
  const [des, setDes] = useState(data?.description);
  const token = localStorage.getItem("token");

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
      .then((res) => {
        console.log("success");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <span className={cx("title")}>Sửa thông tin chi tiết</span>
        <span onClick={onClick}>
          <CloseIcon height={32} width={32} fill={"#B3B3B3"} />
        </span>
      </div>

      <div className={cx("content")}>
        <div className={cx("image")}>
          {/* co anh  */}
          <>
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
              alt=""
            />
          </>
          <div className={cx("pen")}>
            <PenIcon height={48} width={48} fill="#fff" />
            <span className={cx("pen-text")}>Chọn ảnh</span>
          </div>
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
