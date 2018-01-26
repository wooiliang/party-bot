var five = require("/Users/wooiliang/Desktop/jsconf/nodebots-jsconf17/johnny-five/lib/johnny-five.js"),
  board, wheels;

const SPEED = 0.1;
const INTERVAL = 100;

board = new five.Board();

board.on("ready", () => {
  wheels = {};
  currentAction = 'forward';

  led = new five.Led(12);
  wheels.both = new five.Servos([{
    pin: 9,
    type: "continuous",
    invert: true
  }, {
    pin: 10,
    type: "continuous"
  }]);

  forward = () => {
    led.blink(100);
    wheels.both.cw(SPEED);
  };

  backward = () => {
    led.blink(1000);
    wheels.both.ccw(SPEED);
  };

  forwardBackward = () => {
    setTimeout(() => {
      if (currentAction === 'forward') {
        currentAction = 'backward';
        backward();
      } else {
        currentAction = 'forward';
        forward();
      }
      forwardBackward();
    }, INTERVAL);
  };

  // run
  forwardBackward();

  // this.repl.inject({
  //   run: function() {
  //     wheels.both.cw(1);
  //   },
  //   stop: function() {
  //     process.exit();
  //   }
  // });
});
