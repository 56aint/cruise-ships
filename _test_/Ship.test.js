const { Port } = require("../src/");
const { Ship } = require("../src/");
//const { Itinerary } = require('..src/'); didnt work
const { Itinerary } = require("../src/");

describe('Ship function/class', () => {
  let dover;
  let ship;
  let calais;
  let route;

  beforeEach(() => {
    dover = new Port('Dover');
    //dover = jest.fn();
    calais = new Port('Calais');
    route = new Itinerary([dover, calais]);
    //route = jest.fn();
    ship = new Ship(route);


  });

  describe('Ship constructor', () => {
    it('Ship constructor returns an object', () => {
      expect(ship).toBeInstanceOf(Object);
    });
    it('that the ship has a starting port', () => {
      expect(ship.currentPort).toBe(dover);
    });
  })

  describe('ship sail', () => {
    it('that ship can set sail', () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(dover.ships).not.toContain(ship);
    });
  });

  describe('ship dock', () => {
    it('that ship can dock at a different ports', () => {
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toBe(calais);
      expect(ship.previousPort).toBe(dover);
      expect(calais.ships).toContain(ship);
    });
  });

  describe('ship sail-dock limit', () => {
    it('that Ship cannot sail further than its route', () => {
      ship.setSail();
      ship.dock();
      expect(() => ship.setSail()).toThrowError('This is the end of your route');
    });
  });

  describe('ships on instantiation', () => {
    it('that ships get added to ports on instantiation', () => {
      expect(dover.ships).toContain(ship);
    });
  });
});