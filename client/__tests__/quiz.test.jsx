import React from "react";
import ReactDOM from "react-dom";

import { ShowQuestion } from "../quizApp";

describe("Quiz", () => {
  it("shows random question", () => {
    const element = document.createElement("div");
    ReactDOM.render(<ShowQuestion />, element);
    expect(element.querySelector("h1").innerHTML).toEqual("Your question");
    expect(element.innerHTML).toMatchSnapshot();
  });
});
