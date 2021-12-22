/** ****************** requires *********************  */

//requires express module
const express = require('express')

//requires socket.io module
const socket = require('socket.io')

const app = express()

/** ***************** environment variables ******************* */
var PORT = process.env.PORT || 3000;

//hosts server on ???
const server = app.listen(PORT);

console.log("Server is running");



const io = socket(server);

//Socket.io Connection------------------
io.on("connection", (socket) => {
    console.log("New socket connection: " + socket.id)

    /********************* events ********************* */

    socket.on("macAddress", (data) => {
      console.log(data);
    });

    socket.on("wifiInformation", (data) => {
        console.log(data);
      });
  
    socket.on("panic-signal", (data) => {
      console.log("emergency signal received " + data + "\n");
    });
  
    socket.on("esp32wifi-info", (data) => {
      console.log(data);
    });

    socket.on("message", (data) => {
      console.log(data);
    });
  });