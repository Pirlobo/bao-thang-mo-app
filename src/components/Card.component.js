import React from "react";
import history from "../History";
const Card = (props) => {
  const handleClick = (e) => {
    if (e.target.value == 0) {
      history.push("/tim-kiem");
    } else if (e.target.value == 1) {
      history.push("/dang-viec-lam");
    } else if (e.target.value == 2) {
      history.push("/cho-thue-phong");
    }
    else if (e.target.value == 3) {
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
        <a>Get Started</a>
      </button>
    </div>
  );
};

export default Card;
