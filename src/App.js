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
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit
        ? newObj
        : {
            ...newObj,
            [key]: value
          },
    {}
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

  handleDeleteCard = (id, list) => {
    console.log(id, list);
    // console.log("hello", id);
    // find the array that needs to be filtered
    // inside the list of this cards
    const { lists, allCards } = this.state.store;
    // find the list..
    // find its cards..
    // find the card.
    // const myList =
    lists.map(list => {
      // each list is mapped through
      // console.log(list);
      // each cardIds in each list will be filtered.
      // console.log(listß.cardIds.filter(selected => selected !== id));
    });
    // delete the card.
  };

  handleAddCard = listId => {
    // console.log(listId);
    const { lists, allCards } = this.state.store;
    const newCard = newRandomCard();
    let myList = lists.map(list => {
      if (listId == list.id) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    });
    console.log("my list", myList);
    this.setState({
      store: {
        lists: myList,
        allCards: {
          ...allCards,
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
            {
              /* console.log("list console in map", list); */
            }
            return (
              <List
                key={list.id}
                header={list.header}
                cards={list.cardIds.map(id => store.allCards[id])}
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
