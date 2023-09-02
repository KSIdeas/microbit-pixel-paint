let Pixel: game.LedSprite = null
basic.showLeds(`
    # # # . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # # # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # . .
    `)
basic.showLeds(`
    . # # # .
    . . . # .
    . . . . .
    . . . . .
    # # # . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . . . # .
    . . . . .
    # # # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . # .
    # # # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # # # .
    # # # # .
    `)
basic.showLeds(`
    . . . . #
    . . . . .
    . . . . .
    . # # # .
    # # # # .
    `)
basic.showLeds(`
    . . . . #
    . . . . #
    . . . . .
    . # # # .
    # # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . . #
    . # # # .
    # # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . #
    . # # # #
    # # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # # # #
    # # # # #
    `)
basic.showLeds(`
    . # . # .
    . # # . .
    . # . # .
    . # # # #
    # # # # #
    `)
let Brush = game.createSprite(0, 0)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        Brush.change(LedSpriteProperty.X, -1)
        basic.pause(250)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        Brush.change(LedSpriteProperty.X, 1)
        basic.pause(250)
    }
    if (input.isGesture(Gesture.LogoUp)) {
        Brush.change(LedSpriteProperty.Y, 1)
        basic.pause(250)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        Brush.change(LedSpriteProperty.Y, -1)
        basic.pause(250)
    }
    if (input.buttonIsPressed(Button.A)) {
        Pixel = game.createSprite(Brush.get(LedSpriteProperty.X), Brush.get(LedSpriteProperty.Y))
    }
})
