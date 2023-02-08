import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import Wrapper from "../Wrapper";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
const cx = classNames.bind(styles);

function Menu({ children, data, placement, moreMenu }) {
  const renderItem = () => {
    return data.map((item, index) => {
      return <MenuItem item={item} key={index} onClick={item.onclick} />;
    });
  };
  let classes = cx("wrapper", {
    moreMenu,
  });
  return (
    <Tippy
      interactive={true}
      trigger="click"
      placement={placement}
      render={(attrs) => (
        <div className={classes} tabIndex="-1" {...attrs}>
          <Wrapper className={cx("menu-wrapper")}>{renderItem()}</Wrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
