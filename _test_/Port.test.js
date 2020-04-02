const { Port } = require('../src/')

describe('Port object function/class', () => {
  const dover = new Port('Dover');

  it('that constructor Port returns an object', () => {
    expect(dover).toBeInstanceOf(Object);
  });
  it('that Port object has a name property', () => {
    expect(dover.name).toBe('Dover');
  });
});