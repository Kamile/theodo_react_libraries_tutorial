const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

let value = 5;
let comments = [
  {
    text: "Hello",
    id: 0,
    numLikes: 1
  }
];

app.listen(8000, () => console.log("Listening on port 8000"));

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Got the index page.");
});

app.get("/value/increment", (req, res) => {
  value = value + 1;
  res.send({
    value
  });
});

app.get("/value/get", (req, res) => {
  res.send({
    value
  });
});

app.get("/comments/get", (req, res) => {
  res.send({
    comments
  });
});

app.post("comments/addComment", (req, res) => {
  res.send({
    comments
  });
});
