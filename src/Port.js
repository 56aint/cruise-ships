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

  addShip(anyParam) { //* watch randoMship( not 'ship')  randoMship !!!*/ 
    return this.ships.push(anyParam);
  }

  removeShip(anyShips) {
    return this.ships.splice(this.ships.findIndex(i => i.anyShips === anyShips), 1);
  }
}

module.exports = Port;
