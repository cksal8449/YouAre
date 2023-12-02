// http://localhost:7000/

const express = require("express");
const app = express();

app.listen(7000, function () {
  console.log("7000번 포트");
});

app.get("", function (requests, response) {
  response.sendFile(__dirname + "/home.html");
});

app.use(express.static(__dirname));

app.get("/product_perfume", function (requests, response) {
  response.sendFile(__dirname + "/product_perfume/product_perfume.html");
});

app.get("/product_candle", function (requests, response) {
  response.sendFile(__dirname + "/product_candle/product_candle.html");
});

app.get("/login", function (requests, response) {
  response.sendFile(__dirname + "/login/login.html");
});

app.get("/signup", function (requests, response) {
  response.sendFile(__dirname + "/signup/signup.html");
});

app.get("/product_detail", function (requests, response) {
  response.sendFile(__dirname + "/product_detail/product_detail.html");
});
