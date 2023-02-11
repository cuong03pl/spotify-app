import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./ShowList.module.scss";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import Button from "../Button/Button";
import { PauseIcon, PlayIcon, SaveIcon, UploadIcon } from "../Icon";
import { useConvertDate } from "../../hooks/useConvertDate";
import { useConvertTime } from "../../hooks/useConvertTime";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function ShowItem({ data }) {
  const [playing, setPlaying] = useState(false);
  const [minute, second] = useConvertTime(data.duration_ms);
  const [year, month, day] = useConvertDate(data.release_date.split("-"));
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/episode/${data?.id}`
    );
    toast("Liên kết đã được lưu vào Clipboard", {
      position: "top-center",
      autoClose: 1000,
      // delay: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };
  return (
    <Link to={`/episodes/${data?.id}`} className={cx("show-item")}>
      <div className={cx("intro-img")}>
        <img src={data?.images[0].url} alt="" />
      </div>
      <div className={cx("content")}>
        <span className={cx("title")}>{data?.name}</span>
        <span className={cx("description")}>{data?.description}</span>
        <div className={cx("action")}>
          <div className={cx("action-left")}>
            {playing ? (
              <Tippy content="Tạm dừng">
                <div>
                  <Button
                    iconBtnSmall
                    circleBtn
                    playPauseBtn
                    leftIcon={
                      <PlayIcon height={16} width={16} fill={"currentcolor"} />
                    }
                  ></Button>
                </div>
              </Tippy>
            ) : (
              <Tippy content="Phát">
                <div>
                  <Button
                    iconBtnSmall
                    circleBtn
                    playPauseBtn
                    leftIcon={
                      <PauseIcon height={16} width={16} fill={"currentcolor"} />
                    }
                  ></Button>
                </div>
              </Tippy>
            )}
            <span
              className={cx("release_date")}
            >{`${day} thg ${month} ${year}`}</span>
            <span className={cx("total-time")}>{`${minute} phút ${
              second == "0" ? "" : second + "giây"
            } `}</span>
          </div>
          <Link to={""} className={cx("action-right")}>
            <div className={cx("icon")}>
              <Tippy content={"Chia sẻ"}>
                <Button
                  onClick={handleCopyToClipboard}
                  leftIcon={<UploadIcon height={24} width={24} fill={"#fff"} />}
                />
              </Tippy>
            </div>
            <div className={cx("icon")}>
              <Tippy content={"Lưu vào thư viện"}>
                <Button
                  leftIcon={<SaveIcon height={24} width={24} fill={"#fff"} />}
                />
              </Tippy>
            </div>
          </Link>
        </div>
      </div>
      <ToastContainer
        bodyClassName={cx("toast-container")}
        toastClassName={cx("toast")}
      />
    </Link>
  );
}

ShowItem.propTypes = {};

export default ShowItem;
