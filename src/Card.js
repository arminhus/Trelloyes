import React from "react";
import "./Card.css";

let Card = props => {
  return (
    <div className="Card">
      <button type="button">delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      {/* <h3>{state.title}</h3> */}
    </div>
  );
};
export default Card;
