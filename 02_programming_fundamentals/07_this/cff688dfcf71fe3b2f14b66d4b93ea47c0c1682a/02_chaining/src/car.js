const car = {
  start: function () {
    this.speed = 0;
    this.minute = 0;
    this.distance = 0;
    return this;
  },

  changeSpeed: function (speed) {
    this.speed = speed; 
    return this;
  },

  drive: function (minute) {
    this.distance = ((this.speed / 60) * minute);
    return this;
  },

  showDistance: function () {
    console.log (this.distance)+" Km";
    return this;
  },

};

module.exports = car;
