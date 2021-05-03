import React from "react";
import ReactDOM from "react-dom";
import Login from "../Login/Login";
import { MemoryRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Login />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <Router>
        <Login />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
