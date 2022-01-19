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

var mqtt = require('mqtt')

var options = {
    host: '965b05d8eb154cfd8dd2a50aed2d5655.s1.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'Esp32',
    password: 'Esp32Asaf'
}

//initialize the MQTT client
var client = mqtt.connect(options);

//setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    //Called each time a message is received
    console.log('Received message:', topic, message.toString());
});

// subscribe to topic 'my/test/topic'
client.subscribe('my/test/topic');

// publish message 'Hello' to topic 'my/test/topic'
client.publish('my/test/topic', 'Hello');