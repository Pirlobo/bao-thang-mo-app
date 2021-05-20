import React, { useState, useEffect, } from "react";
import Dropdown from "./Dropdown.component";
import { Title, Options } from "../props/DropdownProps";
import { useDispatch, useSelector } from "react-redux";
import types from '../utils/ActionTypes'
const Navbar = (props) => {
  const { SET_MENU_BAR, SET_CANCEL } = types
  const state = useSelector((state) => state.navbar)
  const dispatch = useDispatch()
  const onCancel = (e) => {
    dispatch({
      type: SET_CANCEL,
      payload: {}
    })
  }
  const onClick = (e) => {
    dispatch({
      type: SET_MENU_BAR,
      payload: {}
    })
  }
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="main-logo">
          <a>
            {" "}
            Jobs Cho Người Việt
            <i className="fas fa-thumbs-up"></i>
          </a>
        </div>
        <div className="main-links">
          <ul className="links">
            <li className="link-items">
              <i className="fas fa-home"></i>
              <a href="/">Trang chủ</a>
            </li>
            <Dropdown title={Title} options={Options}></Dropdown>
            <li className="link-items">
              <i className="fas fa-phone-volume"></i>
              <a href="/#contact">Liên lạc</a>
            </li>
          </ul>
          <div className="navbar_toggle">
          {state.isInitialMenuBar ? 
            <i onClick={onClick} className="fas fa-bars" id="bar"></i>
           : 
           <i onClick={onCancel} class="fas fa-window-close"></i>
          
           }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
