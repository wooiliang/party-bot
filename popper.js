const five = require('johnny-five');
const config = require('./config');

class Popper {
  constructor() {
    this.servo = new five.Servo({
      pin: config.pins.pop,
      type: "continuous"
    });
  }

  pop() {
    this.servo.cw();
  }

  stop() {
    this.servo.stop();
  }
}

module.exports = Popper;
