import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, postNewPlaylist } from "Services/Services";
import { image } from "../../../assets/images";
import {
  CreateListIcon,
  FavouriteIcon,
  HomeActiveIcon,
  HomeIcon,
  LibraryActiveIcon,
  LibraryIcon,
  SearchActiveIcon,
  SearchIcon,
} from "../../../components/Icon";
import { config } from "../../../config";
import Menu from "./Menu/Menu";

import styles from "./NavBar.module.scss";
const cx = classNames.bind(styles);

function NavBar() {
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleCreatePlaylist = async () => {
    await postNewPlaylist(
      user?.id,
      {
        name: "New Playlist",
        description: `Của ${user?.id}`,
        public: true,
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
        navigate(`/playlist/${res?.id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const MENU_ITEM_1 = [
    {
      to: config.routes.home,
      title: "Trang chủ",
      icon: <HomeIcon height={24} width={24} fill={"#B3B3B3"} />,
      activeIcon: <HomeActiveIcon height={24} width={24} fill={"#fff"} />,
    },
    {
      to: "/search",
      title: "Tìm kiếm",
      icon: <SearchIcon height={24} width={24} fill={"#B3B3B3"} />,
      activeIcon: <SearchActiveIcon height={24} width={24} fill={"#fff"} />,
    },
    {
      to: config.routes.library.playlist,
      title: "Thư viện",
      icon: <LibraryIcon height={24} width={24} fill={"#B3B3B3"} />,
      activeIcon: <LibraryActiveIcon height={24} width={24} fill={"#fff"} />,
    },
  ];

  const MENU_ITEM_2 = [
    {
      to: "",
      title: "Tạo playlist",
      icon: <CreateListIcon height={24} width={24} fill={"#B3B3B3"} />,
      activeIcon: <CreateListIcon height={24} width={24} fill={"#fff"} />,
      onClick: handleCreatePlaylist,
    },
    {
      to: config.routes.favourite,
      title: "Bài hát đã thích",
      icon: <FavouriteIcon height={24} width={24} fill={"#B3B3B3"} />,
      activeIcon: <FavouriteIcon height={24} width={24} fill={"#fff"} />,
    },
  ];
  useEffect(() => {
    const fetchApi = async () => {
      await getUser({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => setUser(res));
    };
    fetchApi();
  }, [token]);

  return (
    <div className={cx("wrapper")}>
      <Link to={"/"} className={cx("logo")}>
        <img src={image.logo} alt="" />
      </Link>

      <div className={cx("menu-1")}>
        <Menu data={MENU_ITEM_1} />
      </div>

      <Menu data={MENU_ITEM_2} />
      <div className={cx("separate")}>
        <span></span>
      </div>
    </div>
  );
}

export default NavBar;
