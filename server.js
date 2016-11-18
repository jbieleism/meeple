const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();


// sockets
const server = require('http').createServer(app);
const io = require('socket.io').listen(server)

io.on('connection', (socket) => console.log("Socket connected"))



const authController = require('./server/controllers/authentication-controller')


mongoose.connect('mongodb://localhost:27017/meepledb', () => console.log("Connected to Meeple Database"));



app.use(bodyParser.json());

// Exposes public directory
app.use('/public', express.static(__dirname + '/public'));

//Serves index file on initial '/' request
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')) );



// Auth Controllers
app.post('/api/public/signup', authController.signup);
app.post('/api/public/login', authController.login);


var port = 8000;

server.listen(port, () => console.log("Web Socket listening on port: ", port))
// app.listen(port, () => console.log("Listening on port: ", port));









