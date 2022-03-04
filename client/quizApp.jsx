import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { isCorrectAnswer, randomQuestion } from "../server/questions";

export const QuestionContext = React.createContext({ randomQuestion });

export function FrontPage() {
  const [question, setQuestion] = useState();
  useEffect(async () => {
    const res = await fetch("/api/question");
    setQuestion(await res.json());
  }, []);

  return (
    <div>
      <h1>Quiz</h1>
      <Link to={"/question"}>
        <button>Show me a random question</button>
      </Link>
    </div>
  );
}

export function ShowQuestion() {
  const { randomQuestion } = useContext(QuestionContext);
  const [question, setQuestion] = useState(randomQuestion());
  const [answer, setAnswer] = useState();

  function handleSubmit(answer) {
    setQuestion(randomQuestion());
    const setAnswerStatus = setAnswer;

    if (isCorrectAnswer(question, answer)) {
      console.log("right");
      return setAnswerStatus("Correct");
    } else {
      console.log("wrong");
      setAnswerStatus("Incorrect");
    }
  }

  return (
    <>
      <h3>{question.question}</h3>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((a) => (
          <div key={a} data-testid={a}>
            <button onClick={() => handleSubmit(a)}>
              {question.answers[a]}
            </button>
          </div>
        ))}
      <div>
        <h3>Your answer is: </h3>
        <h4>{answer || ""}</h4>
      </div>
    </>
  );
}

export function Quiz({ question, setAnswer }) {
  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />} />
      <Route
        path={"/question"}
        element={<ShowQuestion question={question} answer={setAnswer} />}
      />
    </Routes>
  );
}
