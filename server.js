/** ****************** requires *********************  */

//requires express module
const express = require('express')

//requires socket.io module
const socket = require('socket.io')

const socketIoEvents = require('./routes/SocketIoRouteEvents')

const app = express()

/** ***************** environment variables ******************* */
var PORT = process.env.PORT || 3000;

//hosts server on ???
const server = app.listen(PORT);

console.log("Server is running");



const io = socket(server);

//Socket.io Connection------------------
io.on("connection", socketIoEvents.events);