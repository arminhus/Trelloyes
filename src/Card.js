import React from "react";
import "./Card.css";

let Card = props => {
  return (
    <div className="Card">
      <button type="button" onClick={props.cardDelete}>
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
};
export default Card;
