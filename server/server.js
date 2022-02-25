import express from "express";

const app = express();

app.get("/api/login", (req, res) => {
  res.json({
    username: "admin",
    fullName: "Noen André Persson",
  });
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at http://localhost:${server.address().port}`);
});
