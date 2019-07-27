import React, { Component } from "react";
import List from "./List";
import "./App.css";
import STORE from "./store";

const newRandomCard = () => {
  const id =
    Math.random()
      .toString(36)
      .substring(2, 4) +
    Math.random()
      .toString(36)
      .substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: "lorem ipsum"
  };
};

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce((newObj, [key, value]) =>
    key === keyToOmit
      ? newObj
      : {
          ...newObj,
          [key]: value
        }
  );
}

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  };

  state = {
    store: STORE
  };

  handleDeleteCard = (_cardId, _list) => {
    const { lists, allCards } = this.state.store;
    let selectedObject = lists.find(list => {
      if (list.id === _list.id) {
        return list;
      }
    });
    const filteredCardIds = selectedObject.cardIds.filter(cardId => {
      if (cardId !== _cardId) {
        return cardId;
      }
    });
    selectedObject.cardIds = filteredCardIds;

    // delete the card.
    this.setState({
      store: {
        lists: this.state.store.lists.map(newList => {
          if (newList.id === _list.id) {
            return selectedObject;
          }
          return newList;
        }),
        allCards: this.state.store.allCards
      }
    });
  };

  handleAddCard = listId => {
    const { lists, allCards } = this.state.store;
    const newCard = newRandomCard();
    let myList = lists.map(list => {
      if (listId === list.id) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    });
    this.setState({
      store: {
        lists: myList,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    });
  };

  render() {
    const { store } = this.state;
    return (
      <main className="App">
        <header className="App-header">
          <h1> Trelloyes! </h1>
        </header>
        <div className="App-list">
          {store.lists.map(list => {
            return (
              <List
                key={list.id}
                header={list.header}
                allCards={store.allCards}
                cards={list.cardIds}
                onClickAdd={() => this.handleAddCard(list.id)}
                cardDelete={id => this.handleDeleteCard(id, list)}
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default App;
