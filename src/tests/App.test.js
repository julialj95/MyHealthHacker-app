import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter as Router } from "react-router-dom";
import App from "../App/App";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
