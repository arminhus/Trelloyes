import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import renderer, { create } from "react-test-renderer";

describe("Card component test", () => {
  test("should render with crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Card />, div);
    ReactDom.unmountComponentAtNode(div);
  });

  test("should render card first card in first list", () => {
    const tree = renderer
      .create(<Card title="first card" content="lorem ipsum" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  //   snapshot tests
  test("should match the snapshot for Card", () => {
    const card = create(<Card />);
    expect(card.toJSON()).toMatchSnapshot();
  });
});
