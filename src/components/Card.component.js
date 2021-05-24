import React from "react";
import history from "../History";
import PropTypes from "prop-types";
const Card = (props) => {
  const handleClick = (e) => {
    
    if (e.target.value == 0) {
      console.log(e.target.value);
      history.push("/tim-kiem");
    } else if (e.target.value == 1) {
      console.log(e.target.value);
      history.push("/dang-viec-lam");
    } else if (e.target.value == 2) {
      console.log(e.target.value);
      history.push("/cho-thue-phong");
    } else if (e.target.value == 3) {
      console.log(e.target.value);
      history.push("/ban-xe");
    }
    
  };
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <h4>{props.description}</h4>
      <button
        onClick={handleClick}
        value={props.value}
        className="btn btn-get-started"
      >
        Get Started
      </button>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.number,
};

export default Card;
