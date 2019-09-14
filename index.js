//Load Module "express"
const express = require("express");
//Create app Object
const app = express();

const PORT = 4000;

//Call back funtion for routing test
function handleProfile(req, res) {
  res.send("You are on Profile");
}

function handleHome(req, res) {
  console.log(req);
  res.send("Hello From Home");
}

function handleListening() {
  console.log(`Listening on http://localhost:${PORT}`);
}

app.get("/", handleHome);

//routing test
app.get("/profile", handleProfile);

// respond with "hello world" when a GET request is made to the homepage
app.listen(PORT, handleListening);
