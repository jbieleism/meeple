

// //some library file you write independetly of angular
// const io = require('socket.io-client');

// class Socket {
//   constructor() {
//     this.socket = io('http://www.somewhere.else/');
//   }

//   emit(msg, payload){
//     this.socket.emit(msg, payload);
//   }

//   join(room) {
//     this.emit('join', room);
//   }

//   on(event, callback) {
//     this.socket.on(event, callback);
//   }

// }



// module.exports = Socket;


// // some angular file
// import  Socket from 'somewhere';
// angular.module('Meeple', []).value('Socket', new Socket());