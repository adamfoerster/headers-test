const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
  });
  res.send("Hello World!");
});

app.get("/nomethods", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
  });
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
