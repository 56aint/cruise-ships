const { Port } = require('../src/');
//const { Ship } = require("../src/");

describe('Port object function/class', () => {
  let dover;
  let portNovo;
  let portChile;


  beforeEach(() => {
    dover = new Port('Dover');
    //dover = jest.fn();
    portNovo = new Port('portNovo');
    portChile = new Port('portChile');
  });


  describe('Port object function/class', () => {
    it('that constructor Port returns an object', () => {
      expect(dover).toBeInstanceOf(Object);
    });
    it('that Port object has a name property', () => {
      expect(dover.name).toBe('Dover');
      expect(portChile.name).toBe('portChile');
    });
  });

  describe('addShip and removeShip', () => {

    let randoMship;
    let anotherRandomShip;
    let titanic;
    let queenMarry;
    let covidVirus;
    let life;


    beforeEach(() => {
      //randoMship = {};
      randoMship = jest.fn()
      dover.addShip(randoMship);
      portChile.addShip(randoMship);
      
      anotherRandomShip = {};
      portNovo.addShip(anotherRandomShip);

      titanic = {};
      queenMarry = {};
      //covidVirus = {};
      covidVirus = jest.fn();
      life = {};
      dover.addShip(titanic);
      dover.addShip(covidVirus);
      dover.addShip(queenMarry);
      dover.addShip(life);
    });

    describe('addShip method', () => {
      it('that docking ship is added to number of ships at the port', () => {
        expect(dover.ships).toContain(randoMship);
        expect(portChile.ships).toContain(randoMship);
      });
      it('that docking ship is added to number of ships at the port', () => {
        expect(portNovo.ships).toContain(anotherRandomShip);
      });
    });

    describe('removeShip method', () => {
      it('that sailing ship is susbstracted from number of ships at the port', () => {

        dover.removeShip(queenMarry);
        dover.removeShip(covidVirus);

        expect(dover.ships).toEqual[titanic, life]; //*
      });
    });
  });
});