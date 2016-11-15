const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');


mongoose.connect('mognodb://localhost:27017/meepledb', () => console.log("connected to meeple db"))

const app = express();
let port = 8000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

app.use('/public', express.static(__dirname + '/public'))


app.listen(8000, () => console.log("Listening on port: ", port))