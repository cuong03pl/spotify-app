import classNames from "classnames/bind";
import { useState } from "react";
import { useConvertTime } from "../../hooks/useConvertTime";
import Button from "../Button/Button";
import { PauseIcon, PlayIcon } from "../Icon";
import styles from "./AlbumTrack.module.scss";
import AlbumTrackItem from "./AlbumTrackItem";
const cx = classNames.bind(styles);

function AlbumTrack({ data }) {
  return (
    <div className={cx("wrapper")}>
      {data?.map((item, index) => {
        return <AlbumTrackItem data={item} key={index} i={index} />;
      })}
    </div>
  );
}

export default AlbumTrack;
