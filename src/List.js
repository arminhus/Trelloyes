import React from "react";
import Card from "./Card";
import "./List.css";

let List = props => {
  // console.log(props);
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map(card => (
          <Card key={card.id} title={card.title} content={card.content} />
        ))}
        <button
          onClick={() => props.onClickAdd(props.listId)}
          type="button"
          className="List-add-button"
        >
          + Add Random Card
        </button>
      </div>
    </section>
  );
};

export default List;
