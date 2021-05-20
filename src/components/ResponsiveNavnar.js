import React from "react";
import { useSelector, useDispatch } from "react-redux";
import types from "../utils/ActionTypes";
const ResponsiveNavbar = () => {
  const state = useSelector((state) => state.navbar);
  const dispatch = useDispatch();
  const { SET_CANCEL } = types;
  const onClick = (e) => {
    dispatch({
      type: SET_CANCEL,
      payload: {},
    });
  };
  return (
    <nav className={"res-nav " + (state.isInitialMenuBar ? "" : "active")}>
      <ul className="res-links">
        <li>
          <a onClick={onClick} href="/">
            Trang chủ
          </a>
        </li>
        <li>
          <a onClick={onClick} href="/tim-kiem">
            Tìm kiếm
          </a>
        </li>
        <li>
          <a onClick={onClick} href="/cho-thue-phong">
            Cho Thuê Phòng
          </a>
        </li>
        <li>
          <a onClick={onClick} href="/dang-viec-lam">
            Đăng Việc Làm
          </a>
        </li>
        <li>
          <a onClick={onClick} href="/ban-xe">
            Bán Xe
          </a>
        </li>
        <li>
          <a onClick={onClick} href="/#contact">
            Liên lạc
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ResponsiveNavbar;
