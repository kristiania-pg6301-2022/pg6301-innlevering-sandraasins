import React from "react";
import ReactDOM from "react-dom";

import { ShowAnswer, ShowQuestion } from "../quizApp";

describe("Quiz", () => {
  it("shows random question", () => {
    const element = document.createElement("div");
    ReactDOM.render(<ShowQuestion />, element);
    expect(element.querySelector("h1").innerHTML).toEqual("Your question");
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("shows answer", () => {
    const element = document.createElement("div");
    ReactDOM.render(<ShowAnswer />, element);
    expect(element.querySelector("h1").innerHTML).toEqual("Your answer is:");
    expect(element.innerHTML).toMatchSnapshot();
  });
});
