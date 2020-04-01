//const shipMaxCapcity = 500;

class Ship {
  constructor(name) {
    this._name = name;
    this._startingPoint = 'Hello, welcome to Dover! Your cruise starts here (˃̣̣̥ w ˂̣̣̥)';
    //this.passenger = 0;
    //this.seats = 400;
  }

  get startingPoint() {
    return this._startingPoint;
  }

  /*getPassenger(x) {
    this.passenger += x;
    if (this.seats < shipMaxCapcity && this.passenger < 400) {
      return 'Hop-on friend!'
    }
  }*/
  
  setSail() {
    this._startingPoint = !this._startingPoint
  }



};
module.exports = Ship;





