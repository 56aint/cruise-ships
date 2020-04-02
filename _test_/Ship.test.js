const { Port } = require('../src/')
const { Ship } = require('../src/')

describe('Ship function/class', () => {
  const dover = new Port('Dover');  
  const ship = new Ship(dover);
  
  it('constructor Ship returns an object', () => {
    expect(ship).toBeInstanceOf(Object);
  });
  it('that the ship has a starting port', () => {
    expect(ship.currentPort).toBe(dover);
  });
  it('can set sail', () => {

    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
  it('that ship can dock at a different port', () => {


    const calais = new Port('Calais');
    ship.dock(calais);

    expect(ship.currentPort).toBe(calais);
  });

});