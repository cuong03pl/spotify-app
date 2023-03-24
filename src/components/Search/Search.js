import React, { memo, useCallback, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import PropTypes from "prop-types";
import { CloseIcon, SearchIcon } from "../Icon";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearInputValue, updateInputValue } from "./searchSlice";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const cx = classNames.bind(styles);

function Search({}) {
  const inputValue = useSelector((state) => state.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearInputValue());
  };
  const handleUpdateInputValue = useCallback((value) => {
    dispatch(updateInputValue(value));
  });
  useEffect(() => {
    navigate(`/search/${inputValue}`);
  }, [inputValue]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("icon")}>
        <SearchIcon height={24} width={24} fill={"#000000"} />
      </div>
      <div className={cx("input")}>
        <input
          type=""
          name=""
          value={inputValue}
          onChange={(e) => handleUpdateInputValue(e.target.value)}
          placeholder="Bạn muốn nghe gì?"
        />
      </div>

      <div className={cx("close")}>
        {inputValue && (
          <Button
            onClick={handleClear}
            leftIcon={<CloseIcon height={24} width={24} fill={"#000000"} />}
          />
        )}
      </div>
    </div>
  );
}

Search.propTypes = {};

export default memo(Search);
