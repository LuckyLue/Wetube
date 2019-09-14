//Load Module "express"
import express from "express"
// const express = require("express");
//Create app Object
const app = express();

const PORT = 4000;

//Call back funtion for routing test
const handleProfile = (req, res) => res.send("You are on Profile");

const handleHome = (req, res) => res.send("Hello From Home");

const handleListening = () => console.log(`Listening on http://localhost:${PORT}`);

app.get("/", handleHome);

//routing test
app.get("/profile", handleProfile);

// respond with "hello world" when a GET request is made to the homepage
app.listen(PORT, handleListening);