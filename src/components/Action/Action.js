import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Action.module.scss";
import Button from "../Button/Button";
import Menu from "../Proper/Menu/Menu";
import { FavouriteIcon, LikeThinIcon, MoreIcon } from "../Icon";

const cx = classNames.bind(styles);

const MENU_ITEMS_2 = [
  {
    title: "Sao chép liên kết chương trình ",
  },
  {
    title: "Mở trong ứng dụng máy tính",
  },
];
function Action({ onFollow, onUnfollow, isFollow }) {
  const handleFollow = () => {
    if (onFollow) {
      onFollow();
    }
  };
  const handleUnfollow = () => {
    if (onUnfollow) {
      onUnfollow();
    }
  };

  return (
    <div className={cx("action")}>
      {/* {!isUserPlaylist && ( */}
      <>
        {isFollow ? (
          <>
            <Button
              onClick={handleUnfollow}
              leftIcon={
                <FavouriteIcon fill={"#1ed760"} height={32} width={32} />
              }
            ></Button>
          </>
        ) : (
          <Button
            onClick={handleFollow}
            leftIcon={<LikeThinIcon fill={"#fff"} height={32} width={32} />}
          ></Button>
        )}
      </>
      {/* )} */}

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
