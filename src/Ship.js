
class Ship {
  constructor (name) {
    this._name = name;
    this._startingPoint = 'Hello, welcome to Dover! Your cruise starts here (˃̣̣̥ w ˂̣̣̥)';
  }

  get startingPoint () {
      return this._startingPoint;
  }


};
module.exports = Ship;





