const { Ship } = require('../src')

describe('Ship function/class', () => {
  let ship
  beforeEach(() => {
    ship = new Ship('Dover');
  });

  it('constructor Ship returns an object', () => {
    expect(new Ship).toBeInstanceOf(Object);
  });
  //const ship = new Ship('ship');
  it('that the ship has a starting point', () => {
    expect(ship.startingPoint).toMatch('Hello, welcome to Dover! Your cruise starts here (˃̣̣̥ w ˂̣̣̥)')
  });

  it('can set sail', () => {
    ship.setSail();
    expect(ship.startingPoint).toBeFalsy();
  });

  /*it('the ship can get passengers', () => {
    expect(ship.getPassenger(1)).toMatch('Hop-on friend!')
  });
  xit('the ship can get passengers', () => {
    expect(ship.getPassenger(399)).toMatch('Hey friend, seats are full, can you stand?')
  });

  xit('the ship can get passengers', () => {
    expect(ship.getPassenger(601)).toMatch('sorry, ship is full')
  });*/



});