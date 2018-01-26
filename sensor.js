const five = require('johnny-five');
const config = require('./config');

class Sensor {
  constructor() {
    this.sensor = new five.Sensor('A0');
    this.sensor.on('data', () => {
      console.log(this.value);
    });
  }
}

module.exports = Sensor;
