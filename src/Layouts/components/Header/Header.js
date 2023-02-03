import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import Button from "../../../components/Button/Button";
import {
  DownIcon,
  NextIcon,
  PrevIcon,
  UserIcon,
} from "../../../components/Icon";
import styles from "./Header.module.scss";
import "tippy.js/dist/tippy.css";
import Menu from "../../../components/Proper/Menu/Menu";
import { getUser } from "../../../Services/Services";
import { useContext, useEffect, useState } from "react";
const cx = classNames.bind(styles);

function Header() {
  const token = localStorage.getItem("token");

  const [user, setUser] = useState();
  var response_type = "token";

  useEffect(() => {
    const fetchApi = async () => {
      await getUser("me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => setUser(res));
    };
    fetchApi();
  }, [token]);
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
      </div>

      <div className={cx("header-right")}>
        {token ? (
          <>
            <div className={cx("update-btn")}>
              <Button transparentBtn>Nâng cấp</Button>
            </div>

            <Menu>
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
              href={`${process.env.REACT_APP_SPOTIFY_AUTH_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${response_type}`}
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
