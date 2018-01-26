const five = require('johnny-five');
const Popper = require('./popper');
const Wheels = require('./wheels');
const Led = require('./led');

const board = new five.Board();

board.on("ready", () => {
  const wheels = new Wheels();
  const popper = new Popper();
  const led = new Led();

  board.repl.inject({
    wheels,
    popper,
    forward: () => {
      wheels.forward();
    },
    backward: () => {
      wheels.backward();
    },
    drunk: () => {
      wheels.drunk();
    },
    stop: () => {
      wheels.stop();
    },
    pop: () => {
      popper.pop();
      led.blink(100);
    },
    spop: () => {
      popper.stop();
      led.stop();
    }
  });
});

