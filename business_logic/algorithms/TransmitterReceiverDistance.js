/**
 * function gets a frequency and rssi and return distance
 * @param {*} frequency 
 * @param {*} RSSI 
 * @returns the distance from the transmitter device(double)
 */
function TransmitterReceiverDistance(frequency, RSSI){
    // constants ===============
    const ONE_METER_RSSI = 27.55
    const CLEAR_DISTRACTION_ENVIRONMENT_N = 2
    const LOGARITHM_BASIS = 10
    const DEFAULT_TO_FIXED_ANSWER = 3

    function getParameterN(){
        return CLEAR_DISTRACTION_ENVIRONMENT_N
    }

    function getLogNumber(number){
        return Math.log10(number) * LOGARITHM_BASIS
    }

    function getFractionToFixed(numerator, denominator){
        let num = numerator / denominator
        return num
    }

    if (frequency == undefined || RSSI == undefined){
        return
    }

    let exponentDenominator = CLEAR_DISTRACTION_ENVIRONMENT_N * LOGARITHM_BASIS
    let exponentNumerator = (ONE_METER_RSSI - (CLEAR_DISTRACTION_ENVIRONMENT_N * getLogNumber(frequency))) + RSSI
    let fraction = getFractionToFixed(exponentNumerator, exponentDenominator)

    return parseFloat(Math.pow(10, fraction).toFixed(DEFAULT_TO_FIXED_ANSWER))
}

module.exports = TransmitterReceiverDistance