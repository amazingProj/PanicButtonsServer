var expect = require("expect")

var TransmitterReceiverDistance = require("../algorithms/TransmiterReciever.js")

var assert = require('assert')

describe('Normal cases', () => {
    describe('two test cases', () => {
        it('First Case', () => {
            let frequency = 2.5
            let rssi = 40

            let distance = TransmitterReceiverDistance(frequency, rssi)
            expect(distance).toEquals(5)
        })
    })
})