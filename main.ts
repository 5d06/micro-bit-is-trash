input.onButtonPressed(Button.A, function () {
    if (randint(0, 10) < 5) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
