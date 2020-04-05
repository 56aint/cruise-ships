const { Port } = require('../src/');
//const { Ship } = require("../src/");

describe('Port object function/class', () => {
  let dover;


  beforeEach(() => {
    dover = new Port('Dover');
    
  });


  describe('Port object function/class', () => {
    //const dover = new Port('Dover');
    it('that constructor Port returns an object', () => {
      expect(dover).toBeInstanceOf(Object);
    });
    it('that Port object has a name property', () => {
      expect(dover.name).toBe('Dover');
    });
  });

  describe('addShip method', () => {
    it('that docking ship is added to number of ships at the port', () => {
      //const dover = new Port('Dover');
      const randoMship = {};
      dover.addShip(randoMship);
      expect(dover.ships).toContain(randoMship);
    });
  });

  describe('removeShip method', () => {
    it('that sailing ship is susbstracted from number of ships at the port', () => {
      //ship.setSail()
      const titanic = {};
      const queenMarry = {};
      const covidVirus = {};
      const live = {};

      dover.addShip(titanic);
      dover.addShip(covidVirus);
      dover.addShip(queenMarry);
      dover.addShip(live);
      dover.removeShip(queenMarry);
      dover.removeShip(covidVirus);

      expect(dover.ships).toEqual[titanic, live]; //*
    });
  });
});