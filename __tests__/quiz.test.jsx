import * as React from "react";
import * as ReactDOM from "react-dom";
import { QuestionContext, Quiz, ShowQuestion } from "../quizApp";
import { MemoryRouter } from "react-router-dom";
import { Simulate } from "react-dom/test-utils";

const question = {
  question: "Is Jest fun?",
  answers: {
    answer_a: "Yes",
    answer_b: "No",
    answer_c: "Hell no",
  },
  correct_answers: {
    answer_a_correct: "false",
    answer_b_correct: "false",
    answer_c_correct: "true",
  },
};

describe("Quiz", () => {
  it("shows random question", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter initialEntries={["/question"]}>
        <QuestionContext.Provider value={{ randomQuestion: () => question }}>
          <Quiz />
        </QuestionContext.Provider>
      </MemoryRouter>,
      element
    );
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("shows answer", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter initialEntries={["/question"]}>
        <QuestionContext.Provider value={{ randomQuestion: () => question }}>
          <ShowQuestion />
        </QuestionContext.Provider>
      </MemoryRouter>,
      element
    );
    Simulate.click(element.querySelector("[data-testid=answer_a] button"));
    expect(element.innerHTML).toMatchSnapshot();
  });
});
