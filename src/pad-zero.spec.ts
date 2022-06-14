import { expect } from 'expect';
import { padZero } from './pad-zero';

describe('padZero', () => {
  it('should add one 0 to the beginning', function () {
    expect(padZero(3)).toBe('03');
  });

  it('should add two 0 to the beginning', function () {
    expect(padZero(47, 4)).toBe('0047');
  });
});
