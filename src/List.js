import React from "react";
import Card from "./Card";
import "./List.css";
import store from "./store";

// find the cards..
// find the card..
// delete the card.
let List = props => {
  // console.log(props.cards)
  return (
    <section className="List">
      <header className="List-header">
        <h2> {props.header} </h2>
      </header>
      <div className="List-cards">
        {props.cards.map(cardId => {
          // find the object of the card






          {/*
          yo, where you go?
          i found the problem.
          in App.js... your setting the store of the state.
          but your not changing the ACTUAL store from store.js...
          store.allCards is still the ORIGINAL.
          Object.values(store.allCards)
          Object.values(props.allcards)
          */}
          let card = Object.values(props.allCards).find(innerCard => {
            if(innerCard.id === cardId){
              return innerCard
            }
          });
          {/* console.log(card.id) */}
          return (
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
            cardDelete={() => props.cardDelete(card.id)}
          />
        )
        })}
        <button
          onClick={props.onClickAdd}
          // onClick={() => props.onClickAdd(props.listId)}
          type="button"
          className="List-add-button"
        >
          +Add Random Card
        </button>
      </div>
    </section>
  );
};

export default List;
