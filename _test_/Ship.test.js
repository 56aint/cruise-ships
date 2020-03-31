const { Ship } = require('../src')

describe('Ship function/class', () => {
  let ship
  beforeEach(() => {
    ship = new Ship('ship');
  });

  it('constructor Ship returns an object', () => {
    expect(new Ship).toBeInstanceOf(Object);
  })
  //const ship = new Ship('ship');
  it('that the ship has a starting point', () => {
    expect(ship.startingPoint).toBe('Hello, welcome to Dover! Your cruise starts here (˃̣̣̥ w ˂̣̣̥)')
  });
});