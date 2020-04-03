const { Port } = require("../src/");
const { Itinerary } = require("../src/");

describe('Itinerary function/class', () => {
  let dover;
  let calais;
  let route;

  beforeEach(() => {
    dover = new Port('Dover');
    calais = new Port('Calais');
    route = new Itinerary([dover, calais]);
  });

  describe('Itinerary function/class', () => {
    it('that it returns an object', () => {
      expect(route).toBeInstanceOf(Object);
    })
    it('that Itenerary has a ports property', () => {
      expect(route.ports).toEqual([dover, calais]);
    });
  });



});