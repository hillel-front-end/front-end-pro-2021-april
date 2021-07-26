var express = require("express");
var fs = require("fs");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const port = 3005;

app.listen(port, function () {
  // говорим на каком порту запускать нашу  NODE_JS  программу.
  console.log(`Example app listening on port http://localhost:${port}/`);
});

app.get("/foo", function (req, res) {
  setTimeout(() => {
    res.status(200).send("123");
  }, 1000);
});

app.get("/auth", (req, res) => {
  res.json({ id: 5 });
});

const google = "./google/users.json";

app.get("/google", (req, res) => {
  read(google, (e, payload) => {
    if (payload) {
      res.send(payload);
    }
  });
});

const facebook = "./facebook/users.json";

app.get("/facebook", (req, res) => {
  read(facebook, (e, payload) => {
    console.log(e, "e");
    if (payload) {
      res.send(payload);
    }
  });
});

function read(url, reader) {
  fs.readFile(url, "utf-8", reader);
}
