import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { ExternalLinkIcon } from "../../Icon";
import Wrapper from "../Wrapper";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    title: "Tài khoản",
    icon: <ExternalLinkIcon height={16} width={16} fill="#ffffe6" />,
  },
  {
    title: "Hồ sơ",
    icon: null,
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
function Menu({ children }) {
  const renderItem = () => {
    return MENU_ITEMS.map((item, index) => {
      return <MenuItem item={item} key={index} onClick={item.onclick} />;
    });
  };
  return (
    <Tippy
      interactive={true}
      trigger="click"
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("wrapper")} tabIndex="-1" {...attrs}>
          <Wrapper className={cx("menu-wrapper")}>{renderItem()}</Wrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
