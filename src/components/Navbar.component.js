import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown.component";
import { Title, Options } from "../props/DropdownProps";
const Navbar = (props) => {
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
            <i className="fas fa-bars" id="bar"></i>
            {/* <i className="far fa-window-close" id = "cancel"></i> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
