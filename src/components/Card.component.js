import React from "react";
import history from "../History";
const Card = (props) => {
  const handleClick = (e) => {
    if (e.target.value == 0) {
      history.push("/vieclam-va-nha");
    } else if (e.target.value == 1) {
      history.push("/a");
      window.location.reload()
    } else if (e.target.value == 2) {
      history.push("/dang-bai-ban-nha");
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

export default Card;
