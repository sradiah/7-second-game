let Start = 0
let Elapsed = 0
let Score = 0
input.onButtonPressed(Button.A, function () {
    Start = input.runningTime()
    basic.showIcon(IconNames.Chessboard)
})
input.onButtonPressed(Button.B, function () {
    Elapsed = input.runningTime() - Start
    basic.showIcon(IconNames.Angry)
    Score = Math.abs(Elapsed - 7000)
    basic.showNumber(Score)
})
