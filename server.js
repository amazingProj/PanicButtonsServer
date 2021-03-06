/** ****************** requires *********************  */
require('dotenv').config();

const socket = require('socket.io')

const socketIoEvents = require('./routes/SocketIoRouteEvents')

//requires express module
const express = require('express')

const app = express()

/** ***************** environment variables ******************* */
var PORT = process.env.PORT || 3000;


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Asaf:<password>@indoornavigtiondb.pb6oq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const server = app.listen(PORT);

console.log("Server is running");

const io = socket(server);

//Socket.io Connection------------------
io.on("connection", socketIoEvents.events);

var mqtt = require('mqtt')

var url = 'wss://712d6a94edd544ddac8b5c44600f18d3.s1.eu.hivemq.cloud:8884/mqtt'

var options = {
    username: 'Esp32',
    password: 'Esp32Asaf',
    wsOptions : true
}

var subscribeTopic = "users/devices/location"

//initialize the MQTT client
var mqttClient = mqtt.connect(url,options);

//setup the callbacks
mqttClient.on('connect', function () {
    console.log('Connected');
});

mqttClient.on('error', function (error) {
    console.log(error);
    client = mqtt.connect(options)
});

mqttClient.on('message', function (topic, message) {
    //Called each time a message is received
    console.log('Received message:', topic, message.toString());
    //  ToDO 
    // send the location to all the users that connected to react the
    // location of the user
    // updates the last time of connected
    // many things to do with the database
});

mqttClient.subscribe(subscribeTopic);

/*
client.end();*/