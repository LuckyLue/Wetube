import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
// const express = require("express");
//Create app Object
const app = express();

const PORT = 4000;

//Call back funtion for routing test
const handleProfile = (req, res) => res.send("You are on Profile");

const handleHome = (req, res) => res.send("Hello From my ass");

const handleListening = () => console.log(`Listening on http://localhost:${PORT}`);

//Register middleware
//Middleware for logging
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan("dev"));
//Middleware for security
app.use(helmet());

app.get("/", handleHome);

//routing test
app.get("/profile", handleProfile);

// respond with "hello world" when a GET request is made to the homepage
app.listen(PORT, handleListening);