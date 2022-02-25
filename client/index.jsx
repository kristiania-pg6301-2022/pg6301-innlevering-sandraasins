import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function FrontPage() {
  return null;
}

function ShowQuestion() {
  return (
    <div>
      <h1>Your Question</h1>
    </div>
  );
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
