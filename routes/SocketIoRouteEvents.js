/**
 * send to model functions
 * @see SocketToModel.js
 *  */
const SendModel = require('./SocketToModel')

exports.events = function(socket) {
    console.log("New socket connection: " + socket.id)

    /********************* events ********************* */

    socket.on("macAddress", (data) => {
      console.log(data);
    });

    socket.on("wifiInformation", SendModel.SendData);
  
    socket.on("panic-signal", (data) => {
      console.log("emergency signal received " + data + "\n");
    });
  
    socket.on("esp32wifi-info", (data) => {
      console.log(data);
    });

    socket.on("message", (data) => {
      console.log(data);
    });
  }