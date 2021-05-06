let p1 = 0
let p0 = 0
radio.setGroup(197)
basic.forever(function () {
    p0 = pins.analogReadPin(AnalogPin.P0)
    // mal traduit
    p0 = Math.round(Math.map(p0, 5, 1023, -5, 5))
    basic.pause(200)
    p1 = pins.analogReadPin(AnalogPin.P1)
    // mal traduit
    p1 = Math.round(Math.map(p0, 5, 1023, -5, 5))
    basic.pause(200)
    if (p0 == 0) {
        radio.sendValue("p_0", p0 * 20)
    } else {
        radio.sendValue("p_0", p0 * 20)
    }
    if (p1 == 0) {
        radio.sendValue("p_1", p1 * 20)
    } else {
        radio.sendValue("p_2", p1 * 20)
    }
})
