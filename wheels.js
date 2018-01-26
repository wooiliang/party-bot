const five = require('johnny-five');
const config = require('./config');

class Wheels {
  constructor() {
    this.wheels = new five.Servos([{
      pin: config.pins.leftWheel,
      type: "continuous",
      invert: true
    }, {
      pin: config.pins.rightWheel,
      type: "continuous"
    }]);
    this.currentAction = 'forward';
  }

  forward() {
    this.wheels.cw(config.wheels.speed);
  }

  backward() {
    this.wheels.ccw(config.wheels.speed);
  }

  wheelsStop() {
    this.wheels.stop();
  }

  drunk() {
    this.isDrunk = true;
    this.loopDrunk();
  }

  loopDrunk() {
    setTimeout(() => {
      if (this.currentAction === 'forward') {
        this.currentAction = 'backward';
        this.backward();
      } else {
        this.currentAction = 'forward';
        this.forward();
      }
      if (this.isDrunk) {
        this.loopDrunk();
      } else {
        this.wheelsStop();
      }
    }, config.wheels.forwardBackwardInterval);
  }

  stop() {
    this.isDrunk = false;
    this.wheelsStop();
  }
}

module.exports = Wheels;
