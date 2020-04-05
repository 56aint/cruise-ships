class Port {
  constructor(name) {
    this._name = name;
    this.ships = [];
  }

  get name() {
    return this._name;
  }

  addShip(randoMship) {     //* watch randoMship( not 'ship')!!!*/
    return this.ships.push(randoMship);
  }

  removeShip(randoMship) {
    return this.ships.splice(this.ships.findIndex(i => i.randoMship === randoMship), 1);
  }

};

module.exports = Port;