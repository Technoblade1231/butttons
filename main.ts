// when press A show animation when button b is pressed plot a bar graph of 5,4
input.onButtonPressed(Button.A, function () {
    let number_1 = 0
    if (number_1 <= 100) {
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            . # . # .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showNumber(led.brightness())
    }
})
input.onButtonPressed(Button.B, function () {
    led.plotBarGraph(
    5,
    4
    )
})
