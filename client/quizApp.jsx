import React, { useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { isCorrectAnswer, randomQuestion } from "../server/questions";

const QuestionContext = React.createContext({ randomQuestion });

export function FrontPage() {
  return (
    <div>
      <h1>Quiz</h1>
      <div>
        <Link to={"/question"}>
          <button>Show me a random question</button>
        </Link>
      </div>
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
      <h1>Your random question:</h1>
      <h2>{question.question}</h2>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((a) => (
          <div key={a}>
            <button onClick={() => handleSubmit(a)}>
              {question.answers[a]}
            </button>
          </div>
        ))}
      <div>
        {<h3>Your answer is:</h3>}
        {<h4>{answer || ""}</h4>}
      </div>
    </>
  );
}

export function Quiz() {
  const [question, setQuestion] = useState(randomQuestion());
  const [answer, setAnswer] = useState("");

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
