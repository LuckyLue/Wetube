//Load Module "express"
const express = require('express')
//Create app Object 
const app = express()

const PORT = 4000;

function handleListening() {
    console.log(`Listening on http://localhost:${PORT}`);
}

// respond with "hello world" when a GET request is made to the homepage
app.listen(PORT, handleListening);