input.onButtonPressed(Button.B, function () {
    basic.showString("sum=")
    basic.showNumber(sumTimeElapsed)
    basic.pause(2000)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    startTime = input.runningTime()
    basic.showIcon(IconNames.Yes)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    timeElapsed = input.runningTime() - startTime
    sumTimeElapsed = Math.idiv(timeElapsed, 1000)
    sumTimeElapsed += timeElapsed
    basic.showNumber(timeElapsed)
})
let timeElapsed = 0
let sumTimeElapsed = 0
let startTime = 0
startTime = 0
sumTimeElapsed = 0
timeElapsed = 0
basic.forever(function () {
	
})
