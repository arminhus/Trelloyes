import React from "react";
import ReactDom from "react-dom";
import List from "./List";
import Card from "./Card";
import renderer, { create } from "react-test-renderer";

describe("List component test", () => {
  const card = <Card id="1" title="title" content="content" />;
  const myCards = [card];
  test("should render with crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<List cards={myCards} />, div);
    ReactDom.unmountComponentAtNode(div);
  });

  //   snapshot tests
  test("should match the snapshot for List", () => {
    const list = create(<List cards={myCards} />);
    // ReactDom.render(<List cards={myCards} />, div);
    expect(list.toJSON()).toMatchSnapshot();
  });
});
