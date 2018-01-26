const five = require('johnny-five');
const pixel = require('node-pixel');
const config = require('./config');

class Pixel {
  constructor() {
    this.strip = new pixel.Strip({
      data: config.pins.pixel,
      length: 8,
      color_order: pixel.COLOR_ORDER.GRB,
      board: this,
      controller: "FIRMATA"
    });
  
    this.strip.on("ready", () => {
      console.log("Strip ready, let's go");
      var colors = ["red", "green", "blue", "yellow", "cyan", "magenta", "white"];
      //var current_colors = [0,1,2,3,4];
      var current_pos = [0,1,2,3,4];
      current_pos.forEach((pos) => {
          strip.pixel(pos).color(colors[pos]);
      });
      var blinker = setInterval(function() {
        strip.shift(1, pixel.FORWARD, true);
        strip.show();
      }, 1000/fps);
    });
  }
}

module.exports = Pixel;
