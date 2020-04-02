
class Ship {
  constructor(currentPort) {
    this._currentPort = currentPort;
  }

  get currentPort() {
    return this._currentPort;
  }
  
  setSail() {
    this._currentPort = !this._currentPort
  }

  dock(portName) {
    return this._currentPort = portName;
  }


};
module.exports = Ship;





