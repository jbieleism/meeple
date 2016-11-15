const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect('mognodb://localhost:27017/meepledb', () => console.log("connected to meeple db"))

const app = express();
let port = 8000;

app.listen(port, () => console.log("Listening on port: ", port))