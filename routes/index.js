const express = require('express'); //requires express module
const socket = require('socket.io'); //requires socket.io module
const fs = require('fs');
const app = express();
var PORT = process.env.PORT || 3000;
const server = app.listen(PORT); //hosts server on localhost:3000

app.use(express.static('public'));
console.log('Server is running');
const io = socket(server);

var count = 0;


//Socket.io Connection------------------
io.on('connection', (socket) => {

    console.log("New socket connection: " + socket.id)

    socket.on('wifiInformation', (data) => {
        console.log(socket.connected);
        console.log(data); 
    })
})

module.exports = server