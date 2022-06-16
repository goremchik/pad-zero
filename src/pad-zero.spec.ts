import { expect } from 'expect';
import { padZero } from './pad-zero';

describe('padZero', () => {
  it('should add one 0 to the beginning', function () {
    expect(padZero(2, 3)).toBe('03');
  });

  it('should add two 0 to the beginning', function () {
    expect(padZero(4, 47)).toBe('0047');
  });

  it('should add two 0 to the beginning with curring', function () {
    expect(padZero(4)(47)).toBe('0047');
  });
});
