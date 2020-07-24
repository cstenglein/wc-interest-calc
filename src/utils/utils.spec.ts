import { calcFinalAmount, calcInterest, calcDuration, calcPrincipal } from './utils';

describe('calcStartAmount', () => {
  it('returns correct startAmount', () => {
    expect(calcPrincipal(7, 7, 12000)).toEqual(7473.0);
    expect(calcPrincipal(3.5, 3, 37202.34)).toEqual(33554.38);
    expect(calcPrincipal(12, 25, 11000)).toEqual(647.06);
  });

  it('returns correct startAmount with interval set', () => {
    expect(calcPrincipal(7, 20, 1200000, 1)).toEqual(310102.8);
    expect(calcPrincipal(7, 20, 1200000, 2)).toEqual(303086.96);
    expect(calcPrincipal(7, 20, 1200000, 4)).toEqual(299521.37);
    expect(calcPrincipal(7, 20, 1200000, 12)).toEqual(297122.45);
  });
});

describe('calcInterest', () => {
  it('returns correct interest', () => {
    expect(calcInterest(5000, 7, 5729.99)).toEqual(1.97);
    expect(calcInterest(5000, 7, 10000)).toEqual(10.41);
    expect(calcInterest(5000, 12, 15692.14)).toEqual(10.0);
  });

  it('returns correct interest with interval set', () => {
    expect(calcInterest(20000, 35, 839273.0, 1)).toEqual(11.27);
    expect(calcInterest(20000, 35, 839273.0, 2)).toEqual(10.97);
    expect(calcInterest(20000, 35, 839273.0, 4)).toEqual(10.82);
    expect(calcInterest(20000, 35, 839273.0, 12)).toEqual(10.72);
  });
});

describe('calcDuration', () => {
  it('returns correct duration', () => {
    expect(calcDuration(5000, 3, 10000)).toEqual(23.45);
    expect(calcDuration(4000, 10, 101012.3)).toEqual(33.88);
    expect(calcDuration(4000, 100, 8000)).toEqual(1.0);
  });

  it('returns correct duration with interval set', () => {
    expect(calcDuration(5000, 3, 12930.23, 1)).toEqual(32.14);
    expect(calcDuration(5000, 3, 12930.23, 2)).toEqual(31.91);
    expect(calcDuration(5000, 3, 12930.23, 4)).toEqual(31.79);
    expect(calcDuration(5000, 3, 12930.23, 12)).toEqual(31.71);
  });
});

describe('calcFinalAmount', () => {
  it('returns correct finalAmount', () => {
    expect(calcFinalAmount(100, 7, 1)).toEqual(107.0);
    expect(calcFinalAmount(25000, 4, 24)).toEqual(64082.6);
    expect(calcFinalAmount(3722, 2.7, 42)).toEqual(11395.54);
  });

  it('returns correct finalAmount with interval set', () => {
    expect(calcFinalAmount(3722, 2.7, 42, 1)).toEqual(11395.54);
    expect(calcFinalAmount(3722, 2.7, 42, 2)).toEqual(11480.79);
    expect(calcFinalAmount(3722, 2.7, 42, 4)).toEqual(11524.22);
    expect(calcFinalAmount(3722, 2.7, 42, 12)).toEqual(11553.49);
  });
});
