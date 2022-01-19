const InformationHandler = require('../models/SocketIoInformation/InfomationHandler')

exports.SendData = function (data){
  let handler = InformationHandler.socketIoHandler
  let response = handler(data)
}