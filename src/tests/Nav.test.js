import React from "react";
import ReactDOM from "react-dom";
import Nav from "../Nav/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Nav />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <Router>
        <Nav />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
