const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();


mongoose.connect('mongodb://localhost:27017/meepledb', () => console.log("connected to meeple db"))

let port = 8000;



app.use(bodyParser.json());



app.use('/public', express.static(__dirname + '/public'))


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))




app.listen(8000, () => console.log("Listening on port: ", port))