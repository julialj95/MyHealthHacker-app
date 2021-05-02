import React from "react";
import ReactDOM from "react-dom";
import LogItem from "../LogItem/LogItem";
import { MemoryRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <LogItem />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <Router>
        <LogItem />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
