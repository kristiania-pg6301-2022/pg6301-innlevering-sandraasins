import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { ShowAnswer, ShowQuestion, QuestionContext } from "../quizApp";

const question = {
  question: "Do you like Jest?",
  answers: {
    answer_a: "Yes",
    answer_b: "No",
    answer_c: "Jest sucks",
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
    ReactDOM.render(<ShowQuestion />, element);
    expect(element.querySelector("h1").innerHTML).toEqual("Your question");
    expect(element.innerHTML).toMatchSnapshot();
  });

  /*
 it("shows random question", () => {
   const element = document.createElement("div");
   ReactDOM.render(
     <MemoryRouter initialEntries={["/question"]}>
       <QuestionContext.Provider value={{ randomQuestion: () => question }}>
         <ShowQuestion />
       </QuestionContext.Provider>
     </MemoryRouter>,
     expect(element.innerHTML).toMatchSnapshot()
   );
 });
 /*

 */
  it("shows answer", () => {
    const element = document.createElement("div");
    ReactDOM.render(<ShowAnswer />, element);
    expect(element.querySelector("h1").innerHTML).toEqual("Your answer is:");
    expect(element.innerHTML).toMatchSnapshot();
  });
});
