var expect = require("expect")
var TransmitterReceiverDistance = require("../../algorithms/TransmitterReceiverDistance")
var assert = require('chai').assert;

describe('Distance of access point', () => {
    describe('two test cases', () => {
        it('First Case', () => {
            let frequency = 2400
            let rssi = 57

            let distance = TransmitterReceiverDistance(frequency, rssi)
            expect(distance).toEqual(7.035)
        })
        it('Second Case', () => {
            let frequency = 2400
            let rssi = 30

            let distance = TransmitterReceiverDistance(frequency, rssi)
            console.log(distance)
            expect(distance).toEqual(7.035)
        })
    })
})