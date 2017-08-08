const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should correctly tell if a string is a real string', () => {
    expect(isRealString({Hello: 'Jen'})).toBe(false);
    expect(isRealString('   ')).toBe(false);
    expect(isRealString(' Hey Jen ')).toBe(true);
  });
});
