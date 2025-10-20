radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
    } else if (receivedNumber == 2) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
    } else if (receivedNumber == 3) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinLeft)
    } else if (receivedNumber == 4) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinRight)
    } else if (receivedNumber == 5) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
})
radio.setGroup(1)
