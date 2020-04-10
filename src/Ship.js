class Ship {
  constructor(route) {
    this.route = route;
    this.currentPort = route.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
  }

  setSail() {
    const route = this.route;
    const currentPortIndex = route.ports.indexOf(this.currentPort);

    if (currentPortIndex === route.ports.length - 1) {
      throw new Error("This is the end of your route");
    }

    this.previousPort = this.currentPort;
    this.currentPort = null;
    this.previousPort.removeShip(this);
  }

  dock() {
    const route = this.route;
    const previousPortIndex = route.ports.indexOf(this.previousPort);
    this.currentPort = route.ports[previousPortIndex + 1];
    this.currentPort.addShip(this);
  }
}
module.exports = Ship;
