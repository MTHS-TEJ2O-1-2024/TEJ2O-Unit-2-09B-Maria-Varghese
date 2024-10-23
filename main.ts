/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maria Varghese
 * Created on: Sep 2024
 * This program plays rock, paper, scissor
*/

// variables
let randomNumber: number = 0

randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

    // if randomNumber was 0
    if (randomNumber == 0) {
        basic.showIcon(IconNames.Square)
        basic.pause(5000)
    }

    // if randomNumber was 1
    if (randomNumber == 1) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(5000)
    }

    // if randomNumber was 1
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(5000)
    }

let score = 0
input.onButtonPressed(Button.A, function () {
    score = score +1
    basic.showIcon(IconNames.Yes)
})

input.onButtonPressed(Button.B, function () {
    basic.showString('Score:' + score)
})

    // pause and show you are ready again
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})
