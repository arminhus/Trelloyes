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
      key === keyToOmit ? newObj : { ...newObj, [key]: value },
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

  handleAddCard = listId => {
    const { lists, allCards } = this.state.store;
    // m: { id: "m", title: "Thirteenth card", content: "lorem ipsum" }
    /*
id: "1",
      header: "First list",
      cardIds: ["a", "b", "e", "f", "g", "j", "l", "m"]
*/
    const newCard = newRandomCard();
    // console.log(newCard, "this is the id", listId);
    let myList = lists.map(list => {
      if (listId == list.id) {
        return { ...list, cardIds: [...list.cardIds, newCard.id] };
      }
      return list;
    });
    console.log("my list", myList);
    this.setState({
      store: {
        lists: myList,
        allCards: {
          // ...this.state.store.allCards,
          ...allCards,
          [newCard.id]: newCard
        }
      }
    });

    // console.log(lists, allCards);
  };

  // handleAddItem = itemName => {
  //   const newItems = [
  //     ...this.state.shoppingItems,
  //     { name: itemName, checked: false }
  //   ];

  //   this.setState({
  //     shoppingItems: newItems
  //   });
  //   console.log("handle add item", { itemName });
  // };

  // handleDeleteItem = item => {
  //   const newItems = this.state.shoppingItems.filter(itm => itm !== item);
  //   this.setState({
  //     shoppingItems: newItems
  //   });
  //   // console.log("handle delete item call", { item });
  // };

  render() {
    // const { store } = this.props;
    const { store } = this.state;
    // console.log("this", store.lists[0]);
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map(list => (
            <List
              key={list.id}
              listId={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onClickAdd={this.handleAddCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
