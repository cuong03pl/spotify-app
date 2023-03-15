import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { image } from "../../../assets/images";
import {
  BookMarkIcon,
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
  const MENU_ITEM_1 = [
    {
      to: config.routes.home,
      title: "Trang chủ",
      icon: <HomeIcon height={24} width={24} />,
      activeIcon: <HomeActiveIcon height={24} width={24} />,
    },
    {
      to: "/search",
      title: "Tìm kiếm",
      icon: <SearchIcon height={24} width={24} fill={"#B3B3B3"} />,
      activeIcon: <SearchActiveIcon height={24} width={24} />,
    },
    {
      to: config.routes.library.playlist,
      title: "Thư viện",
      icon: <LibraryIcon height={24} width={24} />,
      activeIcon: <LibraryActiveIcon height={24} width={24} />,
    },
  ];

  const MENU_ITEM_2 = [
    {
      to: config.routes.create_list,
      title: "Tạo playlist",
      icon: <CreateListIcon height={24} width={24} />,
      activeIcon: <CreateListIcon height={24} width={24} />,
    },
    {
      to: config.routes.favourite,
      title: "Bài hát đã thích",
      icon: <FavouriteIcon height={24} width={24} fill={"currentColor"} />,
      activeIcon: <FavouriteIcon height={24} width={24} />,
    },
    {
      to: config.routes.bookmark,
      title: "Tập của bạn",
      icon: <BookMarkIcon height={24} width={24} />,
      activeIcon: <BookMarkIcon height={24} width={24} />,
    },
  ];
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
