import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import Button from "../../../components/Button/Button";
import {
  DownIcon,
  ExternalLinkIcon,
  NextIcon,
  PrevIcon,
  UserIcon,
} from "../../../components/Icon";
import styles from "./Header.module.scss";
import "tippy.js/dist/tippy.css";
import Menu from "../../../components/Proper/Menu/Menu";
import { getUser } from "../../../Services/Services";
import { useEffect, useState } from "react";
import Search from "../../../components/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { clearInputValue } from "./../../../components/Search/searchSlice";
import Collection from "components/Collection/Collection";
import queryString from "query-string";
import { addUser } from "Auth/userSlice";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    title: "Tài khoản",
    icon: <ExternalLinkIcon height={16} width={16} fill="#ffffe6" />,
  },
  {
    title: "Hồ sơ",
    icon: null,
    to: "/profile",
  },
  {
    title: "Nâng cấp lên Premium",
    icon: <ExternalLinkIcon height={16} width={16} fill="#ffffe6" />,
  },
  {
    title: "Hỗ trợ",
    icon: <ExternalLinkIcon height={16} width={16} fill="#ffffe6" />,
  },
  {
    title: "Tải xuống",
    icon: <ExternalLinkIcon height={16} width={16} fill="#ffffe6" />,
  },
  {
    title: "Cài đặt",
    icon: null,
  },
  {
    title: "Đăng xuất",
    icon: null,
    separate: true,
    onclick: () => {
      localStorage.removeItem("token");
      window.location.reload();
    },
  },
];
function Header() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  var response_type = "token";
  const scopes =
    "user-library-read user-follow-read playlist-modify-public playlist-modify-private user-library-modify user-follow-modify user-read-playback-state user-modify-playback-state user-read-currently-playing user-read-recently-played user-top-read";
  const currentPath = window.location.pathname;
  useEffect(() => {
    const fetchApi = async () => {
      await getUser({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setUser(res);
        dispatch(addUser(res));
      });
    };
    fetchApi();
  }, [token]);
  useEffect(() => {
    if (!currentPath.includes("/search")) {
      dispatch(clearInputValue());
    }
  }, [currentPath]);
  console.log(user);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-left")}>
        <div className={cx("icon")}>
          <Tippy arrow={false} content="Quay lại">
            <Button
              circleBtn
              iconBtnSmall
              leftIcon={<PrevIcon height={22} width={22} fill={"#fff"} />}
            ></Button>
          </Tippy>
          <Tippy arrow={false} content="Tiếp theo">
            <Button
              circleBtn
              iconBtnSmall
              leftIcon={<NextIcon height={22} width={22} fill={"#fff"} />}
            ></Button>
          </Tippy>
        </div>
        {currentPath.includes("/search") && <Search />}
        {currentPath.includes("/collection") && <Collection />}
      </div>

      <div className={cx("header-right")}>
        {token ? (
          <>
            <div className={cx("update-btn")}>
              <Button transparentBtn>Nâng cấp</Button>
            </div>
            <Menu placement={"bottom-end"} data={MENU_ITEMS}>
              <Tippy arrow={false} content={`${user?.display_name}`}>
                <div className={cx("user")}>
                  <span className={cx("user-icon")}>
                    <UserIcon height={16} width={16} fill={"#fff"} />
                  </span>
                  <span className={cx("user-id")}>{user?.display_name}</span>
                  <span className={cx("down-icon")}>
                    <DownIcon height={16} width={16} fill={"#fff"} />
                  </span>
                </div>
              </Tippy>
            </Menu>
          </>
        ) : (
          <div className={cx("header-right-btn")}>
            <Button signUpBtn>Đăng kí</Button>
            <Button
              signUpBtn
              href={`${process.env.REACT_APP_SPOTIFY_AUTH_URL}?client_id=${
                process.env.REACT_APP_CLIENT_ID
              }&redirect_uri=${
                process.env.REACT_APP_REDIRECT_URI
              }&${queryString.stringify({
                scope: scopes,
              })}&response_type=${response_type}`}
            >
              Đăng nhập
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
