/**
 * function gets a frequency and rssi and return distance
 * @param {*} frequency 
 * @param {*} RSSI 
 * @returns the distance from the transmitter device(double)
 */
function TransmitterReceiverDistance(frequency, RSSI){
    /**constants */
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

    function getFractionToFixed(numerator, denominator, toFix = DEFAULT_TO_FIXED_ANSWER){
        let num = numerator / denominator
        return Math.toFixed(toFix)
    }

    if (frequency == undefined || RSSI == undefined){
        return
    }

    let exponentDenominator = CLEAR_DISTRACTION_ENVIRONMENT_N * LOGARITHM_BASIS
    let exponentNumerator = ONE_METER_RSSI - (getLogNumber(frequency) + RSSI)
    let fraction = getFractionToFixed(exponentNumerator, exponentDenominator)

    return Math.pow(fraction, 10)
}

module.exports = TransmitterReceiverDistance