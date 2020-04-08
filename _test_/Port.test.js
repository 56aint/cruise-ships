const { Port } = require("../src");
// const { Ship } = require("../src/");

describe("Port object function/class", () => {
  let dover;
  let portNovo;
  let portChile;

  let randoMship;
  let anotherRandomShip;
  let titanic;
  let queenMarry;
  let covidVirus;
  let life;
  let livelyLife;

  beforeEach(() => {
    dover = new Port("Dover");
    portNovo = new Port("portNovo");
    portChile = new Port("portChile");

    // covidVirus = {};
    covidVirus = jest.fn();
    // randoMship = {};
    randoMship = jest.fn();
    // anotherRandomShip = {};
    anotherRandomShip = jest.fn();
    // titanic = {};
    titanic = jest.fn();
    // queenMarry = {};
    queenMarry = jest.fn();
    //livelyLife = {};
    livelyLife = jest.fn();
    // life = {};
    //live = jest.fn();
  });

  describe("Port object function/class", () => {
    it("that constructor Port returns an object", () => {
      expect(dover).toBeInstanceOf(Object);
    });
    it("that Port object has a name property", () => {
      expect(dover.name).toBe("Dover");
      expect(portChile.name).toBe("portChile");
    });
  });

  describe("addShip method", () => {
    it("that docking ship is added to number of ships at the port", () => {
      dover.addShip(randoMship);
      portChile.addShip(randoMship);
      expect(dover.ships).toContain(randoMship);
      expect(portChile.ships).toContain(randoMship);
    });
    it("that docking ship is added to number of ships at the port", () => {
      portNovo.addShip(anotherRandomShip);
      expect(portNovo.ships).toContain(anotherRandomShip);
    });
  });

  describe("removeShip method", () => {
    it("that sailing ship is susbstracted from number of ships at the port", () => {
      // portNovo.addShip(anotherRandomShip);
      // dover.addShip(randoMship);
      // portChile.addShip(randoMship);
      dover.addShip(covidVirus);
      dover.addShip(queenMarry);
      dover.addShip(titanic);
      dover.addShip(livelyLife);
      //dover.addShip(live);
      //dover.removeShip(life);
      dover.removeShip(covidVirus);
      // portChile.removeShip(randoMship);
      // dover.removeShip(randoMship);
      // portNovo.removeShip(anotherRandomShip);
      //console.log(dover.ships);

      expect(dover.ships).toContain(titanic);
      expect(dover.ships).toContain(queenMarry);
      //expect(dover.ships).toContain(livelyLife);
      //expect(dover.ships).toContain(covidVirus);
      //expect(dover.ships).toEqual([titanic, covidVirus, queenMarry]);
    });
  });
});
