import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Action.module.scss";
import Button from "../Button/Button";
import Menu from "../Proper/Menu/Menu";
import {
  FavouriteIcon,
  LikeThinIcon,
  MoreIcon,
  PauseIcon,
  PlayIcon,
} from "../Icon";
import Tippy from "@tippyjs/react";
const cx = classNames.bind(styles);
const MENU_ITEMS_1 = [
  {
    title: "Sao chép liên kết chương trình ",
  },
  {
    title: "Mở trong ứng dụng máy tính",
  },
];
const MENU_ITEMS_2 = [
  {
    title: "Sao chép liên kết chương trình ",
  },
  {
    title: "Mở trong ứng dụng máy tính",
  },
];
function Action(props) {
  const [followed, setFollowed] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [liked, setLiked] = useState(true);
  const handlePlay = () => {
    // audio.current.play();
    setPlaying(true);
  };
  const handlePause = () => {
    // audio.current.pause();
    setPlaying(false);
  };
  const handleLike = () => {
    // audio.current.pause();
    setLiked(true);
  };
  const handleDislike = () => {
    // audio.current.pause();
    setLiked(false);
  };
  return (
    <div className={cx("action")}>
      {playing ? (
        <Tippy content="Tạm dừng">
          <div>
            <Button
              bigBtn
              iconBtnSmall
              circleBtn
              playPauseBtn
              onClick={handlePause}
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
              onClick={handlePlay}
              iconBtnSmall
              circleBtn
              playPauseBtn
              bigBtn
              leftIcon={
                <PauseIcon height={16} width={16} fill={"currentcolor"} />
              }
            ></Button>
          </div>
        </Tippy>
      )}

      {liked ? (
        <>
          <Button
            onClick={handleDislike}
            leftIcon={<FavouriteIcon fill={"#1ed760"} height={32} width={32} />}
          ></Button>
        </>
      ) : (
        <Button
          onClick={handleLike}
          leftIcon={<LikeThinIcon fill={"#fff"} height={32} width={32} />}
        ></Button>
      )}
      <Menu moreMenu placement={"bottom-start"} data={MENU_ITEMS_2}>
        <Button
          leftIcon={<MoreIcon height={32} width={32} fill={"#ffffff99"} />}
        ></Button>
      </Menu>
    </div>
  );
}

Action.propTypes = {};

export default Action;
