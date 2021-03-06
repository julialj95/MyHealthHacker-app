import React from "react";
import ReactDOM from "react-dom";
import LogsPage from "../LogsPage/LogsPage";
import { MemoryRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <LogsPage />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <Router>
        <LogsPage />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
