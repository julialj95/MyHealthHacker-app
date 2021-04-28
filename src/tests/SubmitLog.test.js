import React from "react";
import ReactDOM from "react-dom";
import SubmitLog from "../SubmitLog/SubmitLog";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <SubmitLog />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <Router>
        <SubmitLog />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
