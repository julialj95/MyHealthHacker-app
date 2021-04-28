import React from "react";
import ReactDOM from "react-dom";
import LogInputForm from "../LogInputForm/LogInputForm";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <LogInputForm />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <Router>
        <LogInputForm />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
