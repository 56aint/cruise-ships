//import Itinerary from '../src/Itinerary';
//import Itinerary from '../src/Itinerary';
const { Port } = require("../src/");
const { Ship } = require("../src/");
//const { Itinerary } = require('..src/'); didnt work
const { Itinerary } = require("../src/");

describe('Itinerary function/class', () => {
  let dover;
  let ship;
  let calais;
  let route;

  beforeEach(() => {
    dover = new Port('Dover');
    //ship = new Ship(dover);
    calais = new Port('Calais');
    route = new Itinerary([dover, calais]);
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
    });
  });

  describe('ship dock', () =>{
    it('that ship can dock at a different ports', () => {
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toBe(calais);
      expect(ship.previousPort).toBe(dover);
    });
  });

  describe('ship sail-dock limit', () => {
    it('that Ship cannot sail further than its route', () => {
      ship.setSail();
      ship.dock();
      expect( () => ship.setSail()).toThrowError('This is the end of your route');
    });
  });
});