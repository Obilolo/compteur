input.onButtonPressed(Button.A, function () {
    Compteur += -1
})
input.onButtonPressed(Button.AB, function () {
    Compteur = 0
})
input.onButtonPressed(Button.B, function () {
    Compteur += 1
})
let Compteur = 0
Compteur = 0
basic.forever(function () {
    basic.showString("" + (Compteur))
})
