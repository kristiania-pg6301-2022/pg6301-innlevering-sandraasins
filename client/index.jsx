import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowQuestion } from "./quizApp";

function FrontPage() {
  return null;
}

function ShowAnswer() {
  return null;
}

function QuizApplication() {
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

ReactDOM.render(<QuizApplication />, document.getElementById("app"));
