const five = require('johnny-five');
const config = require('./config');

class Led {
  constructor() {
    this.led = new five.Led(config.pins.led);
  }

  blink(speed) {
    this.led.blink(speed);
  }

  stop() {
    this.led.stop();
  }
}

module.exports = Led;
