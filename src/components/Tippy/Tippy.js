import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Tippy.module.scss";
const cx = classNames.bind(styles);

function Tippy({ component, children }) {
  return (
    <Tippy
      render={(attrs) => (
        <div className="box" tabIndex="-1" {...attrs}>
          {component}
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default TippyHeadless;
