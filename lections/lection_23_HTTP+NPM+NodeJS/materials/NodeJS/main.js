const express = require("express");
const fs = require("fs");
const app = express();
const port = 6060;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", (req, res) => {
  const person = {
    name: "Valera",
  };

  res.send(JSON.stringify(person));
});

app.get("/foo", (req, res) => {
  console.log("route frome --> /foo");
  res.send("Hello World! -- 2");
});

app.get("/users", (request, response) => {
  const query = request.query;

  fs.readFile("./models/users.json", "utf-8", function (error, data) {
    // console.log(data, "data");
    let users = JSON.parse(data);

    if (query.minAge && query.maxAge) {
      const {minAge, maxAge} = query;
      users = users.filter(user => user.age >= minAge && user.age <= maxAge);
    }

    response.json(users);
  });
});

//http://localhost:6060/users/valera
////http://localhost:6060/users/alex/11
app.get("/users/:name/:id", function (request, response) {
  console.log(request.params);

  response.send('ok')
})


https://lun.ua/uk/?radius=110&min_full_price=925452&max_full_price=16019520

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// http://localhost:6060
