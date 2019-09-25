const convert = require('../convert');

describe('Convert', () => {
  it('should return values multiply with success', () => {
    expect(convert.convert(4,4)).toBe(16);
  });
  it('should return values nullable', () => {
    expect(convert.convert(0,4)).toBe(0);
  });
  it('should convert Float to String', () => {
    expect(convert.toMoney(2)).toBe('2.00');
  });
  it('should convert String to Float', () => {
    expect(convert.toMoney('2')).toBe('2.00');
  });
});