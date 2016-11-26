const express = require('express');
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

  socket.on('send message', (data) => {
    io.sockets.emit('get message', data)
  })

  socket.on('userConnect', (data, callback) => {
    callback(true);
    socket.username = data;
    users.push(socket.username);
    updateUsernames();
  })

  let updateUsernames = () => {
    io.sockets.emit('get users', usernames)
  }


})


////////////////////////////////////


const authController = require('./server/controllers/authentication-controller')
const chatController = require('./server/controllers/chat-controller')
const friendController = require('./server/controllers/friend-controller')

mongoose.connect('mongodb://localhost:27017/meepledb', () => console.log("Connected to Meeple Database"));



app.use(bodyParser.json());

// Exposes directories
app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));


//Serves index file on initial '/' request
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')) );



// Auth Controllers
app.post('/api/public/signup', authController.signup);
app.post('/api/public/login', authController.login);

// Chat Controllers
app.post('/api/chat/post', chatController.postChat);
app.get('/api/chat/get', chatController.getChats);

//Friend Controller
app.get('/api/friends/get', friendController.getUsers)
app.post('/api/friends/makeFriendship', friendController.makeFriendship)


var port = 8000;

server.listen(port, () => console.log("Socket server listening on port: ", port))









