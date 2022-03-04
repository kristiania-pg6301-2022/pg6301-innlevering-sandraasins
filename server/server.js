import express from "express";
import * as path from "path";
import {
  isCorrectAnswer,
  Questions,
  randomQuestion,
} from "../public/questions";

const app = express();

//GET - Returns question with: id, category, questions, answers
app.get("/api/question", (req, res) => {
  const { id, category, question, answer } = randomQuestion();
  res.json({ id, category, question, answers });
});

//POST - Takes in: id, answer. Returns: "true" || "false"
app.post("/api/question", (req, res) => {
  const { id, answer } = req.body;
  const question = Questions.find((q) => q.id === id);
  if (isCorrectAnswer({ question, answer })) {
    return res.json({ result: "true" });
  } else {
    return res.json({ return: "false" });
  }
});

app.use(express.static("../client/dist"));

//Middleware
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    return res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at http://localhost:${server.address().port}`);
});
