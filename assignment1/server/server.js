const express = require('express');
const { Socket } = require('socket.io-client');
const app = express();
 
const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);
 
// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });
io.on("conection",Socket=>{
    console.log(Socket.id);
    console.log("Nice to meet you. (shake hand)");
    Socket.emit("welcome",data =>{console.log(data)})



})
