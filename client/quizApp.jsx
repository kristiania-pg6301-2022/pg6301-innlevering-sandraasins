import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { randomQuestion } from "../questions";

function FrontPage() {
  return (
    <div>
      <h1>Quiz</h1>
      <Link to={"/question"}>
        <button>Take a new quiz</button>
      </Link>
    </div>
  );
}

export function ShowQuestion() {
  const [question, setQuestion] = useState(randomQuestion());

  return (
    <div>
      <h1>{question.question}</h1>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((a) => (
          <div key={a}></div>
        ))}
    </div>
  );
}

export function ShowAnswer() {
  return (
    <div>
      <h1>Your answer is:</h1>
    </div>
  );
}

export function Quiz() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/question"} element={<ShowQuestion />} />
        <Route path={"/question/*"} element={<ShowAnswer />} />
      </Routes>
    </BrowserRouter>
  );
}
