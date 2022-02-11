/******************* constants **************** */
const DEBUG_MODE = true
const strAccessPoint = "AccessPoint"

exports.socketIoHandler = function (data){
    try {
        let wifiInformation = JSON.parse(data)

        if (DEBUG_MODE){
        console.log(wifiInformation)
        if (socket.connected) {
            console.log("socket is connected")
        }
        }
        
        let isInPanicState = wifiInformation["isAlarmedOn"]
        
        let accessPointNumber = parseInt(wifiInformation["NumberOfAccessPoints"])
        
        let accessPointKey = ""

        if (accessPointNumber > 0) {
        console.log("get In")
        for (let index = 1; i < accessPointNumber; ++index) {
            accessPointKey = strAccessPoint + index.toString()
            console.log(accessPointKey)
            let accessPointInfo = wifiInformation[accessPointKey]
            console.log(accessPointInfo)
            console.log("distance  " + TransmitterReceiverDistance(accessPointInfo["frequency"],accessPointInfo["Rssi"]))
        }
        }
    } catch {
    } finally {
    }
}