import { calcFinalAmount, calcInterest, calcDuration, calcPrincipal } from './utils';

describe('calcStartAmount', () => {
  it('returns correct startAmount', () => {
    expect(calcPrincipal(7, 7, 12000)).toEqual(7473.0);
    expect(calcPrincipal(3.5, 3, 37202.34)).toEqual(33554.38);
    expect(calcPrincipal(12, 25, 11000)).toEqual(647.06);
  });
});

describe('calcInterest', () => {
  it('returns correct interest', () => {
    expect(calcInterest(5000, 7, 5729.99)).toEqual(1.97);
    expect(calcInterest(5000, 7, 10000)).toEqual(10.41);
    expect(calcInterest(5000, 12, 15692.14)).toEqual(10.0);
  });
});

describe('calcDuration', () => {
  it('returns correct duration', () => {
    expect(calcDuration(5000, 3, 10000)).toEqual(23.45);
    expect(calcDuration(4000, 10, 101012.3)).toEqual(33.88);
    expect(calcDuration(4000, 100, 8000)).toEqual(1.0);
  });
});

describe('calcFinalAmount', () => {
  it('returns correct finalAmount', () => {
    expect(calcFinalAmount(100, 7, 1)).toEqual(107.0);
    expect(calcFinalAmount(25000, 4, 24)).toEqual(64082.6);
    expect(calcFinalAmount(3722, 2.7, 42)).toEqual(11395.54);
  });
});
