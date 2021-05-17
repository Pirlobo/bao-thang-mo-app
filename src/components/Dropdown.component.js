import React from "react";
import PropTypes from "prop-types";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Dropdown = (props) => {
  let defaultProps = {
    title: props.title,
    options: props.options,
  };
  return (
    <div className="dropdown">
    <button className="dropbtn">
      {defaultProps.title}
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
     <Router>
     {defaultProps.options.map((option, index) => {
        return (
            <Link  key={index} to={option.href}>
            {option.opt}
            </Link>
         
        );
      })}
     </Router>
    </div>
  </div>
  );
};
Dropdown.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
};

export default Dropdown;
