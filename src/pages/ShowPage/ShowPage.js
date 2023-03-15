import classNames from "classnames/bind";
import Intro from "../../components/Intro/Intro";
import Button from "../../components/Button/Button";

import styles from "./ShowPage.module.scss";
import { useEffect, useState } from "react";
import { MoreIcon } from "../../components/Icon";
import Menu from "../../components/Proper/Menu/Menu";
import ShowList from "../../components/ShowList/ShowList";
import ShowIntro from "../../components/ShowIntro/ShowIntro";
import { useParams } from "react-router-dom";
import { getShow } from "../../Services/Services";

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

function ShowPage() {
  const [followed, setFollowed] = useState(true);
  const [shows, setShows] = useState();
  const { id } = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchApi = async () => {
      await getShow(id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => setShows(res));
    };
    fetchApi();
  }, [id, token]);

  const handleFollow = () => {
    setFollowed(true);
  };
  const handleUnFollow = () => {
    setFollowed(false);
  };
  return (
    <div className={cx("wrapper")}>
      <Intro show data={shows} />
      <div className={cx("action")}>
        <div className={cx("action-btn")}>
          {followed ? (
            <Button onClick={handleUnFollow} unfollowBtn>
              ĐANG THEO DÕI
            </Button>
          ) : (
            <Button onClick={handleFollow} followBtn>
              THEO DÕI
            </Button>
          )}
        </div>

        <Menu
          moreMenu
          placement={"bottom-start"}
          data={!followed ? MENU_ITEMS_1 : MENU_ITEMS_2}
        >
          <Button
            leftIcon={<MoreIcon height={32} width={32} fill={"#ffffff99"} />}
          ></Button>
        </Menu>
      </div>
      <div className={cx("content")}>
        <ShowList data={shows?.episodes.items} />
        <div style={{ maxWidth: "30%" }}>
          <ShowIntro data={shows} title={"Giới thiệu"} />
        </div>
      </div>
    </div>
  );
}

export default ShowPage;
