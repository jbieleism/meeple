;const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();


// sockets
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const connections = [];

io.sockets.on('connection', (socket) => {
  connections.push(socket);
  console.log('Connections: %s sockets connected', connections.length)

  socket.on('disconnect', (data) => {
    connections.splice(connections.indexOf(socket));
    console.log("User disconnected. %s connections remain", connections.length);
  });

})



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

server.listen(port, () => console.log("Socket server listening on port: ", port))









