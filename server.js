const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();


mongoose.connect('mongodb://localhost:27017/meepledb', () => console.log("Connected to Meeple Database"));

app.use(bodyParser.json());

// Exposes public directory
app.use('/public', express.static(__dirname + '/public'));

//Serves index file on initial '/' request
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')) );



var port = 8000;

app.listen(port, () => console.log("Listening on port: ", port));









