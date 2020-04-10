/* eslint-disable no-underscore-dangle */
class Port {
  constructor(name) {
    this._name = name;
    this.ships = [];
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  addShip(anyParams) { //* watch anyParams( not 'ship') !!!*/ 
    return this.ships.push(anyParams); //add ship(anyParams) to ships[]
  }

  removeShip(anyShips) {
    return this.ships.splice(this.ships.findIndex(i => i.anyShips === anyShips), 1); //find anyShips in the ships[] by index and remove/splice it
  }
}

module.exports = Port;
