basic.showIcon(IconNames.Heart)
basic.forever(function () {
    serial.writeNumbers([input.acceleration(Dimension.X), input.acceleration(Dimension.Y)])
    basic.showNumber(input.acceleration(Dimension.X))
})
