import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./TippyHeadless.module.scss";
const cx = classNames.bind(styles);

function TippyHeadless({ component, children }) {
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
