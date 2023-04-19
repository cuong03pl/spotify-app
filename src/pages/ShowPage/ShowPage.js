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
import {
  CheckUsersSavedShows,
  deleteFavouriteShow,
  getShow,
  putFollowShows,
} from "../../Services/Services";
import Spinner from "components/Spinner/Spinner";

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
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      await getShow(id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setLoading(false);
        setShows(res);
      });
    };
    fetchApi();
  }, [id, token]);

  useEffect(() => {
    const fetchApi = async () => {
      await CheckUsersSavedShows({
        params: {
          ids: id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => setFollowed(res[0]));
    };
    fetchApi();
  }, [id, token]);

  const handleFollow = async () => {
    await putFollowShows("", {
      params: {
        ids: id,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => setFollowed(true));
  };

  const handleUnFollow = async () => {
    await deleteFavouriteShow({
      params: {
        ids: id,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => setFollowed(false));
  };
  return (
    <div className={cx("wrapper")}>
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <Intro
            category={shows?.type == "show" ? "podcast" : shows?.type}
            data={shows}
            imgUrl={shows?.images[0]?.url}
            title={shows?.name}
            publisher={shows?.publisher}
            description={shows?.description}
            followers={shows?.followers}
            totalTracks={shows?.tracks?.total}
            show
          />
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
                leftIcon={
                  <MoreIcon height={32} width={32} fill={"#ffffff99"} />
                }
              ></Button>
            </Menu>
          </div>
          <div className={cx("content")}>
            <ShowList data={shows?.episodes.items} />
            <div className={cx("show-intro")}>
              <ShowIntro data={shows} title={"Giới thiệu"} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ShowPage;
