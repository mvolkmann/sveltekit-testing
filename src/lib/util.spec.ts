import {add} from './util';
describe('util', () => {
  test('add works', () => {
    expect(add(0, 0)).toBe(0);
    expect(add(1, 2)).toBe(3);
  });
});
