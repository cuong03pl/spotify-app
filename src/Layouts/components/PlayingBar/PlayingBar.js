import { isDisabled } from "@testing-library/user-event/dist/utils";
import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import {
  LikeIcon,
  PauseIcon,
  PictureInPictureIcon,
  PlayIcon,
  PrevPlayIcon,
  ShuffleIcon,
  RepeatPlayIcon,
  NextPlayIcon,
  LyricsIcon,
  QueueIcon,
  VolumeIcon,
  MinVolumeIcon,
} from "../../../components/Icon";
import PlayBackBar from "../../../components/PlayBackBar/PlayBackBar";
import styles from "./PlayingBar.module.scss";
const cx = classNames.bind(styles);

function PlayingBar() {
  const [playing, setPlaying] = useState(false);
  const [minVolume, setMinVolume] = useState(true);
  // const [timeProgress, setTimeProgress] = useState("0");
  // const audio = useRef();
  // const handlePlay = () => {
  //   audio.current.play();
  //   setPlaying(true);
  // };
  // const handlePause = () => {
  //   audio.current.pause();
  //   setPlaying(false);
  // };
  // const handleSeekBar = () => {
  //   const duration1 = audio.current?.duration;
  //   const currentTime1 = audio.current?.currentTime;
  //   setTimeProgress((currentTime1 * 100) / duration1);
  // };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content-info")}>
        <img
          className={cx("content-img")}
          src="https://i.scdn.co/image/ab67616d00004851f909731198469e69f5809083"
          alt=""
        />
        <div className={cx("content")}>
          <Link to={"/"} className={cx("title")}>
            Chạy Khỏi Thế Giới Nàyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
          </Link>
          <div className={cx("author")}>
            <Link to={"/"} className={cx("author-item")}>
              MONO
            </Link>
            <span>, </span>
            <Link to={"/"} className={cx("author-item")}>
              Onionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
            </Link>
          </div>
        </div>
        <div className={cx("icon")}>
          <Tippy content="Lưu vào thư viện" arrow={false}>
            <span className={cx("icon-item")}>
              <LikeIcon height={16} width={16} fill={"currentcolor"} />
            </span>
          </Tippy>
          <Tippy content="Hình trong hình" arrow={false}>
            <span className={cx("icon-item")}>
              <PictureInPictureIcon height={16} width={16} />
            </span>
          </Tippy>
        </div>
      </div>
      <div className={cx("player-controls")}>
        <div className={cx("player-btn")}>
          <Tippy content="Trộn bài">
            <div className={cx("player-btn-icon")}>
              <Button
                iconBtnSmall
                leftIcon={<ShuffleIcon height={16} width={16} fill={"#fff"} />}
              ></Button>
            </div>
          </Tippy>
          <Tippy content="Trước">
            <div className={cx("player-btn-icon")}>
              <Button
                iconBtnSmall
                leftIcon={<PrevPlayIcon height={16} width={16} fill={"#fff"} />}
              ></Button>
            </div>
          </Tippy>
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
          <Tippy content="Tiếp">
            <div className={cx("player-btn-icon")}>
              <Button
                iconBtnSmall
                leftIcon={<NextPlayIcon height={16} width={16} fill={"#fff"} />}
              ></Button>
            </div>
          </Tippy>
          <Tippy content="Kích hoạt chế độ lặp lại">
            <div className={cx("player-btn-icon")}>
              <Button
                iconBtnSmall
                leftIcon={
                  <RepeatPlayIcon height={16} width={16} fill={"#fff"} />
                }
              ></Button>
            </div>
          </Tippy>
        </div>
        <PlayBackBar
          // timeProgress={timeProgress}
          currentTime="2:30"
          totalTime="4:00"
        />
      </div>
      <div className={cx("playing-bar-right")}>
        <Tippy content="Lời bài hát">
          <div className={cx("player-btn-icon")}>
            <Button
              iconBtnSmall
              leftIcon={<LyricsIcon height={16} width={16} fill={"#fff"} />}
            ></Button>
          </div>
        </Tippy>
        <Tippy content="Danh sách chờ">
          <div className={cx("player-btn-icon")}>
            <Button
              iconBtnSmall
              leftIcon={<QueueIcon height={16} width={16} fill={"#fff"} />}
            ></Button>
          </div>
        </Tippy>
        {minVolume ? (
          <Tippy content="Tắt tiếng">
            <div className={cx("player-btn-icon")}>
              <Button
                iconBtnSmall
                leftIcon={<VolumeIcon height={16} width={16} fill={"#fff"} />}
              ></Button>
            </div>
          </Tippy>
        ) : (
          <Tippy content="Hủy tắt tiếng">
            <div className={cx("player-btn-icon")}>
              <Button
                iconBtnSmall
                leftIcon={
                  <MinVolumeIcon height={16} width={16} fill={"#fff"} />
                }
              ></Button>
            </div>
          </Tippy>
        )}

        <PlayBackBar />
        {/* <audio
          ref={audio}
          src="https://p.scdn.co/mp3-preview/4df38b27b145e6e2d180a0790e991af3eef99d86?cid=e5ad9e10b9b342db80cc06db790359f7"
          controls
          onTimeUpdate={handleSeekBar}
        ></audio> */}
      </div>
    </div>
  );
}

export default PlayingBar;
