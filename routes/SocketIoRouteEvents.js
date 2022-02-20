/**
 * 
 * @param {socketEvents} socket - socket.io requests path
 */

exports.events = function(socket) {
    console.log("New socket connection: " + socket.id)

    /********************* events ********************* */

    socket.on("get", (data) => {
      console.log(data);
    });

    socket.on("wifiInformation", (data) => {

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
  }